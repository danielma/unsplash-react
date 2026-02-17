import { createApi } from "unsplash-js"
import type { ApiResponse } from "unsplash-js/dist/helpers/response"
import type { Basic as UnsplashBasicPhoto, Full as UnsplashFullPhoto } from "unsplash-js/dist/methods/photos/types"
import type { Photos as SearchPhotosResponse } from "unsplash-js/dist/methods/search/types/response"

interface UnsplashApiErrorStatus {
  status: number
  statusText: string
}

class UnsplashApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

class ChaosMonkey {
  process: <T>(r: T) => T | UnsplashApiErrorStatus

  constructor(shouldDoAnything: boolean) {
    if (shouldDoAnything) {
      this.process = <T>(r: T) => (Math.random() > 0.5 ? this.failResponse() : r)
    } else {
      this.process = <T>(r: T) => r
    }
  }

  failResponse(): UnsplashApiErrorStatus {
    const errors: [number, string][] = [
      [400, "bad request"],
      [503, "gateway timeout"],
      [500, "server error"],
      [401, "not authorized"],
    ]
    const error = errors[Math.round(Math.random() * (errors.length - 1))]
    return { status: error[0], statusText: error[1] }
  }
}

interface UnsplashWrapperOptions {
  accessKey: string
  __debug_chaosMonkey?: boolean
}

interface DownloadPhotoResponse {
  url: string
}

interface SearchParams {
  [key: string]: unknown
}

type UnsplashApi = ReturnType<typeof createApi>

// Extract the success response type
type SuccessResponse<T> = Extract<ApiResponse<T>, { type: "success" }>

export default class UnsplashWrapper {
  private __debug_chaosMonkey: ChaosMonkey
  private unsplash: UnsplashApi

  constructor({ accessKey, __debug_chaosMonkey = false }: UnsplashWrapperOptions) {
    this.__debug_chaosMonkey = new ChaosMonkey(__debug_chaosMonkey)
    this.unsplash = createApi({ accessKey })
  }

  listPhotos = (
    page: number,
    perPage: number,
    _orderBy = "popular",
    searchParams: SearchParams = {}
  ): Promise<UnsplashBasicPhoto[]> => {
    return this.unsplash.photos
      .list({ page, perPage, ...searchParams })
      .then((response) => this.processResponse(response))
      .then((successResponse) => successResponse.response.results)
  }

  searchPhotos = (
    query: string,
    page: number,
    perPage: number,
    searchParams: SearchParams = {}
  ): Promise<SearchPhotosResponse> => {
    return this.unsplash.search
      .getPhotos({ query, page, perPage, ...searchParams })
      .then((response) => this.processResponse(response))
      .then((successResponse) => successResponse.response)
  }

  getPhoto = (
    id: string,
    size?: { width?: number; height?: number }
  ): Promise<UnsplashFullPhoto> => {
    return this.unsplash.photos
      .get({ photoId: id, ...size })
      .then((response) => this.processResponse(response))
      .then((successResponse) => successResponse.response)
  }

  downloadPhoto = (photo: { links: { download_location: string } }): Promise<DownloadPhotoResponse> => {
    return this.unsplash.photos
      .trackDownload({ downloadLocation: photo.links.download_location })
      .then((response) => this.processResponse(response))
      .then((successResponse) => successResponse.response)
  }

  private processResponse = <T>(incomingResponse: ApiResponse<T>): Promise<SuccessResponse<T>> => {
    const processed = this.__debug_chaosMonkey.process(incomingResponse)

    // Check if ChaosMonkey replaced it with a fake error
    if ("statusText" in processed) {
      return Promise.reject(new UnsplashApiError(processed.statusText, processed.status))
    }

    return Promise.resolve(processed).then((response) => this.handleErrors(response))
  }

  private handleErrors<T>(response: ApiResponse<T>): SuccessResponse<T> {
    if (response.type !== "success") {
      const error = new UnsplashApiError(
        response.errors?.join(", ") || "Unknown error",
        response.status
      )
      throw error
    }

    return response
  }
}

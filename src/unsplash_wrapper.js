import Unsplash from "unsplash-js"
import { toJson } from "./utils"

class ChaosMonkey {
  constructor(shouldDoAnything) {
    if (shouldDoAnything) {
      this.process = r => (Math.random() > 0.5 ? this.failResponse(r) : r)
    } else {
      this.process = r => r
    }
  }

  failResponse(_response) {
    const errors = [
      [400, "bad request"],
      [503, "gateway timeout"],
      [500, "server error"],
      [401, "not authorized"],
    ]
    const error = errors[Math.round(Math.random() * (errors.length - 1))]
    return new Response(JSON.stringify({}), { status: error[0], statusText: error[1] })
  }
}

export default class UnsplashWrapper {
  constructor({ accessKey, __debug_chaosMonkey = false }) {
    this.__debug_chaosMonkey = new ChaosMonkey(__debug_chaosMonkey)
    this.unsplash = new Unsplash({ applicationId: accessKey })
  }

  listPhotos = (page, perPage, type = "popular") => {
    return this.unsplash.photos.listPhotos(page, perPage, type).then(this.processResponse)
  }

  searchPhotos = (search, page, perPage) => {
    return this.unsplash.search.photos(search, page, perPage).then(this.processResponse)
  }

  getPhoto = (id, { width, height } = {}) => {
    return this.unsplash.photos.getPhoto(id, width, height).then(this.processResponse)
  }

  downloadPhoto = photo => {
    return this.unsplash.photos.downloadPhoto(photo).then(this.processResponse)
  }

  processResponse = incomingResponse => {
    const response = Promise.resolve(this.__debug_chaosMonkey.process(incomingResponse))

    return response.then(this.handleErrors).then(toJson)
  }

  handleErrors(response) {
    if (!response.ok) {
      const error = Error(response.statusText)
      error.status = response.status
      throw error
    }

    return response
  }
}

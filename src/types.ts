import type { ComponentType } from "react"

/**
 * The URLs object returned by Unsplash API for a photo
 */
export interface UnsplashPhotoUrls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

/**
 * The links object returned by Unsplash API for a photo
 */
export interface UnsplashPhotoLinks {
  self: string
  html: string
  download: string
  download_location: string
}

/**
 * A simplified user object from Unsplash API
 */
export interface UnsplashUser {
  id: string
  name: string
  links: {
    html: string
  }
}

/**
 * The main photo object returned by Unsplash API
 */
export interface UnsplashPhoto {
  id: string
  urls: UnsplashPhotoUrls
  links: UnsplashPhotoLinks
  user: UnsplashUser
}

/**
 * Preferred dimensions for photo downloads
 */
export interface PreferredSize {
  width: number
  height: number
}

/**
 * Handler called when an uploader finishes its work.
 * The response type varies by uploader implementation.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FinishedUploadingHandler<T = any> = (response?: T) => void

/**
 * Function that downloads a photo and returns a fetch Response promise
 */
export type DownloadPhotoFn = (photo: UnsplashPhoto) => Promise<Response>

/**
 * Props that all Uploader components receive from UnsplashPicker
 */
export interface UploaderProps {
  /** The currently selected Unsplash photo, or null if none selected */
  unsplashPhoto: UnsplashPhoto | null
  /** Function to download the photo, returns a Promise<Response> */
  downloadPhoto: DownloadPhotoFn
  /** Callback when uploading is complete */
  onFinishedUploading: FinishedUploadingHandler
}

/**
 * Props for the BlobUploader, which adds onBlobLoaded callback
 */
export interface BlobUploaderProps extends UploaderProps {
  /** Called when the blob is loaded, should return a Promise that resolves when upload is complete */
  onBlobLoaded: (blob: Blob) => Promise<unknown>
}

/**
 * Props for ExternalLocationUploader
 */
export interface ExternalLocationUploaderProps extends UploaderProps {
  /** URL to POST the blob to */
  uploadUrl: string
  /** Form field name for the uploaded file */
  name: string
}

/**
 * Props for Base64Uploader, which accepts HTML input attributes
 */
export interface Base64UploaderProps extends UploaderProps {
  /** Form field name for the hidden input */
  name?: string
}

/**
 * A React component that handles photo upload/processing
 */
export type UploaderComponent = ComponentType<UploaderProps>

/**
 * CSS custom properties for the photo grid styling
 */
export interface PhotoGridCSSProperties extends React.CSSProperties {
  "--imageWidth": string
  "--imageHeight": string
}

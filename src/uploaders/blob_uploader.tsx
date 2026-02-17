import React from "react"
import type { BlobUploaderProps } from "../types"

export default class BlobUploader extends React.Component<BlobUploaderProps> {
  componentDidUpdate(prevProps: BlobUploaderProps) {
    const prevPhoto = prevProps.unsplashPhoto
    const nextPhoto = this.props.unsplashPhoto
    if ((prevPhoto?.id) === (nextPhoto?.id)) return
    if (!nextPhoto) return

    this.props
      .downloadPhoto(nextPhoto)
      .then((r) => r.blob())
      .then(this.props.onBlobLoaded)
      .then(this.props.onFinishedUploading)
  }

  render() {
    return null
  }
}

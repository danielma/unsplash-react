import React from "react"
import type { UploaderProps } from "../types"

export default class InsertIntoApplicationUploader extends React.Component<UploaderProps> {
  componentDidUpdate(prevProps: UploaderProps) {
    const prevPhoto = prevProps.unsplashPhoto
    const nextPhoto = this.props.unsplashPhoto
    if ((prevPhoto?.id) === (nextPhoto?.id)) return
    if (!nextPhoto) return

    this.props
      .downloadPhoto(nextPhoto)
      .then((r) => r.url)
      .then(this.props.onFinishedUploading)
  }

  render() {
    return null
  }
}

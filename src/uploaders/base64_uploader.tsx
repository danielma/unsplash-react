import React from "react"
import type { UploaderProps } from "../types"

interface Base64UploaderState {
  blob: Blob | null
}

export default class Base64Uploader extends React.Component<UploaderProps, Base64UploaderState> {
  private input: HTMLInputElement | null = null

  state: Base64UploaderState = { blob: null }

  componentDidUpdate(prevProps: UploaderProps) {
    const prevPhoto = prevProps.unsplashPhoto
    const nextPhoto = this.props.unsplashPhoto
    if ((prevPhoto?.id) === (nextPhoto?.id)) return
    if (!nextPhoto) return

    this.props
      .downloadPhoto(nextPhoto)
      .then((r) => r.blob())
      .then((blob) => this.setState({ blob }))
  }

  componentDidMount() {
    this.processBlob()
  }

  processBlob() {
    if (this.input && this.state.blob) {
      const reader = new FileReader()
      reader.readAsDataURL(this.state.blob)
      reader.onloadend = () => {
        if (this.input && typeof reader.result === "string") {
          this.input.value = reader.result
          this.props.onFinishedUploading()
        }
      }
    }
  }

  render() {
    const {
      unsplashPhoto,
      downloadPhoto: _downloadPhoto,
      onFinishedUploading: _onFinishedUploading,
      ...restProps
    } = this.props
    const { blob } = this.state

    if (!(unsplashPhoto && blob)) return null

    // Process blob on each render when we have both input and blob
    // Using setTimeout to ensure this happens after render
    setTimeout(() => this.processBlob(), 0)

    return (
      <input
        type="hidden"
        name="file"
        ref={(input) => (this.input = input)}
        {...restProps}
      />
    )
  }
}

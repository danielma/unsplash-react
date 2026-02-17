import React from "react"
import type { UploaderProps } from "../types"

interface DataTransferUploaderState {
  blob: Blob | null
}

export default class DataTransferUploader extends React.Component<
  UploaderProps,
  DataTransferUploaderState
> {
  private input: HTMLInputElement | null = null

  state: DataTransferUploaderState = { blob: null }

  componentDidUpdate(prevProps: UploaderProps, prevState: DataTransferUploaderState) {
    const prevPhoto = prevProps.unsplashPhoto
    const nextPhoto = this.props.unsplashPhoto
    if ((prevPhoto?.id) !== (nextPhoto?.id) && nextPhoto) {
      this.props
        .downloadPhoto(nextPhoto)
        .then((r) => r.blob())
        .then((blob) => this.setState({ blob }))
      return
    }

    // Handle blob state change
    if (this.input && this.state.blob && this.state.blob !== prevState.blob) {
      const dt = new DataTransfer()
      dt.items.add(new File([this.state.blob], "image.jpg"))
      this.input.files = dt.files
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

    return (
      <input
        type="file"
        name="file"
        ref={(input) => (this.input = input)}
        {...restProps}
      />
    )
  }
}

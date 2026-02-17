import React from "react"
import BlobUploader from "./blob_uploader"
import type { ExternalLocationUploaderProps } from "../types"

export default class ExternalLocationUploader extends React.Component<ExternalLocationUploaderProps> {
  handleBlobLoaded = (blob: Blob): Promise<Response> => {
    const formData = new FormData()
    formData.append(this.props.name, blob, "image.jpg")
    return fetch(this.props.uploadUrl, {
      method: "POST",
      body: formData,
      credentials: "include",
    }).then((r) => {
      const response = r.clone()
      return r.text().then(() => response)
    })
  }

  render() {
    return <BlobUploader {...this.props} onBlobLoaded={this.handleBlobLoaded} />
  }
}

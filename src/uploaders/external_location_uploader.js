import React from "react"
import BlobUploader from "./blob_uploader"
import propTypes from "prop-types"
const { shape, string, func } = propTypes

export default class ExternalLocationUploader extends React.Component {
  static propTypes = {
    unsplashPhoto: shape({
      id: string.isRequired,
      links: shape({
        download: string.isRequired,
        download_location: string.isRequired,
      }).isRequired,
    }),
    downloadPhoto: func.isRequired,
    onFinishedUploading: func.isRequired,
    uploadUrl: string.isRequired,
    name: string.isRequired,
  }

  handleBlobLoaded = blob => {
    const formData = new FormData()
    formData.append(this.props.name, blob, "image.jpg")
    return fetch(this.props.uploadUrl, {
      method: "POST",
      body: formData,
      credentials: "include",
    }).then(r => {
      const response = r.clone()
      return r.text().then(() => response)
    })
  }

  render() {
    return <BlobUploader {...this.props} onBlobLoaded={this.handleBlobLoaded} />
  }
}

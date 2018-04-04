import React from "react"
import propTypes from "prop-types"
const { shape, string, func } = propTypes

export default class Base64Uploader extends React.Component {
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
  }

  state = { blob: null }

  componentWillReceiveProps(nextProps) {
    const prevPhoto = this.props.unsplashPhoto
    const nextPhoto = nextProps.unsplashPhoto
    if ((prevPhoto && prevPhoto.id) === (nextPhoto && nextPhoto.id)) return

    nextProps
      .downloadPhoto(nextPhoto)
      .then(r => r.blob())
      .then(blob => this.setState({ blob }))
  }

  componentDidUpdate() {
    if (this.input && this.state.blob) {
      const reader = new FileReader()
      reader.readAsDataURL(this.state.blob)
      reader.onloadend = () => {
        this.input.value = reader.result
        this.props.onFinishedUploading()
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

    return <input type="hidden" name="file" ref={input => (this.input = input)} {...restProps} />
  }
}

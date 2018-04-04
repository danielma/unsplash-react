import React from "react"
import propTypes from "prop-types"
const { string, func, shape } = propTypes

export default class DataTransferUploader extends React.Component {
  static propTypes = {
    unsplashPhoto: shape({
      id: string.isRequired,
      links: shape({
        download: string.isRequired,
        download_location: string.isRequired,
      }).isRequired,
    }),
    downloadPhoto: func.isRequired,
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
      const dt = new DataTransfer()
      dt.items.add(new File([this.state.blob], "image.jpg"))
      this.input.files = dt.files
    }
  }

  render() {
    const { unsplashPhoto, downloadPhoto: _downloadPhoto, ...restProps } = this.props
    const { blob } = this.state

    if (!(unsplashPhoto && blob)) return null

    return <input type="file" name="file" ref={input => (this.input = input)} {...restProps} />
  }
}

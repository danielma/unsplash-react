import React from "react"
import Spinner from "./spinner"

interface SpinnerImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  style?: React.CSSProperties
}

interface SpinnerImgState {
  loaded: boolean
}

const blank = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="

export default class SpinnerImg extends React.Component<SpinnerImgProps, SpinnerImgState> {
  private img: HTMLImageElement | null = null

  state: SpinnerImgState = {
    loaded: false,
  }

  componentDidMount() {
    this.img = new Image()
    this.img.onload = () => {
      this.setState({ loaded: true })
    }
    this.img.src = this.props.src
  }

  componentWillUnmount() {
    if (this.img) {
      this.img.onload = () => undefined
    }
  }

  render() {
    const { loaded } = this.state
    const { src, style = {}, ...rest } = this.props

    return (
      <div className="p-r">
        <img
          {...rest}
          src={this.state.loaded ? src : blank}
          className="unsplash-react__image"
          style={{
            ...style,
            transition: `opacity .3s, ${style.transition || ""}`,
            opacity: loaded ? 1 : 0,
          }}
        />
        {loaded || (
          <div
            className="p-a"
            style={{
              width: "40px",
              height: "40px",
              top: "50%",
              left: "50%",
              margin: "-20px 0 0 -20px",
            }}
          >
            <Spinner size="40px" color="rgba(0,0,0,0.5)" />
          </div>
        )}
      </div>
    )
  }
}

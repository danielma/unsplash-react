import React from "react"
import Spinner from "react-svg-spinner"
import propTypes from "prop-types"
const { string, object } = propTypes

const blank = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="

export default class SpinnerImg extends React.Component {
  static propTypes = {
    src: string.isRequired,
    style: object,
  }

  static defaultProps = { style: {} }

  state = {
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
    this.img.onload = () => undefined
  }

  render() {
    const { loaded } = this.state
    const { src, style, ...rest } = this.props

    return (
      <div className="p-r">
        <img
          {...rest}
          src={this.state.loaded ? src : blank}
          style={{
            ...style,
            transition: `opacity .3s, ${style.transition}`,
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

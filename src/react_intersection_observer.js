import React from "react"
import propTypes from "prop-types"
const { instanceOf, func, node } = propTypes

export default class ReactIntersectionObserver extends React.Component {
  static propTypes = {
    root: instanceOf(HTMLElement),
    onIntersectionChange: func.isRequired,
    children: node.isRequired,
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(this.handleObserverFired, {
      root: this.props.root,
      rootMargin: "0px",
      threshold: [0, 0.25],
    })

    this.observer.observe(this.element)
  }

  componentWillUnmount() {
    this.observer.unobserve(this.element)
  }

  handleObserverFired = observations => {
    const lastObservation = observations[observations.length - 1]

    this.props.onIntersectionChange(lastObservation.isIntersecting)
  }

  render() {
    const {
      root: _root,
      onIntersectionChange: _onIntersectionChange,
      children,
      ...rest
    } = this.props

    return (
      <div ref={element => (this.element = element)} {...rest}>
        {children}
      </div>
    )
  }
}

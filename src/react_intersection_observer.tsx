import React from "react"

interface ReactIntersectionObserverProps extends React.HTMLAttributes<HTMLDivElement> {
  root?: HTMLElement | null
  onIntersectionChange: (isIntersecting: boolean) => void
  children: React.ReactNode
}

export default class ReactIntersectionObserver extends React.Component<ReactIntersectionObserverProps> {
  private observer: IntersectionObserver | null = null
  private element: HTMLDivElement | null = null

  componentDidMount() {
    this.observer = new IntersectionObserver(this.handleObserverFired, {
      root: this.props.root,
      rootMargin: "0px",
      threshold: [0, 0.25],
    })

    if (this.element) {
      this.observer.observe(this.element)
    }
  }

  componentWillUnmount() {
    if (this.observer && this.element) {
      this.observer.unobserve(this.element)
    }
  }

  handleObserverFired = (observations: IntersectionObserverEntry[]) => {
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
      <div ref={(element) => (this.element = element)} {...rest}>
        {children}
      </div>
    )
  }
}

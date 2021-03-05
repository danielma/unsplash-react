import React from "react"

export function debounce(wait, func) {
  let timeout = null

  return (...args) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => func(...args), wait)
  }
}

export function throttle(wait, func) {
  let timeout = null
  let latestArgs = null

  return (...args) => {
    latestArgs = args
    if (timeout) return // do nothing, we're waiting for the timeout to fire

    func(...latestArgs)

    timeout = setTimeout(() => {
      clearTimeout(timeout)
      timeout = null
      func(...latestArgs)
    }, wait)
  }
}

export function withDefaultProps(Component, defaultProps) {
  const WrappedComponent = props => {
    return <Component {...defaultProps} {...props} />
  }

  WrappedComponent.displayName = `withDefaultProps(${Component.name})`

  return WrappedComponent
}

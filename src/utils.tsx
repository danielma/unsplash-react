import React, { ComponentType } from "react"

type AnyFunction = (...args: never[]) => unknown

export function debounce<T extends AnyFunction>(wait: number, func: T): T {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return ((...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => func(...args), wait)
  }) as T
}

export function throttle<T extends AnyFunction>(wait: number, func: T): T {
  let timeout: ReturnType<typeof setTimeout> | null = null
  let latestArgs: Parameters<T> | null = null

  return ((...args: Parameters<T>) => {
    latestArgs = args
    if (timeout) return // do nothing, we're waiting for the timeout to fire

    func(...latestArgs)

    timeout = setTimeout(() => {
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = null
      if (latestArgs) {
        func(...latestArgs)
      }
    }, wait)
  }) as T
}

export function withDefaultProps<P extends object, D extends Partial<P>>(
  Component: ComponentType<P>,
  defaultProps: D
): ComponentType<Omit<P, keyof D> & Partial<D>> {
  const WrappedComponent = (props: Omit<P, keyof D> & Partial<D>) => {
    // Merge default props with provided props to create complete props
    const mergedProps = { ...defaultProps, ...props } as unknown as P
    return <Component {...mergedProps} />
  }

  WrappedComponent.displayName = `withDefaultProps(${Component.displayName || Component.name})`

  return WrappedComponent
}

export function NullComponent(): null {
  return null
}

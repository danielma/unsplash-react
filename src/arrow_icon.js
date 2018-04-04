import React from "react"
import propTypes from "prop-types"
const { number, object, string, oneOfType } = propTypes

SearchIcon.propTypes = {
  width: oneOfType([number, string]),
  height: oneOfType([number, string]),
  style: object,
}

export default function SearchIcon({ width = 32, height = 32, style = {} }) {
  return (
    <svg width={width} height={height} style={style} viewBox="0 0 166 166">
      <g id="Canvas" transform="translate(-8 67)">
        <g id="Arrow">
          <use
            xlinkHref="#path0_stroke"
            transform="matrix(0.707107 -0.707107 0.707107 0.707107 17 90)"
          />
        </g>
      </g>
      <defs>
        <path
          style={{ fill: "currentColor" }}
          id="path0_stroke"
          d="M 213.546 8.48528C 218.233 3.79899 218.233 -3.79899 213.546 -8.48528L 137.179 -84.8528C 132.492 -89.5391 124.894 -89.5391 120.208 -84.8528C 115.522 -80.1665 115.522 -72.5685 120.208 -67.8823L 188.09 0L 120.208 67.8823C 115.522 72.5685 115.522 80.1665 120.208 84.8528C 124.894 89.5391 132.492 89.5391 137.179 84.8528L 213.546 8.48528ZM 0 12L 205.061 12L 205.061 -12L 0 -12L 0 12Z"
        />
      </defs>
    </svg>
  )
}

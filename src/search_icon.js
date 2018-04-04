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
    <svg width={width} height={height} style={style} viewBox="0 0 16.7 16.7">
      <path
        style={{ fill: "currentColor" }}
        d="M16.7,15.3l-4.2-4.2c2-2.7,1.8-6.6-0.7-9.1c-1.4-1.4-3.1-2-4.9-2C5.2,0,3.4,0.7,2,2c-2.7,2.7-2.7,7.1,0,9.8
    	c1.4,1.4,3.1,2,4.9,2c1.5,0,2.9-0.5,4.1-1.4l4.2,4.2L16.7,15.3z M3.4,10.4c-1.9-1.9-1.9-5.1,0-7C4.4,2.5,5.6,2,6.9,2
    	c1.3,0,2.6,0.5,3.5,1.4c1.9,1.9,1.9,5.1,0,7c-0.9,0.9-2.2,1.4-3.5,1.4S4.4,11.4,3.4,10.4z"
      />
    </svg>
  )
}

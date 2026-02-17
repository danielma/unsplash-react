import React from "react"

interface ArrowIconProps {
  width?: number | string
  height?: number | string
  style?: React.CSSProperties
}

export default function ArrowIcon({
  width = 32,
  height = 32,
  style = {},
}: ArrowIconProps) {
  return (
    <svg width={width} height={height} style={style} viewBox="0 0 14 14">
      <g>
        <polygon
          style={{ fill: "currentColor" }}
          points="4,10.9 8.8,6 8.8,8.5 10.3,8.5 10.3,3.5 5.3,3.5 5.3,5 7.8,5 2.9,9.8"
        />
        <path
          style={{ fill: "currentColor" }}
          d="M13,0H1C0.4,0,0,0.4,0,1v12c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V1C14,0.4,13.6,0,13,0z M12.5,12.5h-11v-11h11V12.5z"
        />
      </g>
    </svg>
  )
}

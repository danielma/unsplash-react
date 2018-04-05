import React from "react"
import propTypes from "prop-types"
const { number, object, string, oneOfType } = propTypes

ErrorImage.propTypes = {
  width: oneOfType([number, string]),
  height: oneOfType([number, string]),
  style: object,
}

export default function ErrorImage({ width = 143, height = 109, style = {} }) {
  return (
    <svg width={width} height={height} viewBox="0 0 105.597 80.577">
      <g style={{ opacity: 0.6000000000000001 }}>
        <path d="M102.54,44.008A54.868,54.868,0,0,1,81.015,71.727c-9.272,5.971-19.156,7.447-30.5,4.956-11.219-2.521-22.3-7.648-31.46-12.508C9.971,59.07,2.81,54.393,1.033,47.046-.711,39.9,3.108,30,12.293,20.254,21.374,10.667,35.821,1.771,53,.307,70.062-1.411,85.737,4.279,94.726,12.58,103.947,20.923,106.493,32.285,102.54,44.008Z" style={{ fill: '#e1f0f9' }}/>
      </g>
      <g style={{ opacity: 0.2 }}>
        <path d="M66.594,79.257c-8.7,1.638-17.1.125-25.777-4.367C30.632,69.553,21.251,61.734,13.664,54.67,6.206,47.388.5,41.018.683,33.461c.118-5.34,3.446-11.323,9.623-16.895" style={{ fill: 'none', stroke: '#bac7d3', strokeMiterlimit: 10, strokeWidth: 1.35656762123108 + 'px' }}/>
        <path d="M99.52,56.783A55.145,55.145,0,0,1,76.763,75.974" style={{ fill: 'none', stroke: '#bac7d3', strokeMiterlimit: 10, strokeWidth: 1.35656762123108 + 'px' }}/>
        <path d="M23.837,7.561a64.4,64.4,0,0,1,39.137-5.8C79.9,4.51,93.565,14.061,100.1,24.4a27.717,27.717,0,0,1,3.922,22.51" style={{ fill: 'none', stroke: '#bac7d3', strokeMiterlimit: 10, strokeWidth: 1.35656762123108 + 'px' }}/>
      </g>
      <rect x="35.441" y="21.706" width="4.473" height="6.377" rx="0.873" ry="0.873" style={{ fill: '#ef5043' }}/>
      <rect x="45.478" y="19.136" width="18.25" height="8.946" rx="3" ry="3" style={{ fill: '#444' }}/>
      <rect x="31.772" y="23.609" width="45.663" height="31.5" rx="3" ry="3" style={{ fill: '#565656' }}/>
      <circle cx="54.603" cy="39.359" r="10.909" style={{ fill: '#707070' }}/>
      <circle cx="54.603" cy="39.359" r="6.901" style={{ fill: '#dbdbdb' }}/>
      <circle cx="56.241" cy="37.57" r="2.827" style={{ fill: '#fff' }}/>
      <rect x="66.848" y="29.043" width="7" height="3.5" rx="1.75" ry="1.75" style={{ fill: '#ffc338' }}/>
      <circle cx="75.925" cy="52.566" r="5.858" style={{ fill: '#fff', stroke: '#ef5043', strokeMiterlimit: 10, strokeWidth: 2.7034974098205566 + 'px' }}/>
      <line x1="71.783" y1="56.708" x2="80.067" y2="48.424" style={{ fill: 'none', stroke: '#ef5043', strokeMiterlimit: 10, strokeWidth: 2.7034974098205566 + 'px' }}/>
    </svg>
  )
}

export const size = {
  width: 176,
  height: 96
};

const Convolution = ({ inputChannels = 512, outputChannels, width, height }) => <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
  <g id="Block-Horizontal" transform="translate(-127.000000, -80.000000)">
    <g id="Convolution" transform="translate(128.000000, 80.000000)">
      <rect
        id="Rectangle-Copy-17"
        stroke="#000000"
        fill="#FFFFFF"
        opacity="0.200000003"
        x="104"
        y="7.99607754"
        width="64"
        height="64"
      ></rect>
      <rect
        id="Rectangle-Copy-18"
        stroke="#000000"
        fill="#FFFFFF"
        opacity="0.5"
        x="100"
        y="11.9960775"
        width="64"
        height="64"
      ></rect>
      <rect
        id="Rectangle-Copy-8"
        stroke="#000000"
        fill="#FFFFFF"
        x="96"
        y="15.9960775"
        width="64"
        height="64"
      ></rect>
      <line
        x1="109.5"
        y1="27.4960775"
        x2="16.5"
        y2="17.4960775"
        id="Line-3"
        stroke="#979797"
        stroke-linecap="square"
      ></line>
      <rect
        id="Rectangle-Copy-9"
        stroke="#000000"
        fill="#FFFFFF"
        opacity="0.200000003"
        x="8"
        y="7.99607754"
        width="64"
        height="64"
      ></rect>
      <rect
        id="Rectangle-Copy-16"
        stroke="#000000"
        fill="#FFFFFF"
        opacity="0.5"
        x="4"
        y="11.9960775"
        width="64"
        height="64"
      ></rect>
      <rect
        id="Rectangle"
        stroke="#3F3F3F"
        fill="#636363"
        x="107"
        y="26.9960775"
        width="2"
        height="2"
      ></rect>
      <rect
        id="Rectangle-Copy-7"
        stroke="#000000"
        fill="#D8D8D8"
        x="0"
        y="15.9960775"
        width="64"
        height="64"
      ></rect>
      <polygon
        id="Convolution-Indicator"
        stroke="#000000"
        fill="#FFD400"
        transform="translate(62.003922, 27.996078) rotate(-90.000000) translate(-62.003922, -27.996078) "
        points="61.0039225 72.9921551 58.0039225 -18.0078449 58.0039225 -19 66.0039225 -19 66.0039225 -18.0078449 63.0039225 72.9921551 63.0039225 74.9921551 61.0039225 74.9921551"
      ></polygon>
      <rect
        id="Source-Region"
        stroke="#000000"
        fill="#FFD400"
        x="8"
        y="23.9960775"
        width="8"
        height="8"
      ></rect>
      <text
        id="256"
        font-family="HelveticaNeue, Helvetica Neue"
        font-size="6"
        font-weight="normal"
        fill="#000000"
      >
        <tspan x="171" y="78.9960775">
          {outputChannels}
        </tspan>
      </text>
      <text
        id="width"
        font-family="HelveticaNeue, Helvetica Neue"
        font-size="6"
        font-weight="normal"
        fill="#000000"
      >
        <tspan x="124.664" y="87.9960775">
          {width}
        </tspan>
      </text>
      <text
        id="16-copy"
        font-family="HelveticaNeue, Helvetica Neue"
        font-size="6"
        font-weight="normal"
        fill="#000000"
      >
        <tspan x="86.328" y="49.9960775">
          {height}
        </tspan>
      </text>
      <text
        id="3x3"
        font-family="HelveticaNeue, Helvetica Neue"
        font-size="6"
        font-weight="normal"
        fill="#000000"
      >
        <tspan x="8" y="39.9960775">
          3x3
        </tspan>
      </text>
    </g>
  </g>
</g>;

export default Convolution;

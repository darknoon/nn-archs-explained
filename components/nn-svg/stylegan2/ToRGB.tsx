import React from "react";

interface ToRGBProps {}

const height = ({}: ToRGBProps) => 240;

const ToRGB = ({}: ToRGBProps) => (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <g>
      <g transform="translate(176 39)">
        <path
          fill="#FFF"
          stroke="#000"
          d="M104 0.996H168V64.996H104z"
          opacity="0.2"
        ></path>
        <path
          fill="#FFF"
          stroke="#000"
          d="M100 4.996H164V68.996H100z"
          opacity="0.5"
        ></path>
        <path fill="#FFF" stroke="#000" d="M96 8.996H160V72.996H96z"></path>
        <path
          stroke="#979797"
          strokeLinecap="square"
          d="M109.5 20.496L16.5 10.496"
        ></path>
        <path
          fill="#FFF"
          stroke="#000"
          d="M8 0.996H72V64.996H8z"
          opacity="0.2"
        ></path>
        <path
          fill="#FFF"
          stroke="#000"
          d="M4 4.996H68V68.996H4z"
          opacity="0.5"
        ></path>
        <path
          fill="#636363"
          stroke="#3F3F3F"
          d="M107 19.996H109V21.996H107z"
        ></path>
        <path fill="#D8D8D8" stroke="#000" d="M0 8.996H64V72.996H0z"></path>
        <path
          fill="#FFD400"
          stroke="#000"
          d="M61.0039225 65.9921551L58.0039225 -25.0078449 58.0039225 -26 66.0039225 -26 66.0039225 -25.0078449 63.0039225 65.9921551 63.0039225 67.9921551 61.0039225 67.9921551z"
          transform="rotate(-90 62.004 20.996)"
        ></path>
        <path fill="#FFD400" stroke="#000" d="M8 16.996H16V24.996H8z"></path>
        <text
          fill="#000"
          fontFamily="HelveticaNeue, Helvetica Neue"
          fontSize="6"
          fontWeight="normal"
        >
          <tspan x="171" y="71.996">
            256
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="HelveticaNeue, Helvetica Neue"
          fontSize="6"
          fontWeight="normal"
        >
          <tspan x="124.664" y="80.996">
            16
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="HelveticaNeue, Helvetica Neue"
          fontSize="6"
          fontWeight="normal"
        >
          <tspan x="86.328" y="42.996">
            16
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="HelveticaNeue, Helvetica Neue"
          fontSize="6"
          fontWeight="normal"
        >
          <tspan x="8" y="32.996">
            3x3
          </tspan>
        </text>
      </g>
      <g transform="translate(240 192)">
        <rect
          width="16"
          height="16"
          x="8"
          y="8"
          fill="#0011B8"
          fillRule="evenodd"
          rx="8"
        ></rect>
        <path
          stroke="#FFF"
          strokeWidth="1"
          d="M10.5 18L16.2000497 16.5 20.5 12"
        ></path>
      </g>
      <g stroke="#000" transform="translate(240 136)">
        <rect width="15" height="15" x="8.5" y="8.5" rx="7.5"></rect>
        <path d="M10.5 16.25L16.2000497 16.25 22.2839249 16.25"></path>
        <path
          d="M10.3580376 16.25L16.0580872 16.25 22.1419624 16.25"
          transform="rotate(-90 16.25 16.25)"
        ></path>
      </g>
      <path fill="#FFD400" stroke="#000" d="M96 136H160V144H96z"></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M128.5 143.5v8h104v-4l9 4.5-9 4.5v-4h-105v-9h1z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M257 119.5v8h4l-4.5 9-4.5-9h4v-8h1zM257 175.5v8h4l-4.5 9-4.5-9h4v-8h1z"
      ></path>
      <path stroke="#000" strokeLinecap="square" d="M256 16L256 32"></path>
      <path stroke="#000" strokeLinecap="square" d="M256 224L256 240"></path>
    </g>
  </g>
);

ToRGB.height = height;

export default ToRGB;

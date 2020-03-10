import React from "react";
import Convolution from "../convolution";

interface ToRGBProps {
  width: number;
  height: number;
}

const height = ({}: ToRGBProps) => 240;

const ToRGB = ({ width, height }: ToRGBProps) => (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <g>
      <g transform="translate(176 39)">
        <Convolution
          inputChannels={128}
          outputChannels={3}
          width={width}
          height={height}
        />
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

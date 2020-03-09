import React from "react";
import ImageStack from "../imageStack";
import { range } from "../../util";
import { gridSize } from "./index";
import Convolution from "../convolution";
import { translate } from "../svgutil";

export interface BlockProps {
  channels: number;
  width: number;
  height: number;
}

const Block = ({ channels, width, height }: BlockProps) => (
  <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
    <g>
      <g transform={translate(16 * gridSize, 10 * gridSize)}>
        <Convolution inputChannels={channels} outputChannels={channels} />
      </g>
      <g transform={translate(68 * gridSize, 10 * gridSize)}>
        <Convolution inputChannels={channels} outputChannels={channels} />
      </g>
      <g fill="#D8D8D8" stroke="#000" transform="translate(96 112)">
        <path d="M16 7a9 9 0 110 18 9 9 0 010-18z" opacity="0.3"></path>
        <path d="M16 10a6 6 0 110 12 6 6 0 010-12z"></path>
      </g>
      <g transform="translate(64 112) translate(8 5)">
        <path
          stroke="#B2B2B2"
          d="M0 4.5L3.5 0 12.5 0 16 4.5 16 13 -1.11022302e-16 13z"
        ></path>
        <path fill="#E6E6E6" stroke="#B2B2B2" d="M4 0H12V8H4z"></path>
        <path fill="#D8D8D8" stroke="#000" d="M0 5H8V13H0z"></path>
        <path fill="#D8D8D8" stroke="#000" d="M8 5H16V13H8z"></path>
        <path fill="#D8D8D8" stroke="#000" d="M8 13H16V21H8z"></path>
        <path fill="#D8D8D8" stroke="#000" d="M0 13H8V21H0z"></path>
      </g>
      <g transform="translate(320 112)">
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
      <g transform="translate(736 112)">
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
      <g stroke="#000" transform="translate(368.5 112)">
        <rect width="15" height="15" x="8.5" y="8.5" rx="7.5"></rect>
        <path d="M10.5 16.25L16.2000497 16.25 22.2839249 16.25"></path>
        <path
          d="M10.3580376 16.25L16.0580872 16.25 22.1419624 16.25"
          transform="rotate(-90 16.25 16.25)"
        ></path>
      </g>
      <g stroke="#000" transform="translate(784 112)">
        <rect width="15" height="15" x="8.5" y="8.5" rx="7.5"></rect>
        <path d="M10.5 16.25L16.2000497 16.25 22.2839249 16.25"></path>
        <path
          d="M10.3580376 16.25L16.0580872 16.25 22.1419624 16.25"
          transform="rotate(-90 16.25 16.25)"
        ></path>
      </g>
      <g stroke="#000" transform="translate(496 112)">
        <rect width="15" height="15" x="8.5" y="8.5" rx="7.5"></rect>
        <path d="M10.5 16.25L16.2000497 16.25 22.2839249 16.25"></path>
        <path
          d="M10.3580376 16.25L16.0580872 16.25 22.1419624 16.25"
          transform="rotate(-90 16.25 16.25)"
        ></path>
      </g>
      <g stroke="#000" transform="translate(943.5 112)">
        <rect width="15" height="15" x="8.5" y="8.5" rx="7.5"></rect>
        <path d="M10.5 16.25L16.2000497 16.25 22.2839249 16.25"></path>
        <path
          d="M10.3580376 16.25L16.0580872 16.25 22.1419624 16.25"
          transform="rotate(-90 16.25 16.25)"
        ></path>
      </g>
      <path
        fill="#FFD400"
        stroke="#000"
        d="M388.5 188H452.5V196H388.5z"
        transform="rotate(90 420.5 192)"
      ></path>
      <path
        fill="#FFD400"
        stroke="#000"
        d="M804 188H868V196H804z"
        transform="rotate(90 836 192)"
      ></path>
      <g stroke="#000" transform="rotate(-180 200.25 104)">
        <rect width="16" height="16" x="8" y="8" rx="8"></rect>
        <path
          d="M10.5 16.25L16.2000497 16.25 22.2839249 16.25"
          transform="rotate(45 16.392 16.25)"
        ></path>
        <path
          d="M10.3996174 16.1496174L16.0996671 16.1496174 22.1835423 16.1496174"
          transform="rotate(-45 16.292 16.15)"
        ></path>
      </g>
      <g stroke="#000" transform="rotate(-180 408 104)">
        <rect width="16" height="16" x="8" y="8" rx="8"></rect>
        <path
          d="M10.5 16.25L16.2000497 16.25 22.2839249 16.25"
          transform="rotate(45 16.392 16.25)"
        ></path>
        <path
          d="M10.3996174 16.1496174L16.0996671 16.1496174 22.1835423 16.1496174"
          transform="rotate(-45 16.292 16.15)"
        ></path>
      </g>
      <g stroke="#000" transform="translate(448 112)">
        <rect width="16" height="16" x="8" y="8" rx="8"></rect>
        <path
          d="M10.5 16.25L16.2000497 16.25 22.2839249 16.25"
          transform="rotate(45 16.392 16.25)"
        ></path>
        <path
          d="M10.3996174 16.1496174L16.0996671 16.1496174 22.1835423 16.1496174"
          transform="rotate(-45 16.292 16.15)"
        ></path>
      </g>
      <g stroke="#000" transform="translate(895.5 112)">
        <rect width="16" height="16" x="8" y="8" rx="8"></rect>
        <path
          d="M10.5 16.25L16.2000497 16.25 22.2839249 16.25"
          transform="rotate(45 16.392 16.25)"
        ></path>
        <path
          d="M10.3996174 16.1496174L16.0996671 16.1496174 22.1835423 16.1496174"
          transform="rotate(-45 16.292 16.15)"
        ></path>
      </g>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M55.5 123.5l9 4.5-9 4.5v-4h-56v-1h56v-4z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M464 143.5l4.5 9h-4v104H-.5v-1h464v-103h-4l4.5-9z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M911.5 143.5l4.5 9h-4v104H351v-1h560v-103h-4l4.5-9z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M384.5 207.5l4.5 9h-4v24H-.5v-1H384v-23h-4l4.5-9z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M800 207.5l4.5 9h-4v24H351v-1h448.5v-23h-4l4.5-9z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M359.5 123.5l9 4.5-9 4.5v-4h-8v-1h8v-4z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M384 143.5l4.5 9h-4v24h-1v-24h-4l4.5-9z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M409 187.5v3.999l8 .001v1l-8-.001v4.001l-9-4.5 9-4.5z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M439.5 123.5l9 4.5-9 4.5v-4h-40v-1h40v-4z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M487.5 123.5l9 4.5-9 4.5v-4h-8v-1h8v-4z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M824.5 187.5v3.999l8 .001v1l-8-.001v4.001l-9-4.5 9-4.5z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M887 123.5l9 4.5-9 4.5v-4h-72v-1h72v-4z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M311.5 123.5l9 4.5-9 4.5v-4h-8v-1h8v-4z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M727.5 123.5l9 4.5-9 4.5v-4h-8v-1h8v-4z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M775.5 123.5l9 4.5-9 4.5v-4h-8v-1h8v-4z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M935 123.5l9 4.5-9 4.5v-4h-8v-1h8v-4z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M1015.5 123.5l9 4.5-9 4.5v-4h-40v-1h40v-4z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M512 143.5l4.5 9h-4v56h-49v-1h48v-55h-4l4.5-9z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M960 143.5l4.5 9h-4v56h-49v-1h48v-55h-4l4.5-9z"
      ></path>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M800 143.5l4.5 9h-4v24h-1v-24h-4l4.5-9z"
      ></path>
    </g>
  </g>
);

Block.getInputY = (props: BlockProps) => {
  return (128 / 8) * gridSize;
};

export default Block;

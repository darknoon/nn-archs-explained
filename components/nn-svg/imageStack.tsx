import { range } from "../util";
import { useState, useRef } from "react";

const { round, max, min, floor, ceil } = Math;

/**
 * Horizontal stack of images
 **/
const int3Format = Intl.NumberFormat("en-US", { minimumIntegerDigits: 3 });

function useHoverN(initial = 0, count = 0) {
  const [hoveredN, setHoveredN] = useState(initial);
  const funcs = [...range(count)].map(i => e => setHoveredN(i));
  return [hoveredN, funcs];
}

const maxWidthUnits = 20;

const width = ({ gridSize }) => maxWidthUnits * gridSize;

const ImageStack = ({
  gridSize,
  width,
  height,
  channels = 256,
  channelsPerImage = 1,
  dataKey = ""
}) => {
  const images = ceil(channels / channelsPerImage);
  const maxWidth = ImageStack.width({ gridSize });
  const top = 3 * gridSize;
  const offsetEach = gridSize;

  // This code made the image sizes variable
  // const ds = s =>
  //   min(
  //     max(round(s / gridSize / 2) * gridSize, gridSize),
  //     maxWidth - 2 * offsetEach
  //   );
  // I think it looks better contstant at the moment
  const ds = _ => 128;

  const displayWidth = ds(width);
  const displayHeight = ds(height);
  const nShown = min(1 + floor((maxWidth - displayWidth) / offsetEach), images);

  const [hoveredN, funcs] = useHoverN(0, nShown);

  const endX = displayWidth + nShown * offsetEach;
  const strokeWidth = 1;
  const shape = [channels, height, width];
  return (
    <g stroke="none" strokeWidth={strokeWidth} fill="none" fill-rule="evenodd">
      <g>
        {[...range(images)].reverse().map(n => {
          const first = n == 0;
          if (n < nShown) {
            let im;
            if (dataKey !== "") {
              im = (
                <image
                  width={displayWidth}
                  height={displayHeight}
                  onMouseEnter={funcs[n]}
                  href={`${dataKey}_${int3Format.format(n)}.jpg`}
                  x={n * offsetEach}
                  style={{ imageRendering: "pixelated" }}
                  y={top}
                  key={`image-${n}`}
                  opacity={first || n == hoveredN ? 1 : 0.125}
                />
              );
            }

            return (
              <>
                <rect
                  width={displayWidth + strokeWidth}
                  height={displayHeight + strokeWidth}
                  x={n * offsetEach - strokeWidth / 2}
                  y={top - strokeWidth / 2}
                  key={`rect-${n}`}
                  fill={first ? "grey" : "white"}
                  stroke="#000000"
                />
                {im}
              </>
            );
          }
        })}
        <text
          font-family="Menlo-Regular, Menlo"
          font-size="8"
          font-weight="normal"
          fill="#000000"
        >
          <tspan x="0" y={1 * gridSize}>
            [{shape.join(",")}]
          </tspan>
        </text>
        <text
          id="…"
          font-family="HelveticaNeue, Helvetica Neue"
          font-size="24"
          font-weight="normal"
          fill="#000000"
        >
          <tspan x={endX + gridSize} y={3 * gridSize + displayHeight / 2}>
            …
          </tspan>
        </text>
      </g>
    </g>
  );
};

ImageStack.width = width;

export default ImageStack;

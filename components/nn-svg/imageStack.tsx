import { range } from "../util";

const { round, max, min, floor } = Math;

/**
 * Horizontal stack of images
 **/
const int3Format = Intl.NumberFormat("en-US", { minimumIntegerDigits: 3 });

export default ({ gridSize, width, height, channels = 256, dataKey = "" }) => {
  const maxWidth = 20 * gridSize;
  const top = 3 * gridSize;
  const offsetEach = gridSize;
  const ds = s =>
    min(
      max(round(s / gridSize / 2) * gridSize, gridSize),
      maxWidth - 2 * offsetEach
    );
  const displayWidth = ds(width);
  const displayHeight = ds(height);
  const nShown = min(
    1 + floor((maxWidth - displayWidth) / offsetEach),
    channels
  );
  const endX = displayWidth + nShown * offsetEach;
  const strokeWidth = 1;
  const shape = [channels, height, width];
  return (
    <g stroke="none" strokeWidth={strokeWidth} fill="none" fill-rule="evenodd">
      <g>
        {[...range(channels)].reverse().map(n => {
          const first = n == 0;
          if (n < nShown) {
            let im;
            if (dataKey !== "") {
              im = (
                <image
                  width={displayWidth}
                  height={displayHeight}
                  href={`${dataKey}_${int3Format.format(n)}.jpg`}
                  x={n * offsetEach}
                  y={top}
                  key={`image-${n}`}
                  opacity={first ? 1 : 0.125}
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
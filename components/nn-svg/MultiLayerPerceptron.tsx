import LinearHorizontal from "./LinearHorizontal";
import { range } from "../util";
import { translate } from "./svgutil";

export default ({
  numLayers,
  inputCount = 512,
  outputCount = 512,
  gridSize
}) => (
  <>
    {[...range(numLayers)].map(i => (
      <g transform={translate(13 * gridSize * i, 0)}>
        <LinearHorizontal
          key={`linear-${i}`}
          inputCount={inputCount}
          outputCount={outputCount}
          gridSize={gridSize}
        ></LinearHorizontal>
      </g>
    ))}
  </>
);

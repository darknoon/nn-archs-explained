import Linear from "./linear";
import { range } from "../util";

export default ({
  numLayers,
  inputCount = 512,
  outputCount = 512,
  gridSize
}) => {
  [...range(numLayers)].map(_ => (
    <Linear
      inputCount={inputCount}
      outputCount={outputCount}
      gridSize={gridSize}
    ></Linear>
  ));
};

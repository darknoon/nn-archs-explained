import Block from "./block";
import { range } from "../../util";
import { translate } from "../svgutil";
import ImageStack from "../imageStack";
import ToRGB from "./ToRGB";
import BackArrow from "../BackArrow";

const { log2, pow, max } = Math;

export const gridSize = 8;

const configF = {
  imageSize: 1024,
  mappingLayers: 8,
  channelMultiplier: 2
};

const getLayers = (outputResolution, channelMultiplier) => {
  // TODO: support smaller output resolutions
  return [
    { wLog2: 2, width: 4, channels: 512 },
    { wLog2: 3, width: 8, channels: 512 },
    { wLog2: 4, width: 16, channels: 512 },
    { wLog2: 5, width: 32, channels: 512 },
    { wLog2: 6, width: 64, channels: 256 * channelMultiplier },
    { wLog2: 7, width: 128, channels: 128 * channelMultiplier },
    { wLog2: 8, width: 256, channels: 64 * channelMultiplier },
    { wLog2: 9, width: 512, channels: 32 * channelMultiplier }
    // { wLog2: 10, width: 1024, channels: 16 * channelMultiplier }
  ];
};

export const Network = ({
  config = configF,
  exampleKey = "data/stylegan2-seed15"
}) => {
  const { imageSize: outputSize, channelMultiplier } = config;
  const layers = getLayers(outputSize, channelMultiplier);
  const width = 160 * gridSize;
  const blockHeight = 40 * gridSize;
  const toRGBHeight = ToRGB.height({});
  const outputHeight = 512;
  const height = blockHeight * layers.length + max(toRGBHeight, outputHeight);
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        version="1.1"
      >
        {layers.map(({ width, channels }, i) => (
          <g
            key={`layers-${width}`}
            transform={translate(gridSize, i * blockHeight)}
          >
            {/* Arrow to next goes at the back */}
            <g transform={translate(-1 * gridSize, 18 * gridSize)}>
              <BackArrow />
            </g>
            {/* Show the block on the left */}
            <Block channels={channels} width={width} height={width} />
            {/* Now the outputs on the right */}
            <g transform={translate(129 * gridSize, 12 * gridSize)}>
              <ImageStack
                width={width * 2}
                height={width * 2}
                channels={channels}
                gridSize={gridSize}
                dataKey={i >= 0 ? `${exampleKey}/after_conv2_${i}` : undefined}
              />
            </g>
          </g>
        ))}
        {/* End -> RGB */}
        <g transform={translate(0, layers.length * blockHeight)}>
          <g transform={translate(0, 12 * gridSize)}>
            <ToRGB />
          </g>
          {/* Final output on the right */}
          <g transform={translate(0, 0)}>
            <image
              x={65 * gridSize}
              y={2 * gridSize}
              width={outputHeight}
              height={outputHeight}
              href={`${exampleKey}/image.jpg`}
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default Network;

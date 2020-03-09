import Upscale from "../components/nn-svg/symbols/upscale";
import sharedStyles from "../components/sharedStyles";
import Head from "next/head";

const Icon = ({ component }) => (
  <svg width={32} height={32}>
    {component()}
  </svg>
);

export default () => (
  <div className="container">
    <Head>
      <title>Glossary</title>
    </Head>

    <main>
      <div className="grid">
        <div className="row">
          <div className="icon">
            <Icon component={Upscale} />
          </div>
          <p>Upscale layer</p>
          <p>
            Upscaling is used frequently in generative networks to take a
            lower-res feature map and prepare it to be a higher-res feature map
            that is passed into a convolutional layer.
          </p>
        </div>

        <div className="row">
          <Icon component={Upscale} />
          <p>Blur layer</p>
        </div>
      </div>
    </main>
    <style jsx>{`
      .row .icon {
        align-self: baseline;
      }
      .row {
        display: flex;
        flex-direction: row;
      }
    `}</style>
    {sharedStyles}
  </div>
);

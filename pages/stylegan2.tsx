import StyleGAN2 from "../components/nn-svg/stylegan2";
import Head from "next/head";
import sharedStyles from "../components/sharedStyles";
import Link from "next/link";
export default () => (
  <div className="container">
    <Head>
      <title>Neural Network Architectures</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header>
      <Link href="/">
        <a>&larr; Back to Home</a>
      </Link>
    </header>

    <main>
      <div className="title">
        <h1>StyleGAN2</h1>
        <h2>2019</h2>
      </div>
      <p>
        StyleGAN2 is a paper by Karras et al that extends on the authors’
        previous work StyleGAN and Progressive Growing. The architecture is
        simplified by the removal of spectral normalization (which led to visual
        artifacts in StyleGAN) and demonstrates an increased image quality when
        trained on Flickr Faces in the Wild, a high quality face dataset.
      </p>
      <p>
        <a href="http://arxiv.org/abs/1912.04958">
          Analyzing and Improving the Image Quality of StyleGAN
        </a>{" "}
        <p>
          Tero Karras, Samuli Laine, Miika Aittala, Janne Hellsten, Jaakko
          Lehtinen, Timo Aila
        </p>
      </p>
      <StyleGAN2 />
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .title {
        display: flex;
        font-size: 64px;
        flex-direction: row;
        margin-bottom: 2rem;
      }

      .title * {
        font-size: 64px;
        margin: 0;
      }

      .title h2 {
        font-weight: 200;
        font-size: 64px;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>
    {sharedStyles}
  </div>
);

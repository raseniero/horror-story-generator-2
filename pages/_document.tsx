import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next Horror Story in seconds."
          />
          <meta property="og:site_name" content="https://horror-story-generator-2.vercel.app" />
          <meta
            property="og:description"
            content="Generate your next Horror Story in seconds."
          />
          <meta property="og:title" content="Horror Story Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Horror Story Generator" />
          <meta
            name="twitter:description"
            content="Generate your next Horror Story in seconds."
          />
          <meta
            property="og:image"
            //content="https://twitterbio.com/og-image.png"
            content="https://twitterbio.com/writingIcon.png"
          />
          <meta
            name="twitter:image"
            //content="https://twitterbio.com/og-image.png"
            content="https://twitterbio.com/writingIcon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

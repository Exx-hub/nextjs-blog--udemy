import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="keywords"
            content="website, blog,frontend,tech, backend, fullstack"
          />
          <meta name="author" content="Alvin Acosta" />
          <link rel="icon" type="image/png" href="/alv.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

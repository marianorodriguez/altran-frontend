// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#00d1b2" />
          <meta name="description" content="Progressive Web App made with Next.js" />
          <link rel="manifest" href="/static/manifest.json" />
          <link rel="shortcut icon" href="/static/icons/favicon.ico" />
        </Head>
        <body className="app">
          <noscript>Your browser does not support JavaScript!</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

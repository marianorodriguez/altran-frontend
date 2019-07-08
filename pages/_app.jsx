import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux';

import 'bulma/css/bulma.min.css';
import './styles.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Head>
          <title>Gnome finder</title>
        </Head>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);

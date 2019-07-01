import Head from 'next/head';
import React from 'react';
import PropTypes from 'prop-types';

function Document({ children }) {
  return (
    <div>
      <Head>
        <title>Next.js PWA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2196F3" />
        <meta name="description" content="Progressive Web App made with Next.js" />
        <link rel="manifest" href="/static/manifest.json" />
        <link rel="shortcut icon" href="/static/icons/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}

Document.propTypes = {
  children: PropTypes.node,
};
Document.defaultProps = {
  children: <div />,
};

export default Document;

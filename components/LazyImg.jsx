import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

const LazyImg = ({ src }) => (
  <LazyLoad offsetVertical={1000}>
    <img src={LazyImg.toHttps(src)} alt="" />
  </LazyLoad>
);

LazyImg.toHttps = src => src.replace('http://', 'https://');

LazyImg.propTypes = {
  src: PropTypes.string.isRequired,
};

export default LazyImg;

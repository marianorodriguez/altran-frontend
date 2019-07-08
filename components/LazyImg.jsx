import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

const LazyImg = ({ src }) => (
  <LazyLoad>
    <img src={LazyImg.toHttps(src)} alt="" />
  </LazyLoad>
);

LazyImg.toHttps = src => src.replace('http://', 'https://');

LazyImg.propTypes = {
  src: PropTypes.string.isRequired,
};

export default LazyImg;

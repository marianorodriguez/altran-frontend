
import React from 'react';
import GnomesList from '../components/GnomesList';
import SearchBar from '../components/SearchBar';
import LoadMore from '../components/LoadMore';
import ReturnToTop from '../components/ReturnToTopButton';

export default () => (
  <div className="main" id="main">
    <SearchBar />
    <div className="container">
      <GnomesList />
      <LoadMore />
    </div>
    <ReturnToTop />
  </div>
);

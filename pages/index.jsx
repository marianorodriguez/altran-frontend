
import React from 'react';
import GnomesList from '../components/GnomesList';
import SearchBar from '../components/SearchBar';
import LoadMore from '../components/LoadMore';
import 'bulma/css/bulma.min.css';

export default () => (
  <div className="main" id="main">
    <SearchBar />
    <div className="container">
      <GnomesList />
      <LoadMore />
    </div>
  </div>
);


import React from 'react';
import GnomesList from '../components/GnomesList';
import SearchBar from '../components/SearchBar';
import 'bulma/css/bulma.min.css';

export default () => (
  <div className="main">
    <SearchBar />
    <div className="container">
      <GnomesList />
    </div>
  </div>
);

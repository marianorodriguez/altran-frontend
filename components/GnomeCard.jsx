
import React from 'react';
import PropTypes from 'prop-types';

const GnomeCard = ({ gnome }) => (
  <div className="tile is-parent">
    <div className="tile is-child box card">{gnome.name}</div>
  </div>
);


GnomeCard.propTypes = {
  gnome: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default GnomeCard;

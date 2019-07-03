
import React from 'react';
import PropTypes from 'prop-types';

const GnomeCard = ({ gnome }) => (
  <div className="tile is-parent">
    <div className="tile is-child box card gnome-card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={gnome.thumbnail} alt="" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{gnome.name}</p>
            <p className="subtitle is-6">{gnome.professions.join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

GnomeCard.propTypes = {
  gnome: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GnomeCard;

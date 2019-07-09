import React from 'react';
import PropTypes from 'prop-types';
import LazyImg from './LazyImg';

const GnomeModal = (props) => {
  const { active, gnome, closeFn } = props;
  const modalClassname = `modal ${active ? 'is-active' : ''}`;
  return (
    <div className={modalClassname}>
      <div className="modal-background" onClick={closeFn} />
      <div className="modal-content">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <LazyImg src={gnome.thumbnail} />
              </figure>
            </div>
            <div className="content">
              <strong>{gnome.name}</strong>
              <br />
              {`Age: ${gnome.age} years`}
              <br />
              {`Weight: ${gnome.weight} kg`}
              <br />
              {`Height: ${gnome.height} cm`}
              <br />
              {`Hair color: ${gnome.hair_color}`}
              <br />
                Professions:
              <ul>{gnome.professions.map((p, i) => <li key={`profession_${i}`}>{p}</li>)}</ul>
                Friends:
              {gnome.friends.length === 0 ? ' none' : ''}
              <ul>{gnome.friends.map((f, i) => <li key={`friend_${i}`}>{f}</li>)}</ul>
            </div>
          </article>
        </div>
      </div>
      <button type="button" className="modal-close is-large" aria-label="close" onClick={closeFn} />
    </div>
  );
};

GnomeModal.propTypes = {
  gnome: PropTypes.objectOf(PropTypes.any).isRequired,
  closeFn: PropTypes.func,
  active: PropTypes.bool.isRequired,
};

GnomeModal.defaultProps = {
  closeFn: () => {},
};

export default GnomeModal;

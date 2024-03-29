
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyImg from './LazyImg';
import GnomeModal from './GnomeModal';

class GnomeCard extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      modalActive: false,
    };
  }

  closeModal() {
    this.setState({
      modalActive: false,
    });
  }

  openModal() {
    this.setState({
      modalActive: true,
    });
  }

  render() {
    const { gnome } = this.props;
    const { modalActive } = this.state;
    return (
      <div className="tile is-parent">
        <div className="tile is-child box card gnome-card" onClick={this.openModal}>
          <div className="card-image">
            <figure className="image is-4by3">
              <LazyImg src={gnome.thumbnail} />
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
        <GnomeModal gnome={gnome} active={modalActive} closeFn={this.closeModal} />
      </div>
    );
  }
}

GnomeCard.propTypes = {
  gnome: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default GnomeCard;

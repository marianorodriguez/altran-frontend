
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GnomeModal from './GnomeModal';

class GnomeCard extends Component {
  static toHttps(src) {
    return src.replace('http://', 'https://');
  }

  constructor(props) {
    super(props);
    this.cardClick = this.cardClick.bind(this);
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

  cardClick() {
    this.setState({
      modalActive: true,
    });
  }

  render() {
    const { gnome } = this.props;
    const { modalActive } = this.state;
    return (
      <div className="tile is-parent">
        <div className="tile is-child box card gnome-card" onClick={this.cardClick}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={GnomeCard.toHttps(gnome.thumbnail)} alt="" />
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

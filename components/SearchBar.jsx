import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterGnomes } from '../store/gnomes/actions';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { dispatch } = this.props;
    dispatch(filterGnomes(event.target.value));
  }

  render() {
    return (
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Gnome finder
            </h1>
            <h2 className="subtitle">
              Find your gnome.
            </h2>
            <div className="field">
              <div className="control">
                <input className="input is-primary" type="text" placeholder="search by name or profession" onChange={this.handleInputChange} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Searchbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(() => ({}))(Searchbar);

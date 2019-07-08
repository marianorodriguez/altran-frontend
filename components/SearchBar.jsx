import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterGnomes } from '../store/gnomes/actions';
import ProfessionFilter from './ProfessionFilter';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      value: '',
    };
  }

  handleInputChange(event) {
    const { dispatch } = this.props;
    this.setState({
      value: event.target.value,
    });
    dispatch(filterGnomes({ name: event.target.value }));
  }

  render() {
    const { value } = this.state;
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
            <div className="field gnomes-search-field columns">
              <div className="control column">
                <input
                  aria-label="search-input"
                  className="input is-primary is-rounded"
                  type="text"
                  placeholder="search by name"
                  onChange={this.handleInputChange}
                  value={value}
                />
              </div>
              <div className="control column profession-filter">
                <ProfessionFilter />
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

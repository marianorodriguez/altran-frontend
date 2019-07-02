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
    return (<input onChange={this.handleInputChange} />);
  }
}

Searchbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(() => ({}))(Searchbar);

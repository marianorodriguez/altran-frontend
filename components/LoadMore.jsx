import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadMore } from '../store/gnomes/actions';

class LoadMore extends Component {
  constructor(props) {
    super(props);
    this.loadMoreGnomes = this.loadMoreGnomes.bind(this);
    this.trackScrolling = this.trackScrolling.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling() {
    const wrappedElement = document.getElementById('main');
    if (wrappedElement.getBoundingClientRect().bottom <= window.innerHeight) {
      this.loadMoreGnomes();
    }
  }

  loadMoreGnomes() {
    const { dispatch } = this.props;
    dispatch(loadMore());
  }

  render() {
    return (
      <div className="centered button is-outlined is-primary" onClick={this.loadMoreGnomes}>LOAD MORE</div>
    );
  }
}

LoadMore.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(() => ({}))(LoadMore);

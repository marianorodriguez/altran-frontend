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
    const { loading, total, itemsPerPage } = this.props;
    if (!loading && total > itemsPerPage) {
      return (
        <div className="centered button is-outlined is-primary" onClick={this.loadMoreGnomes}>LOAD MORE</div>
      );
    }
    return <div />;
  }
}

LoadMore.propTypes = {
  loading: PropTypes.bool.isRequired,
  total: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.gnomes.loading,
  total: state.gnomes.filteredItems.length,
  itemsPerPage: state.gnomes.itemsPerPage,
});

export default connect(mapStateToProps)(LoadMore);

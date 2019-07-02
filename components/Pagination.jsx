import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changePage } from '../store/gnomes/actions';


class Pagination extends Component {
  constructor(props) {
    super(props);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.goToPreviousPage = this.goToPreviousPage.bind(this);
  }

  goToNextPage() {
    const { dispatch, page, total } = this.props;
    if (page + 1 < total) { dispatch(changePage(page + 1)); }
  }

  goToPreviousPage() {
    const { dispatch, page } = this.props;
    if (page > 0) { dispatch(changePage(page - 1)); }
  }

  render() {
    const { total, page } = this.props;
    return (
      <nav className="pagination is-centered is-rounded" style={{ margin: '15px' }} role="navigation" aria-label="pagination">
        <div className="pagination-previous" style={{ flex: 0.5 }} disabled={page === 0} onClick={this.goToPreviousPage}>Previous page</div>
        <div className="pagination-next" style={{ flex: 0.5 }} disabled={page >= total - 1} onClick={this.goToNextPage}>Next page</div>
      </nav>
    );
  }
}


Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  page: state.gnomes.page,
  total: state.gnomes.totalPages,
});
export default connect(mapStateToProps)(Pagination);

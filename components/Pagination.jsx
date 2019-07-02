import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changePage } from '../store/gnomes/actions';


class Pagination extends Component {
  constructor(props) {
    super(props);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.goToPreviousPage = this.goToPreviousPage.bind(this);
    this.goToFirstPage = this.goToFirstPage.bind(this);
    this.goToLastPage = this.goToLastPage.bind(this);
  }

  goToNextPage() {
    const { dispatch, page, total } = this.props;
    if (page + 1 < total) { dispatch(changePage(page + 1)); }
  }

  goToPreviousPage() {
    const { dispatch, page } = this.props;
    if (page > 0) { dispatch(changePage(page - 1)); }
  }

  goToFirstPage() {
    const { dispatch } = this.props;
    dispatch(changePage(0));
  }

  goToLastPage() {
    const { dispatch, total } = this.props;
    dispatch(changePage(total - 1));
  }

  render() {
    const { total, page } = this.props;
    return (
      <nav className="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
        <div className="pagination-previous" disabled={page === 0} onClick={this.goToPreviousPage}>Previous</div>
        <div className="pagination-next" disabled={page === total - 1} onClick={this.goToNextPage}>Next page</div>
        <ul className="pagination-list">
          <li><div className="pagination-link" onClick={this.goToFirstPage}>1</div></li>
          <li><span className="pagination-ellipsis">&hellip;</span></li>
          <li><div className="pagination-link" onClick={this.goToPreviousPage}>{page}</div></li>
          <li><div className="pagination-link is-current">{page + 1}</div></li>
          <li><div className="pagination-link" onClick={this.goToNextPage}>{page + 2}</div></li>
          <li><span className="pagination-ellipsis">&hellip;</span></li>
          <li><div className="pagination-link" onClick={this.goToLastPage}>{total}</div></li>
        </ul>
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

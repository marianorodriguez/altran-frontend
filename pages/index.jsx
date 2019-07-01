
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGnomes } from '../store/gnomes/actions';

class Index extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchGnomes());
  }

  render() {
    const { loading, error, gnomes } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error}</div>;
    }
    return (
      <div>
        <ul>
          {gnomes.map(gnome => <li key={gnome.id}>{gnome.name}</li>)}
        </ul>
      </div>
    );
  }
}

Index.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  gnomes: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

Index.defaultProps = {
  error: null,
};

const mapStateToProps = state => ({
  loading: state.gnomes.loading,
  error: state.gnomes.error,
  gnomes: state.gnomes.items,
});

export default connect(mapStateToProps)(Index);


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGnomes } from '../store/gnomes/actions';
import GnomeCard from './GnomeCard';
import './GnomesList.css';

function listToMatrix(list, elementsPerSubArray) {
  const matrix = [];
  let i;
  let k;

  for (i = 0, k = -1; i < list.length; i += 1) {
    if (i % elementsPerSubArray === 0) {
      k += 1;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
}

class GnomesList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchGnomes());
  }

  render() {
    const { loading, error, gnomes } = this.props;
    if (error) {
      return <div>{error}</div>;
    }
    let className = 'gnomes-list';
    if (loading) {
      className += ' loading';
    }
    return (
      <div className={className}>
        {
            listToMatrix(gnomes, 4)
              .map((gnomesRow, i) => (
                <div className="tile is-ancestor" key={`gnomesRow${i}`}>
                  {gnomesRow.map(gnome => (<GnomeCard key={gnome.id} gnome={gnome} />))}
                </div>
              ))
        }
      </div>
    );
  }
}

GnomesList.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  gnomes: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

GnomesList.defaultProps = {
  error: null,
};


const mapStateToProps = state => ({
  loading: state.gnomes.loading,
  error: state.gnomes.error,
  gnomes: state.gnomes.items,
});

export default connect(mapStateToProps)(GnomesList);

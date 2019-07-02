
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGnomes } from '../store/gnomes/actions';
import GnomeCard from './GnomeCard';
import Message from './Message';
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
    const {
      loading, error, gnomes, total,
    } = this.props;
    if (error) {
      return <Message type="error" message={error} />;
    }
    let className = 'gnomes-list';
    if (loading) {
      className += ' loading';
    }
    if (!loading && gnomes.length === 0 && total > 0) {
      return <Message type="info" message="Oops... we ran out of gnomes!" />;
    }
    return (
      <div className={className}>
        {
          listToMatrix(gnomes, 4)
            .map(gnomesRow => (
              <div className="tile is-ancestor">
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
  total: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
};

GnomesList.defaultProps = {
  error: null,
};


const mapStateToProps = state => ({
  loading: state.gnomes.loading,
  error: state.gnomes.error,
  gnomes: state.gnomes.paginatedAndFilteredItems,
  total: state.gnomes.items.length,
});

export default connect(mapStateToProps)(GnomesList);

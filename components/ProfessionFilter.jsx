import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterGnomes } from '../store/gnomes/actions';

class ProfessionFilter extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { dispatch } = this.props;
    let { value } = event.target;
    if (value === 'All professions') value = '';
    dispatch(filterGnomes({ profession: value }));
  }

  render() {
    const { professionsList } = this.props;
    return (
      <div className="field">
        <div className="control">
          <div className="select is-primary is-rounded">
            <select onChange={this.handleInputChange}>
              <option>All professions</option>
              {professionsList.map((p, i) => <option key={`profession_${i}`}>{p}</option>)}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

ProfessionFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  professionsList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  professionsList: state.gnomes.professionsList,
});

export default connect(mapStateToProps)(ProfessionFilter);

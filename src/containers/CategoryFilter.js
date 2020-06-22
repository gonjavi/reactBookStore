import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { changeFilter } from '../actions/index';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    const { target: { value } } = e;
    this.setState({
      category: value,
    });
    const category = this.state;
    const { changeFilter } = this.props;
    changeFilter(category);
  }

  render() {
    const { category } = this.state;
    return (
      <Form.Group controlId="Form.ControlSelect1">
        <Form.Label>Category Filter</Form.Label>
        <Form.Control name="category" value={category} onChange={this.handleFilterChange} as="select">
          <option>All</option>
          <option>Action</option>
          <option>Biography</option>
          <option>History</option>
          <option>Horror</option>
          <option>Kids</option>
          <option>Learning</option>
          <option>Sci-Fi</option>
        </Form.Control>
      </Form.Group>

    );
  }
}

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(changeFilter(category)),
});

export default connect(null, mapDispatchToProps)(CategoryFilter);

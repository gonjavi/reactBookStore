import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'All',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { target: { value, name } } = e;
    this.setState({
      [name]: value,
    });
    const { handleFilterChange } = this.props;
    handleFilterChange(value);
  }

  render() {
    const { category } = this.state;
    return (
      <div>
        <Form>
          <Form.Group controlId="Form.ControlSelect1">
            <Form.Label>Categories</Form.Label>
            <Form.Control name="category" value={category} onChange={this.handleChange} as="select">
              <option value="All">All</option>
              <option value="Action">Action</option>
              <option value="Biography">Biography</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Kids">Kids</option>
              <option value="Learning">Learning</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;

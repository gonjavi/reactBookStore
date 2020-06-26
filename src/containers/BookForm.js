import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { createBook } from '../actions/index';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      category: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { target: { value, name } } = e;
    this.setState({
      [name]: value,
      id: (Math.random() * 500).toFixed(),
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const book = this.state;
    const { createBook } = this.props;
    createBook(book);
  }

  render() {
    const { title, category, id } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <Row>
          <Col lg={6} md={5}>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Book title</Form.Label>
              <Form.Control type="text" key={id} name="title" value={title} onChange={this.handleChange} placeholder="book title" required />
            </Form.Group>
          </Col>
          <Col lg={3} md={3}>
            <Form.Group controlId="Form.ControlSelect1">
              <Form.Label>Category</Form.Label>
              <Form.Control name="category" value={category} onChange={this.handleChange} as="select">
                <option>Category</option>
                <option>Action</option>
                <option>Biography</option>
                <option>History</option>
                <option>Horror</option>
                <option>Kids</option>
                <option>Learning</option>
                <option>Sci-Fi</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col lg={3} md={3}>
            <Button className="submit" variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BookForm);

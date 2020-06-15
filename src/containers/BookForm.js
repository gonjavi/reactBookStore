import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      // eslint-disable-next-line react/no-unused-state
      id: '',
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleSelect(evt) {
    this.setState({
      category: evt,
    });
  }

  handleSubmit() {

  }

  render() {
    const { title } = this.state;
    const { category } = this.state;
    console.log(category);
    const title1 = category || 'Categories';
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Book title</Form.Label>
            <Form.Control type="text" value={title} onChange={this.handleChange} placeholder="book title" required />
          </Form.Group>

          <DropdownButton
            as={ButtonGroup}
            key="category"
            id={`dropdown-variants-${category}`}
            title={title1}
          >
            <Dropdown.Item onSelect={this.handleSelect} eventKey="Action">Action</Dropdown.Item>
            <Dropdown.Item onSelect={this.handleSelect} eventKey="Biography">Biography</Dropdown.Item>
            <Dropdown.Item onSelect={this.handleSelect} eventKey="History">History</Dropdown.Item>
            <Dropdown.Item onSelect={this.handleSelect} eventKey="Horror">Horror</Dropdown.Item>
            <Dropdown.Item onSelect={this.handleSelect} eventKey="Kids">Kids</Dropdown.Item>
            <Dropdown.Item onSelect={this.handleSelect} eventKey="Learning">Learning</Dropdown.Item>
            <Dropdown.Item onSelect={this.handleSelect} eventKey="Sci-Fi">Sci-Fi</Dropdown.Item>
          </DropdownButton>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default BookForm;

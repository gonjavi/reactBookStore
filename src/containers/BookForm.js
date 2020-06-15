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
      // eslint-disable-next-line react/no-unused-state
      id: (Math.random() * 500).toFixed(),
    });
  }

  handleSelect(evt) {
    this.setState({
      category: evt,
    });
  }

  render() {
    const { title } = this.state;
    const { category } = this.state;
    const category1 = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const categories = category1.map(category => (
      <DropdownButton
        as={ButtonGroup}
        key={category}
        id={`dropdown-variants-${category}`}
        variant={category.toLowerCase()}
        title={category}
        
      >
        
        <Dropdown.Item onSelect={this.handleSelect} eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
    ));

    console.log(category);
    console.log(title);
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Book title</Form.Label>
            <Form.Control type="text" value={title} onChange={this.handleChange} placeholder="book title" required />
          </Form.Group>

          {categories}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default BookForm;

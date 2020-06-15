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
      title: null,
      category: null,
    };
  }

  render() {
    const { title } = this.state;
    let { category } = this.state;
    category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const categories = category.map(cat => <Dropdown.Item key={cat}>{cat}</Dropdown.Item>);
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicText">
            <Form.Label>Book title</Form.Label>
            <Form.Control type="text" value={title} placeholder="book title" />
          </Form.Group>

          <DropdownButton
            as={ButtonGroup}
            key={category}
            id={`dropdown-variants-${category}`}
            title="Categories"
          >
            {categories}
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

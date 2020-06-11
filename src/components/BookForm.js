import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BookForm = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Book title</Form.Label>
          <Form.Control type="text" placeholder="book title" />
        </Form.Group>

        <DropdownButton
          as={ButtonGroup}
          key={Categories}
          id={`dropdown-variants-${Categories}`}
          title={Categories}
        >
          Categories
        </DropdownButton>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;

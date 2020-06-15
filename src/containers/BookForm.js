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
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  render() {
    const { title } = this.state;
    let { category } = this.state;
    category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    const categories = category.map(cat => <Dropdown.Item key={cat}>{cat}</Dropdown.Item>);
    return (
      <div>
        <Form>
          <Form.Group controlId="validationCustom01">
            <Form.Label>Book title</Form.Label>
            <Form.Control type="text" value={title} onChange={this.handleChange} placeholder="book title" required />
          </Form.Group>

          <DropdownButton
            as={ButtonGroup}
            key={categories}
            id={`dropdown-variants-${categories}`}
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

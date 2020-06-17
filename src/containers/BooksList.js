import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Book from '../components/Book';
// eslint-disable-next-line import/no-named-as-default
import removeBook from '../actions/index';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    const { books } = props;
    this.state = {
      books,
    };
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.books.removeBook(this.books.books);
  }

  render() {
    const { books } = this.state;
    const BooksList = books.books.map(
      b => <Book key={b.id} Id={b.id} title={b.title} cat={b.category} Click={this.handleRemove} />,
    );

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>BookID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        {BooksList}
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  books: state,
});

// eslint-disable-next-line arrow-body-style
const mapDispatchToprops = dispatch => {
  return { removeBook: id => dispatch(removeBook(id)) };
};

export default connect(mapStateToProps, mapDispatchToprops)(BooksList);

import React from 'react';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';

class BooksList extends React.Component {
  render() {
    const { books } = this.props;
    const bookList = books ? (
      books.map(book => {
        return (
          <tbody>
            <tr>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.category}</td>
            </tr>
          </tbody>
        );
      })
    ) : (
      <div>No Books available</div>
    );
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>BookID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        {bookList}
      </Table>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.book_id;
  return {
    books: state.books.find(book => book.id === id),
  };
};

export default connect(mapStateToProps)(BooksList);

import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Book from '../components/Book';

const BooksList = books => {
  // eslint-disable-next-line max-len
  const BooksList = books.books.books.map(b => <Book key={b.bookId} bookId={b.id} title={b.title} category={b.category} />);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>BookID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      {BooksList}
    </Table>
  );
};

const mapStateToProps = state => ({
  books: state,
});


export default connect(mapStateToProps)(BooksList);

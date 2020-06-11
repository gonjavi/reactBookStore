import React from 'react';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';

const BooksList = books => {   
  if (books) {
   const bookList = books.map(book => {
      (
        <tbody key={book.id}>
          <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.category}</td>
          </tr>
        </tbody>      
      );
    }
  };
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

const mapStateToProps = state => {  
  return { books: state.books };
};

export default connect(mapStateToProps)(BooksList);

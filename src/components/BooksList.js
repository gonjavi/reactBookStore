import React from 'react';
import Table from 'react-bootstrap/Table';

const BooksList = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>BookID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default BooksList;

import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { bookId, title, category } = props;
  return (
    <tbody key={bookId}>
      <tr>
        <td>{bookId}</td>
        <td>{title}</td>
        <td>{category}</td>
      </tr>
    </tbody>
  );
};
Book.propTypes = {
  bookId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;

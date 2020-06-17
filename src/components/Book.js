import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const Book = props => {
  const {
    Id,
    title,
    cat,
    Click,
  } = props;
  return (
    <tbody key={Id}>
      <tr>
        <td>{Id}</td>
        <td>{title}</td>
        <td>{cat}</td>
        <td><Button onClick={() => Click()} variant="secondary" type="button">Delete</Button></td>
      </tr>
    </tbody>
  );
};
Book.propTypes = {
  Id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cat: PropTypes.string.isRequired,
  Click: PropTypes.func.isRequired,
};

export default Book;

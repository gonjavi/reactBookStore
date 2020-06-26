import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Book = props => {
  const {
    Id,
    title,
    cat,
    Click,
  } = props;
  return (
    <Row key={Id} className="book">
      <Col lg={6}>
        <div className="categoryt">{cat}</div>
        <div className="title">{title}</div>
        <Row className="top">
          <Col className="comments" lg={2}>Comments</Col>
          <Col className="comments" lg={2}><Button className="bu" onClick={() => Click()} variant="link" type="button">Remove</Button></Col>
          <Col className="comments2" lg={2}>Edit</Col>
        </Row>
      </Col>
      <Col lg={3}>
        <div className="progress" />
      </Col>
      <Col lg={3}>
        <div className="chapter">CURRENT CHAPTER</div>
        <div className="introduction">Introduction</div>
        <Button className="update" variant="primary">UPDATE PROGRESS</Button>

      </Col>
    </Row>
  );
};
Book.propTypes = {
  Id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cat: PropTypes.string.isRequired,
  Click: PropTypes.func.isRequired,
};

export default Book;

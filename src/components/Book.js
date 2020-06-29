import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = props => {
  const {
    Id,
    title,
    cat,
    Click,
  } = props;
  return (
    <Row key={Id} className="book">
      <Col lg={6} md={6} sm={6} xs={6}>
        <div className="categoryt">{cat}</div>
        <div className="title">{title}</div>
        <Row className="top">
          <Col className="comments" lg={2} md={4} sm={4}>Comments</Col>
          <Col className="comments" lg={2} md={3} sm={3}><Button className="bu" onClick={() => Click()} variant="link" type="button">Remove</Button></Col>
          <Col className="comments2" lg={2} md={3} sm={3}>Edit</Col>
        </Row>
      </Col>
      <Col lg={3} md={3} sm={3} xs={1} className="pro">
        <div className="progress">
          <CircularProgressbar value={10} text={`${10}%`} />
        </div>
      </Col>
      <Col lg={3} md={3} sm={3} xs={3}>
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

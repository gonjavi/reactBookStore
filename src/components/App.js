import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BooksForm from '../containers/BookForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col lg={4} />
        <Col lg={4}><BooksList /></Col>
        <Col lg={4} />
      </Row>
      <Row>
        <BooksForm />
      </Row>
    </Container>
  );
}

export default App;

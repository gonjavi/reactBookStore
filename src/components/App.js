import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BooksForm from '../containers/BookForm';
import BooksList from '../containers/BooksList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col />
        <Col>
          <BooksForm />
        </Col>
        <Col />
      </Row>
      <Row>
        <Col />
        <Col>
          <BooksList />
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default App;

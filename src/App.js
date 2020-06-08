import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BooksList from './components/BooksList';
import BooksForm from './components/BookForm';

import './App.css';

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

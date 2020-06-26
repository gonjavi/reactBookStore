import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BooksForm from '../containers/BookForm';
import BooksList from '../containers/BooksList';
import NavBar from '../containers/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <BooksList />
          </Col>
        </Row>
        <Row>
          <Col>
            <BooksForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

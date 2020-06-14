import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={BooksList} />
              <Route path="/new" component={BooksForm} />
            </Switch>
          </BrowserRouter>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default App;

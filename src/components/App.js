import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BooksForm from '../containers/BookForm';
import BooksList from '../containers/BooksList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    console.log('delete');
    this.books.removeBook(this.books.book);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col />
          <Col>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={() => <BooksList onClick={this.handleRemove} /> }/>
                <Route path="/new" component={BooksForm} />
              </Switch>
            </BrowserRouter>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default App;

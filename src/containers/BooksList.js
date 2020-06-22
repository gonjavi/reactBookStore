import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Book from '../components/Book';
import { removeBook } from '../actions/index';
import CategoryFilter from './CategoryFilter';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(id) {
    const { removeBook } = this.props;
    removeBook(id);
  }

  render() {
    const { books } = this.props;
    const BooksList = books.books.map(
      b => (
        <Book
          key={b.id}
          Id={b.id}
          title={b.title}
          cat={b.category}
          Click={() => this.handleRemove(b.id)}
        />
      ),
    );

    return (
      <div>
        <CategoryFilter />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>BookID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Delete</th>
            </tr>
          </thead>
          {BooksList}
        </Table>
      </div>
    );
  }
}

BooksList.propTypes = {
  removeBook: PropTypes.func.isRequired,
  books: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  books: state,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

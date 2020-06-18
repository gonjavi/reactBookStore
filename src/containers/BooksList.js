import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    const { books, onClick } = props;
    this.state = {
      books,
      onClick,
    };
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(id) {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.removeBook(id);
    console.log(this.state);
  }
 
  render() {
    const { books } = this.state;
    const { onClick } = this.props;
    const BooksList = books.books.map(
      b => <Book key={b.id} Id={b.id} title={b.title} cat={b.category} Click={() => this.handleRemove(b.id)} />,
    );

    return (
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
    );
  }
}

BooksList.propTypes = {
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

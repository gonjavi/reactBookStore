import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Book from '../components/Book';
import removeBook from '../actions/index';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/prop-types
    const { books, onClick } = props;
    this.state = {
      books,
      onClick,
    };
  }

  /* handleRemove() {
    console.log('delete');
    // this.books.removeBook(this.books.book);
  }
 */
  render() {
    const { books } = this.state;
    const { onClick } = this.props;
    const BooksList = books.books.map(
      b => <Book key={b.id} Id={b.id} title={b.title} cat={b.category} Click={onClick} />,
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

const mapStateToProps = state => ({
  books: state,
});

// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(() => removeBook(id));
  },
});
/* const mapDispatchToProps = dispatch => ({
  onMyAction: value => {
    dispatch(() => console.log(`${value}`));
  },
}); */

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

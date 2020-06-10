import React from 'react';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';

class BooksList extends React.Component {
  render(){
    const { books } = this.props
    const bookList = books.length ? (
      books.map(book => {
        return (
          <tbody>
            <tr>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.category}</td>
            </tr>
          </tbody>           
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    );
    
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>BookID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>   
        {bookList}     
      </Table>
    );



  }
 
};

const mapStateToProps = ({ state }) => books: state.books,



export default connect(mapStateToProps)(BooksList);

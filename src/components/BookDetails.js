import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
// import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin2Line } from 'react-icons/ri';

//************************ ESSENTIALLY THIS SITS IN BOOKLIST.JS ******************************//

// pull in dispatch in a deconstructing from BookContext
// use onClick to remove a book on click, cite the dispatch function and REMOVE_BOOK from BookContext
// then return in <li> as Booklist uses <ul>... each book title and author

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li>
      <div className="title">
        {book.title}
        {/* <BiEditAlt
          className="hover"
          onClick={() => dispatch({ type: 'UPDATE_BOOK', id: book.id })} // change to update
        /> */}
        <RiDeleteBin2Line
          className="hover"
          onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}
        />
      </div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;

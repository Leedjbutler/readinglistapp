import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

//************************ ESSENTIALLY THIS PULLS IN BOOKDETAILS.JS ******************************//

// pull in and deconstruct from BookContext
// is there are books, using .length, then return them by mapping over each book and print them out
// or print jsx saying there are no books

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">
      There are no books on your reading list, add one below
    </div>
  );
};

export default BookList;

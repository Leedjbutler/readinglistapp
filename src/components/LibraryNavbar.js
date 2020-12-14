import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

// using books state so that we can use books.length to count the number of books in the list [array]

const LibraryNavbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Your library</h1>
      <p>Number of books in your library: {books.length}</p>
    </div>
  );
};

export default LibraryNavbar;

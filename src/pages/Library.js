import React from 'react';
import Header from '../components/Header';
import BookContextProvider from './../contexts/BookContext';
import LibraryNavbar from '../components/LibraryNavbar';
import BookList from './../components/BookList';

// BookContextProvider wraps everything in the Booklist

function Library() {
  return (
    <>
      <Header />
      <BookContextProvider>
        <LibraryNavbar />
        <div className="results-form">
          <BookList />
        </div>
      </BookContextProvider>
    </>
  );
}

export default Library;

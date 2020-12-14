import React from 'react';
import Header from './../components/Header';
import BasicNavbar from './../components/BasicNavbar';
import BookContextProvider from './../contexts/BookContext';
import NewBookForm from './../components/BookForm';

// BookContextProvider wraps everything

function FormPage() {
  return (
    <div>
      <Header />
      <BookContextProvider>
        <BasicNavbar />
        <div className="results-form">
          <NewBookForm />
        </div>
      </BookContextProvider>
    </div>
  );
}

export default FormPage;

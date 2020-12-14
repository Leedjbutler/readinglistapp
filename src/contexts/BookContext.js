import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

//************************ THIS WARPS EVERYTHING... SEE AS SUCH IN APP.JS ******************************//

// pass in the data (books) and set the function (dispatch)... and useReducer: add and remove books - bookReducer
// initial value is an empty array OR the function returning what might be in localStorage

// localData function looks for books in local, then returns and turns back in to an object

// useEffect adds books to local, they need to be a string so JSON.stringify does that. The second parameter on line 24 [books] is the array, and when it changes useEffect runs and a book is added

// Then return the books in the page

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;

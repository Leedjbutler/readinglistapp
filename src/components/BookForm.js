import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

//************************ UPDATE FORM ******************************//

// deconstruct useContext from BookContext
// setup 2 states for title and author, both initially an empty string
// handleSubmit is an event function, first prevent page loading. Uses dispatch ADD_BOOK function from BookReducer and takes in title and author, both initially empty strings
// input fields for book and title... setTitle and setAuthor. Both are event functions which go in to handle submit
// then return the fields to enter...onChange simply allow is to type away
// add a submit button

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_BOOK',
      book: {
        title,
        author,
      },
    });
    setTitle('');
    setAuthor('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Enter author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="Add book to list >" />
    </form>
  );
};

export default NewBookForm;

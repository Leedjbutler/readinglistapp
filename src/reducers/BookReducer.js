import uuid from 'uuid/v1';

//************************ ALLOWS US TO CONTROL THE ADDING AND REMOVING OF BOOKS ******************************//

// a reducer is setup to export, takes in (state) and the (action)
// check the type of action using (switch) and create a case for each 'type'
// for ADD we return the current 'state' of books using ... and then a second object adding the new book and id
// for REMOVE we check the (id) and filter over each book. If Id does not match then book remains, if they do then it is deleted
// then a default which is the state

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuid(),
        },
      ];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

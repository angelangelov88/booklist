import { useReducer } from "react";
// import { useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  // const [books, setBooks] = useState([
  //   {title: 'name of the wind', author: 'brandon sanderson', id: uuidv4()},
  //   {title: 'the way of kings', author: 'brandon sanderson',id: uuidv4()},
  //   {title: 'the final empire', author: 'patrick rothfuss',id: uuidv4()},
  //   {title: 'the hero of ages', author: 'patrick rothfuss',id: uuidv4()}
  // ]);
  const [books, dispatch] = useReducer(bookReducer, []);

  // const addBook = (title, author) => {
  //   setBooks([...books, {title, author, id: uuidv4()}]);
  // }

  // const removeBook = (id) => {
  //   setBooks(books.filter(book => book.id !== id));
  // }

  return (
    <BookContext.Provider
      value={{
        books,
        dispatch
        // addBook,
        // removeBook
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;
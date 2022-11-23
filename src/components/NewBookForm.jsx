import { useState } from "react";
import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  // const { addBook } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // addBook(title, author)
    dispatch({type: 'ADD_BOOK', book: {
      title,
      author
    }})
    setTitle('');
    setAuthor('');
  }

  return (
    <form className="p-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full p-2.5 my-1.5 mx-0 bg-[#3c1f3c] border-none"
        placeholder="book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        className="w-full p-2.5 my-1.5 mx-0 bg-[#3c1f3c] border-none"
        placeholder="book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="Add Book" className="my-2.5 mx-auto bg-white border-none py-1.5 px-5 block text-black" />
    </form>
  );
}
 
export default NewBookForm;
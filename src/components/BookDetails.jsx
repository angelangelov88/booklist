import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  // const { removeBook } = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  
  return (
    <li 
      className="bg-[#6d3d6d] rounded p-2.5 cursor-pointer my-2.5 mx-0 hover:opacity-[0.7] hover:line-through"
      // onClick={() => removeBook(book.id)}
      onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}
    >
      <div className="font-bold text-white text-lg">{ book.title }</div>
      <div className="text-[#ddd]">{ book.author }</div>
    </li>
  );
}
 
export default BookDetails;
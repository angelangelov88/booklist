import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="m-5">
      <ul className="p-0 list-none">
        { books.map(book => {
          return (
            <BookDetails book={book} key={book.id} />
          )
        })
        }
      </ul>
    </div>
    
) : (
  <div className="m-5 text-center">No Books to Read</div>
);
}
 
export default BookList;
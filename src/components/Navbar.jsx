import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="py-2.5 px-5 text-center bg-[#6d3d6d]">
      <h1 className="my-2.5 mx-0 text-2xl font-bold">Reading List</h1>
      <p>Currently you have { books.length } books to read</p>
    </div>
  );
}
 
export default Navbar;
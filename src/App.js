import BookList from './components/BookList';
import Navbar from './components/Navbar';
import NewBookForm from './components/NewBookForm';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="w-4/5 max-w-lg my-5 mx-auto text-center text-white">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;

import "./App.scss";
import { useFetchBook } from "./components/Custom Hook/fetch-ch";
import Counter from "./Redux/components/Counter";

export default function App() {
  function Resource({ bookId }) {
    const resource = useFetchBook(bookId);
    if (!resource) return <p>Loading book...</p>;
    const mapped = resource.map((book, index) => {
      return (
        <div key={index}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Year: {book.publication_year}</p>
        </div>
      );
    });
    return <>{mapped}</>;
  }

  return (
    <div className="app">
    <Counter/>
    </div>
  );
}

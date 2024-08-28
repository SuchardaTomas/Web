import Box from "./Box";
import { useState, useEffect } from "react";

export default function Products() {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(4);

  const showMoreBooks = () => {
    setVisible(visible + 4);
  };

  const getBooks = async () => {
    const res = await fetch("http://localhost:3000/book", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setBooks(data);
    setLoaded(true);
  };

  useEffect(() => {
    getBooks();
  }, []);

  if (!loaded) {
    return (
      <>
        <p>Books are loading...</p>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row text-center py-6">
          {books.result.slice(0, visible).map((book) => (
            <Box
              id={book.id}
              name={book.name}
              author={book.author}
              pages={book.pages}
              image={book.image}
            />
          ))}
        </div>
        {visible < books.result.length && (
          <button className="btn btn-warning my-3 btn-lg" onClick={showMoreBooks}>
            Načíst další...
          </button>
        )}
      </div>
    </>
  );
}

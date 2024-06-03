import Box from "./Box";
import { useState, useEffect } from "react";

export default function Products() {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);

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
          {books.result.map((book) => (
            <Box id={book.id} name={book.name} author={book.author} pages={book.pages} />
          ))}
        </div>
      </div>
    </>
  );
}

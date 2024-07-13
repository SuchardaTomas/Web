import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "./Box";

export default function SearchResults() {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`http://localhost:3000/book?name=${query}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        });
        const data = await res.json();
        setBooks(data.result);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    if (query) {
      fetchBooks();
    }
  }, [query]);

  if (!loaded) {
    return <p>Loading books...</p>;
  }

  return (
    <>
      <div className="container">
        <div className="row text-center py-6">
          {books.length === 0 ? (
            <p>No books found.</p>
          ) : (
            books.map((book) => (
              <Box
                key={book.id} // Důležité je přidat key prop při mapování komponenty Box
                id={book.id}
                name={book.name}
                author={book.author}
                pages={book.pages}
                image={book.image}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

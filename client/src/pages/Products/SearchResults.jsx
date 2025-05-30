import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "./Box";
import NotFound from "./NotFound.png";
import { SERVER_URL } from "../../constants";

export default function SearchResults() {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(
          `${SERVER_URL}/book/search/name?name=${query}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        );
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
            <div className="container flex justify-center flex-col items-center">
              <img src={NotFound} alt="No books found" />
              <p className="text-2xl">Žádnou takovou knihu jsme nenašli</p>
            </div>
          ) : (
            books.map((result) => (
              <Box
                id={result.id}
                name={result.name}
                author={result.author}
                pages={result.pages}
                image={result.image}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}

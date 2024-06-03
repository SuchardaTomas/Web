import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Book() {
  const { name } = useParams();
  const [book, setBook] = useState({});
  const [loaded, setLoaded] = useState(false);

  const getBook = async () => {
    const res = await fetch(`http://localhost:3000/book/${name}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setBook(data);
    setLoaded(true);
  };

  useEffect(() => {
    getBook();
    console.log(book.result);
  }, []);

  if (!loaded)
    return (
      <>
        <p>Loading book...</p>
      </>
    );

  return (
    <>
      <p>BOOK</p>
    </>
  );
}

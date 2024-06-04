import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loaded, setLoaded] = useState(false);

  const getBook = async () => {
    const res = await fetch(`http://localhost:3000/book/${id}`, {
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
      <section className="is-fullheight is-default is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-4">
                <figure className="image is-2by3">
                  <img
                    src="https://media.libris.to/jacket/42999443_chainsaw-man-vol-13.jpg"
                    alt="Description"
                  />
                </figure>
              </div>
              <div className="column is-6 is-offset-1">
                <h1 className="title is-2">{book.result[0].name}</h1>
                <h2 className="subtitle is-4">
                {book.result[0].author}
                </h2>
                <br />
                <button
                  type="submit"
                  className="btn btn-warning my-3 btn-lg"
                  name="add"
                >
                  Koupit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

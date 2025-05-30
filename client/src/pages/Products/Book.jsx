import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/CartItems"; 
import { SERVER_URL } from "../../constants";

export default function Book() {
  const { id, name } = useParams();
  const [book, setBook] = useState({});
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  const getBook = async () => {
    const res = await fetch(`${SERVER_URL}/book/${name}/${id}`, {
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
  }, []);

  const handleAddToCart = () => {
    if (!loaded) return; // bezpečnostní kontrola, jestli už data máme

    dispatch(
      addToCart({
        productId: book.result[0].id, // nebo _id, podle struktury dat
        quantity: 1,
      })
    );
  };

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
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-4">
                <figure className="image is-2by3">
                  <img src={book.result[0].image} alt={book.result[0].name} />
                </figure>
              </div>
              <div className="column is-6 is-offset-1">
                <h1 className="title is-2">{book.result[0].name}</h1>
                <h2 className="subtitle is-4">{book.result[0].author}</h2>
                <br />
                <button
                  type="button"
                  className="btn btn-warning my-3 btn-lg"
                  onClick={handleAddToCart}
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

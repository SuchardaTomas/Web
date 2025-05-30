import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../Cart/CartItems";
import { useSelector } from "react-redux";

export default function Box(props) {
  const carts = useSelector((store) => store.cart.items);
  const { id } = props;

  console.log(carts);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  return (
    <>
      <div className="col-md-3 col-sm-6 my-3">
        <div className="card shadow">
          <div>
            <Link to={`/knížky/${props.name}/${props.id}`}>
              <img
                src={props.image}
                alt="Image"
                className="img-fluid card-img-top"
              />
            </Link>
          </div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold is-size-5">
              {props.name}
            </h5>
            <p className="card-text">
              {props.author} | {props.pages}
            </p>
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
    </>
  );
}

import { Link } from "react-router-dom";

export default function Book(props) {
  return (
    <>
      <div className="col-md-3 col-sm-6 my-3">
        <form method="post">
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
              <h5 className="card-title font-weight-bold is-size-5">{props.name}</h5>
              <br />

              <p className="card-text">
                {props.author} | {props.pages} |
              </p>
              <h5>
                <br />
                <span className="price"> Kč</span>
              </h5>
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
        </form>
      </div>
    </>
  );
}

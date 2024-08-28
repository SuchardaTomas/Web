import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Název zboží</th>
                <th>Cena</th>
                <th>Množství</th>
                <th>Celková cena</th>
              </tr>
            </thead>
            <tbody>
              <td>
                <span
                  className="btn btn-primary"
                  style={{ margin: "2px" }}
                  onClick={() => DecreaseQuantity(key)}
                >
                  -
                </span>
                <span className="btn btn-info">množství</span>
                <span
                  className="btn btn-primary"
                  style={{ margin: "2px" }}
                  onClick={() => IncreaseQuantity(key)}
                >
                  +
                </span>
              </td>

              <td>144 Kč</td>

              <tr>
                <td colSpan="5">Celková cena</td>
                <td>154 kč $</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

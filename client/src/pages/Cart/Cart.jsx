import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <h1>Cart</h1>
    </>
  );
}

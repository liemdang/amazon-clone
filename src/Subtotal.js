import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

// const ergebnis
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket.length);
  let ergebnis;
  if (basket.length !== 0) {
    const array1 = basket.map((i) => i.price);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    ergebnis = array1.reduce(reducer);
  } else {
    ergebnis = 0;
  }

  // console.log(ergebnis);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={ergebnis}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

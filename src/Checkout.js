import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";

function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />

        {cart?.length === 0 ? (
          <div>
            <h2>Cart is Empty</h2>
            <p>Add Some Item to the Cart</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">CheckoutYour Shopping Cart</h2>

            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout__right">
          <h1>Total</h1>
          <SubTotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;

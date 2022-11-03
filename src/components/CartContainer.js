import React from "react";
import CartItem from "./CartItem";
import {connect} from "react-redux";

import { CLEAR_CART } from "../action";

// const CartContainer = ({ cart = [] }) => {
  // cart should an empty array otherwise it would have given an error
const CartContainer =({cart=[],total,dispatch})=>{
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            {/* total <span>$0.00</span> */}
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn"
         onClick={()=>{dispatch({type:CLEAR_CART})}}>clear cart</button>
      </footer>
    </section>
  );
};
function mapStateToProps(store){ // can be called store also
  // return{cart:store.cart,total:store.total}
  // using destructuring by es6 
  const {cart, total} = store // store also include dispatch function
  return{cart,total}

}

export default connect(mapStateToProps)(CartContainer);

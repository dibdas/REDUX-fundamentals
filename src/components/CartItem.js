import React from "react";

import { INCREASE,DECREASE,REMOVE } from "../action";
import {connect} from "react-redux";

const CartItem = ({ img, title, price, amount , remove}) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
         {/* invoking the remove function rigt away without the arraow function */}
        {/* <button className="remove-btn" onClick={remove}>remove</button> */}
        
        {/* invoking the remove function after the arraow function not invoking directly */}
        <button className="remove-btn" onClick={()=>remove()}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// export default CartItem;
const mapDispatchToProps=(dispatch,ownProps)=>{
  //return {remove:dispatch({type:REMOVE})} // its getting inviked before the user clicks
  // return {remove:()=> dispatch({type:REMOVE})} // for when user clicks on button ist get invoked right way

  // return {remove:()=> dispatch({type:REMOVE,id:1})} // in the reducer I will get id is 1 as i is hard coded

  console.log(ownProps) // for each and every cart Item , there is the unique value here , getting all values which are there in the cart Item values
  // ownProps giving us all the values which are there in props 

  const {id} = ownProps
  //  return {remove:()=>dispatch({type:REMOVE, payload:{id:id}})} without using e6 property 
  // OR
  return {remove:()=>dispatch({type:REMOVE, payload:{id}})} // using es6 as using the same name


}
// here we dont need pass mapstateToProps , because props are already being passed so only
// mapDispatchToprops is being passed thats why the first argument is null
// connect has two arguments , first is mapStateToProps, second is mapDispatchToprops
// as first argument is not there so ot s null

export default  connect(null,mapDispatchToProps)(CartItem)

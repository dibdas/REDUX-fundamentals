import React, { Component } from "react";

import { connect } from "react-redux";
// Connect is higher order component , it means it returns a component itself
// const Navbar = ({cart}) => {
const Navbar=({am})=>{
  // const {count} = cart
  return (
    <nav>
      <div className="nav-center">
        <h3>ReduxGear</h3>
        <div className="nav-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
          </svg>
          <div className="amount-container">
            {/* <p className="total-amount">{count}</p> */}
            <p className="total-amount">{am}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

// before redux
// export default Navbar;
// after implementing redux 
// export  default connect()(Navbar);
// connect() it means connect is returning the first function and this function is looking 
// for the component that is to be connected to 
// connect()(Navbar) it means connect is returning the first function and this function is connected
 //the Navbar Component

 // connect()(Navbar); after this
 // Instead of retuning the Navbar, we have access to state and dispatch method ,since we have wrap
  // our Navbar Component in the connect
  // connect() has many arguments , out of which two are important, 
  // they are mapStateToProps,mapDispatchToProps


  // mapping the store to the props of the Navbar component
  const mapStateToProps=(state)=>{
    console.log(state)
    // mapStateToProps() in Connect(Navbar) must return a plain object. Instead received undefined.
    // return {am:state.amount} // setting up the prop name and value want to the prop, any name can be given to prop
    return {amount:state.amount}
  }
  // 
  export  default connect(mapStateToProps)(Navbar);



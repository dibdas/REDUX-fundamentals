import React, { useReducer } from "react";
// components
import Navbar from "./components/Navbar";
// importing actions
import { INCREASE, DECREASE} from "./action";
import reducer from "./reducer";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - it stores data , think of state , think of it as global state
// reducer - function that is used to update the store

// the idea of using the redux is almost the same as that of the contect api 
// multiple components has access to the state and the methods without the prop drilling 
// essentially any component in the application can access the state ,methods without passing 
// it to the parent component

//the major difference between redux and contecxt api is the way how we update our state
// we comes to redux we cannot update the store directly , thats not allowed
// It does not mutate the state or the store directly

// ui/view-> dispatch-> action-> reducer-> store->view /ui

// in order to manage with the store, the following three functions is needed 3 things, which down below
// create store function rom the redux
// variable which store the value
//  reducer function

// dispatch method send the action to the store
// we cant mutate the old state of directly in redux
// redux is immutablility.. so you need to make a copy , and then return that copy from the reducer

import { createStore} from "redux";
// react-redux - Provider - wraps app, connect - used in components
import {Provider} from "react-redux";
console.log(createStore)
//  const defaultstore={count:65 ,name:"john"}

// new store
const  defaultstore ={
  // amount: 0,
  amount:5,
  total:210,
  cart:cartItems}

// setting action as variables
// const DECREASE ="DECREASE" // moving all constant to action.js
// const INCREASE= "INCREASE" // moving all constant to action.js

// moving the reducer function to reducer file
// function reducer(state,action){

//   console.log("make it happen in reducer")
//   console.log({state,action})
//   if(action.type==="DECREASE")
//   {
    // console.log("hey it works")
    // state.count= state.count-1 // it wont work because we are mutating the state directly without making a copy of it and then returning
    //return{count:state.count-1} // making a copy of the old state and returning that new state
    // ...state it means copying  and pasting the old state value , not mutating
    // {...state,count:state.count+1} // copying and pasting the old state , 
    // and changing the state what I desire 
    // {...state,count:state.count+1} // here john is coming from the old state as well as the new state
    // where as return{count:state.count-1} john is not coming in the new state
  //   return{...state,count:state.count-1} 

  // }
  // if(action.type==="RESET"){
  //   //return{count:state.count=65}
  //   //OR 
  //   return{...state,count:65}
  // }
  // if(action.type==="INCREASE"){
  //   return{...state,count:state.count+1}
  // }
  // if(action.type==="CHANGE_NAME"){
  //   return{...state,name:"santa"}
  // }
  
  // return state // by default we should always return the old state
  //return "shake and bake" // we can return anything from the reducer , but functinality may change
//    return state
// }


// const store= createStore(()=>{}) probably the function can be done here also
const store = createStore(reducer,defaultstore)
 console.log(store)
 console.log(store.getState()) // 65 .. old state value
// now using constants as variables
// store.dispatch({type:"DECREASE"}) // action needed to be object
// store.dispatch({type:"DECREASE"}) // action needed to be object
// store.dispatch({type:"DECREASE"}) // action needed to be object
// store.dispatch({type:ECREASE}) // showing error Line 82:22:  'ECREASE' is not defined  no-undef


// store.dispatch({type:"INCREASE"})
// store.dispatch({type:"INCREASE"})
// store.dispatch({type:"INCRASE"})
// store.dispatch({type:"CHANGE_NAME"})


// store.dispatch({type:DECREASE})
// store.dispatch({type:INCREASE})


// store.dispatch({type:"RESET"})


console.log(store.getState()) // new state value

function App() {
  // cart setup

  return (
    <main>
      {/* <Navbar /> */}
      {/* passing the value as prop to Navbar component */}
       {/* <Navbar cart={store.getState()}/>  will use the redux to access the value directly*/}
       {/* <Navbar />
      <CartContainer cart={cartItems} /> */}
      {/* <Provider store={store}> */}
      <Provider store={store}>
         {/* each  element wrapped inside the provider can access the store , access the dispatch method,
         and set up the actions , more essentially dispatch the actions to redux store using the connect
          function */}
        <Navbar />
        {/* <CartContainer cart={cartItems} /> */}
        <CartContainer />
      </Provider>
    </main>
  );
}

export default App;

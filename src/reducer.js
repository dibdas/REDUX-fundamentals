import {INCREASE,DECREASE,CLEAR_CART, REMOVE} from './action' ;
 
 
 function reducer(state,action){

   console.log("make it happen in reducer")
  console.log({state,action})
  if(action.type==="DECREASE")
  {
    // console.log("hey it works")
    // state.count= state.count-1 // it wont work because we are mutating the state directly without making a copy of it and then returning
    //return{count:state.count-1} // making a copy of the old state and returning that new state
    // ...state it means copying  and pasting the old state value , not mutating
    // {...state,count:state.count+1} // copying and pasting the old state , 
    // and changing the state what I desire 
    // {...state,count:state.count+1} // here john is coming from the old state as well as the new state
    // where as return{count:state.count-1} john is not coming in the new state
  //   return{...state,count:state.count-1} 

  }
  if(action.type==="RESET"){
    //return{count:state.count=65}
    //OR 
    return{...state,count:65}
  }
  if(action.type==="INCREASE"){
    return{...state,count:state.count+1}
  }
  if(action.type==="CHANGE_NAME"){
    return{...state,name:"santa"}
  }
  if(action.type===CLEAR_CART){
    return{...state,cart:state.cart=[]}
  }
  if(action.type===DECREASE){
    console.log("you decrease ")
  }
  if(action.type===INCREASE){
    console.log("you oncrease")
  }
  if(action.type===REMOVE){
    console.log("you remove amount")
    console.log(action.payload.id)
    return{...state,
    cart:state.cart.filter((c)=>action.payload.id!==c.id)}
  }
  // using switch case
  // switch(action.type) {
  //   case CLEAR_CART:
  //     return{...state,cart:state.cart=[]}
  //     default:
  //       return state
    

  // }
  
  // return state // by default we should always return the old state
  //return "shake and bake" // we can return anything from the reducer , but functinality may change
   return state
}

export default reducer;


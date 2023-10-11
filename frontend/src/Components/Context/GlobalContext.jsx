import React from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const MyContext = createContext();
const reducer = (state, action) => {
   switch (action.type) {
      case "INCREMENT":
         return { ...state, counter: state.counter + 1 }
      case "DECREMENT":
         return { ...state, counter: state.counter - 1 }
      case "RESET":
         return { ...state, counter: 0 }
      default:
         return state;
   }
}
// add GlobalContext to index.js
const GlobalContext = ({ children }) => {
   const initialState = { counter: 0 }
   const [state, dispatch] = useReducer(reducer, initialState)

   return (
      <MyContext.Provider value={{ state, dispatch }}>
         {children}
      </MyContext.Provider>
   )
}

export default GlobalContext
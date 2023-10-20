import { useState } from "react";

const useCounter = (initialState = 0) => {
   const [counter, setCounter] = useState(initialState)

   function increment() {
      setCounter((value) => value + 1)
   }

   function decrement() {
      setCounter((value) => value - 1)
   }

   function reset() {
      setCounter(0)
   }

   return [counter, increment, decrement, reset]
}

export default useCounter;
import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const UseMemo = () => {
   const [counter, setCounter] = useState(0)
   const [todos, setTodos] = useState([])

   function addTodos() {
      setTodos([...todos, "New todos"])
   }


   // const lengthyCalculation = calculation(counter)
   const lengthyCalculation = useMemo(() => calculation(counter), [counter])


   return (
      <div>
         <h1>Lengthy Calculation - {lengthyCalculation}</h1>
         <h1>Counter - {counter}</h1>
         <button onClick={() => setCounter((value) => value + 1)}>+</button>
         <button onClick={addTodos}>Add Todos</button>
         {todos.map((todo) => (
            <h2>{todo}</h2>
         ))}
      </div>
   )
}

const calculation = (counter) => {
   console.log('Calculating...')
   for (var i = 0; i < 1000000000; i++) {
      counter += 1
   }
   return counter
}

export default UseMemo
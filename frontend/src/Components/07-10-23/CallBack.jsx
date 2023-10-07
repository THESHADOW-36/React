import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const CallBack = () => {
   const [counter, setCounter] = useState(0)
   const [todos, setTodos] = useState([])

   function addCounter() {
      setCounter((value) => value + 1)
   }

   // function addTodo() {
   //    setTodos([...todos, "New Todo"])
   // }

   const addTodo = useCallback(()=> {
      setTodos([...todos, "New Todo"])
   }, [todos])

   return (
      <div>
         <h1>Counter - {counter}</h1>
         <button onClick={addCounter}>+</button>
         <Todos todos={todos} addTodo={addTodo} />
      </div>
   )
}

export default CallBack
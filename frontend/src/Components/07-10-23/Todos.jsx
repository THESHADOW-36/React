import React, { memo } from "react";

const Todos = ({ todos, addTodo }) => {
   alert("Alerts from todos component")
   return (
      <div>
         <h1>Todos</h1>
         <button onClick={addTodo}>Add todo</button>
         {todos.map((todo)=>(
            <h2>{todo}</h2>
         ))}
      </div>
   )
}

export default memo(Todos)
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Cards({todos, setTodos}) {

  const deleteCard = (todoId) => {
    setTodos(card => card.filter((todo) => {
      console.log(todo.id, "!==", todoId)
      return todo.id !== todoId;
    }))
  }
  return (
    <div className="todos-container">
      
      {todos.map((todo) => (
        <div key={todo.id} className="todo-card">
          <p><strong>{todo.list}</strong></p>
          <p>{todo.time}</p>

          <button onClick={() => deleteCard(todo.id)} className="delete-button">
            <FontAwesomeIcon icon={faTrash} className="trash-icon"/>
          </button>
        </div>
      ))}

      
    </div>
  );
}
export default Cards;
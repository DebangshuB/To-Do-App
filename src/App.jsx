import { useState } from 'react';
import { DisplayToDo } from './components/DisplayToDo'
import { EnterToDo } from './components/EnterToDo'

function App() {
  let [todos, setTodos] = useState([]);

  const addTodo = ({ heading, text }) => {
    
    const exists = todos.findIndex((e) => {
      return (e.heading === heading && e.text === text)
    })

    if (exists !== -1){
      alert("Element already exists!")
      return 0;
    }

    setTodos((previousState) => {
      return [...previousState, { heading: heading, text: text }];
    })

    return 1;
  }

  const deleteTodo = (data) => {
    const tempTodos = [...todos];


    tempTodos.splice(
      tempTodos.findIndex((e) => {
        return (e.heading === data.heading && e.text === data.text)
      }), 1
    )

    setTodos(tempTodos);
  }

  return (
    <>
      <EnterToDo
        addTodo={addTodo}
      />

      <hr />

      <DisplayToDo
        data={todos}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;

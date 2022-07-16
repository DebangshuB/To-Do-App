import { ToDo } from './ToDo'

export function DisplayToDo(props) {

  return (
    <>
      {
        props.data.map(todo => {
          return (
            <ToDo 
            data={todo}
            deleteTodo={props.deleteTodo}
            />
          )
        })
      }
    </>
  );
}
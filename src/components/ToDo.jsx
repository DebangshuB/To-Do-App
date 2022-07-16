export function ToDo(props) {
  const removeTodo = (event) => {
    event.preventDefault();

    props.deleteTodo({
      heading: props.data.heading,
      text: props.data.text
    })

  }

  return (
    <div>
      <strong>{props.data.heading}</strong>
      <p>{props.data.text}</p>
      <button onClick={removeTodo}>Delete</button>
      <hr />
    </div>
  );
}


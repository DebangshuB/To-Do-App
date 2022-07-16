export function DisplayToDo() {
  let todos = [
    {
      heading: "Heading #1",
      text: "Text #1"
    },
    {
      heading: "Heading #2",
      text: "Text #2"
    },
    {
      heading: "Heading #3",
      text: "Text #3"
    },
    {
      heading: "Heading #4",
      text: "Text #4"
    }
  ];

  return (
    <>
      {todos.map(data => {
        return (<div>
          <strong>{data.heading}</strong>
          <p>{data.text}</p>
          <button>Delete</button>
          <hr />
        </div>
        )
        
      })}
    </>
  );
}
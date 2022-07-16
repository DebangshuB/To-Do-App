import { useState } from "react";


export function EnterToDo(props) {

  let [formData, setFormData] = useState({ heading: "", text: "" })

  const getData = (event) => {
    event.preventDefault();

    if(!formData.heading || !formData.text){
      alert("One or more fields empty!")
      return;
    }

    if(!props.addTodo(formData)) return;

    setFormData({ heading: "", text: "" })

  }


  return (
    <form>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        value={formData.heading}
        onChange={
          (event) => setFormData((prevState) => {
            return { ...prevState, heading: event.target.value }
          })
        }
        required
      />
      <input
        type="text"
        name="body"
        id="body"
        placeholder="Body"
        value={formData.text}
        onChange={
          (event) => setFormData((prevState) => {
            return { ...prevState, text: event.target.value }
          })
        }
        required
      />
      <button onClick={getData}>Create Todo</button>
    </form>
  );
}
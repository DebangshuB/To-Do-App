export function EnterToDo() {
  return (
    <form>
        <input type="text" name="title" id="title" placeholder="Title"/>
        <input type="text" name="body" id="body" placeholder="Body"/>
        <button type="submit">Create Todo</button>
    </form>
  );
}
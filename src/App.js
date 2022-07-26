import { useEffect, useState } from 'react';

function App() {
  const [toDo, setTodo] = useState('');
  const [toDos, setTodos] = useState([]);
  const onChagne = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') return;
    setTodos((current) => [toDo, ...current]);
    setTodo('');
  };
  return (
    <div>
      <h1> ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChagne}
          placeholder="Enter Todo"
          type="text"
        ></input>
        <button> Save </button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;

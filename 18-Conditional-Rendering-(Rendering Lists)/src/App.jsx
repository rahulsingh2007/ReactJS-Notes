import { useState } from "react";

const Todo = ({ todo }) => {
  return (
    <div className="border-5 border-amber-500">
      <div>{todo.title}</div>
      <div>{todo.desc}</div>
    </div>
  );
};

const App = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [todos] = useState([
    { title: "Hey1", desc: "I am a todo." },
    { title: "Hey2", desc: "I am a todos." },
    { title: "Hey3", desc: "I am a todoos." }
  ]);

  return (
    <div>
      {todos.map((todo, idx) => {
        return <Todo key={idx} todo={todo} />;
      })}

      <button onClick={() => setShowBtn(!showBtn)}>Toggle Showbtn</button>
      {showBtn ? <button>Btn is true</button> : <button>Btn is false</button>}
    </div>
  );
};

export default App;

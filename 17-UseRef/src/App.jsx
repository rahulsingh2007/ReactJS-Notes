import { useState, useEffect, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const btnRef = useRef(0);

  useEffect(() => {
    console.log(`First rendering`);
    btnRef.current.style.backgroundColor = "red"
  }, []);

  return (
    <div>
      <h1>Count = {count}</h1>
      <button ref={btnRef} onClick={() => setCount(count + 1)}>Change Count</button>
      <button onClick={() => { btnRef.current.style.display = "none" }}>Use Me</button>
    </div>
  );
};

export default App;


/* import { useState, useEffect, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const a = useRef(0); 

  useEffect(() => {
    a.current = a.current + 1;
    console.log(`Rerendering and the value of a is ${a.current}`); 
  });

  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={() => setCount(count + 1)}>Change Count</button>
    </div>
  );
};

export default App;
 */
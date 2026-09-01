import { useState, useEffect, useRef } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  // 1. Initialize the ref as null because it will hold a DOM element
  const btnRef = useRef(null);

  useEffect(() => {
    console.log("First rendering");
    // 2. Access the DOM element using .current and change its background
    btnRef.current.style.backgroundColor = 'red';
  }, []);

  return (
    <div>
      <h1>Count = {count}</h1>
      {/* 3. Attach the ref to this button */}
      <button ref={btnRef} onClick={() => setCount(count + 1)}>
        Change Count
      </button>
      {/* 4. This button hides the first button when clicked */}
      <button onClick={() => { btnRef.current.style.display = 'none'; }}>
        Use Me
      </button>
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
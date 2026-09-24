import { useState, useCallback } from "react";
import Navbar from "./Components/Navbar";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");

  // This function ONLY changes if 'text' changes.
  // It completely ignores changes to 'count'.
  const displayMessage = useCallback(() => {
    return text + " World!";
  }, [text]); 

  return (
    <div>
      <Navbar displayMessage={displayMessage} />
      
      {/* Test 1: Changes 'count'. Navbar will NOT re-render! */}
      <button onClick={() => setCount(count + 1)}>
        Count is: {count} (Child ignores this)
      </button>

      {/* Test 2: Changes 'text'. Navbar WILL re-render! */}
      <button onClick={() => setText("Hi")}>
        Change Text (Child responds to this)
      </button>
    </div>
  );
};

export default App;

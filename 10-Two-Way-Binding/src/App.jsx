// In React, two-way data binding is achieved manually by combining a state variable with an event handler, because React natively uses a strict one-way data flow model. This implementation creates what is known as a controlled component.

import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted by', title);
    setTitle('')
  }
  return (
    <>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          type="text"
          placeholder="Enter you name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App

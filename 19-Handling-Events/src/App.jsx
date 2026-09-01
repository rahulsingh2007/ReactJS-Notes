import { useState } from "react";

const App = () => {
  // const [name, setName] = useState("");
  const [form, setForm] = useState({ name: "", phone: "" });
  const handleClick = () => {
    alert`Hey I am clicked.`;
  }
  const handleMouseOver = () => {
    alert`I am mouse over.`
  }
  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form);
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
      <div className="red" onMouseOver={handleMouseOver}>
        I am red.
      </div>
      <input type="text" name="name" value={form.name ? form.name : ""} onChange={handleChange} />
      <input type="text" name="phone" value={form.phone ? form.phone : ""} onChange={handleChange} />
    </>
  )
}

export default App
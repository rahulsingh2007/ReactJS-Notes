import React from 'react'

const App = () => {
  function inputChanging(elem) {
    console.log(elem)
  }
  return (
    <>
      <div>
        <h1>Hello, Rahul</h1>
        <input onChange={function(elem) {
          inputChanging(elem.target.value)
        }} type="text" placeholder='Enter Name' />
      </div>
    </>
  )
}

export default App

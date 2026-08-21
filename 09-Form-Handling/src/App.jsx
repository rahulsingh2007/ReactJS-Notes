const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted');
  }
  return (
    <>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input type="text" placeholder="Enter you name" />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App

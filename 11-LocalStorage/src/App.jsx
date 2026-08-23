const App = () => {
  /* localStorage.setItem("name","Rahul")
  localStorage.setItem("age","18")
  console.log(localStorage);
  const name = localStorage.getItem("name")
  console.log(name); */

  const user = {
    name: 'Rahul',
    age: 18,
    location: 'Ktm'
  }
  localStorage.setItem("user", JSON.stringify(user))
  const userDetails = JSON.parse(localStorage.getItem('user'));
  console.log(localStorage);
  console.log(userDetails);

  return (
    <>
      <div>App</div>
    </>
  )
}

export default App

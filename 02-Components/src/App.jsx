import Card from './Components/card'
import navbar from './Components/navbar'

const App = () => {
  return (
    <>
      <div>
        {navbar()}
        {Card()}
        {Card()}
      </div>
    </>
  )
}

export default App

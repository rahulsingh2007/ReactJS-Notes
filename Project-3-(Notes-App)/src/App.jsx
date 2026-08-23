import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title, details);
    const copyTask = [...task]
    copyTask.push({ title, details })
    setTask(copyTask)
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div className="h-screen bg-gray-300 lg:flex">
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="flex items-start lg:w-1/3 gap-4 flex-col p-10">

        <h1 className="text-3xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 w-full font-medium border-2 outline-none rounded bg-white"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          placeholder="Write Details Here"
          className="px-5 py-2 w-full font-medium border-2 flex items-start flex-row rounded outline-none h-60 bg-white"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />

        <button className="px-5 py-2 w-full font-medium active:bg-blue-600 active:scale-99 bg-blue-500 outline-none text-white rounded-xl">Add Notes</button>

      </form>

      <div className='lg:w-3/4 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
          {task.map(function (elem, idx) {
            return <div key={idx} className="flex justify-between flex-col items-start relative min-h-80 w-77 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold ml-5 mt-5'>{elem.title}</h3>
                <p className='ml-5 mt-2 leading-9 text-xs font-semibold text-gray-600 wrap-break-word'>{elem.details}</p>
              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white">Delete</button>
            </div>
          })}
        </div>
      </div>

    </div >
  )
}

export default App

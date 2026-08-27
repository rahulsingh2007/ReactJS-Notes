import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-4 px-8 bg-blue-900">
        <h2 className="text-xl font-bold">CodingLab</h2>
        <div className="flex gap-10">
          <Link className="text-lg font-medium" to="/">Home</Link>
          <Link className="text-lg font-medium" to="/About">About</Link>
          <Link className="text-lg font-medium" to="/Product">Product</Link>
          <Link className="text-lg font-medium" to="/Courses">Courses</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar

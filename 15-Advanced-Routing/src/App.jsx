import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Navbar2 from "./Components/Navbar2"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Product from "./Pages/Product"
import Men from "./Pages/Men"
import Women from "./Pages/Women"
import NotFound from "./Pages/NotFound"
import Kids from "./Pages/Kids"
import Courses from "./Pages/Courses"
import CourseDetails from "./Pages/CourseDetails"

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/Product" element={<Product />}>
          <Route path="Men" element={<Men />} />
          <Route path="Women" element={<Women />} />
          <Route path="Kids" element={<Kids />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div >
  )
}

export default App

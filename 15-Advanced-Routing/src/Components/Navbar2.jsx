import { useNavigate } from "react-router-dom"

const Navbar2 = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-blue-600">
            <button
                onClick={() => {
                    navigate('/')
                }}
                className="bg-emerald-700 px-5 py-2 rounded m-2 cursor-pointer active:scale-95">Return to HomePage</button>
            <button
                onClick={() => {
                    navigate(-1)
                }}
                className="bg-emerald-700 px-5 py-2 rounded m-2 cursor-pointer active:scale-95">Back</button>
            <button
                onClick={() => {
                    navigate(+1)
                }}
                className="bg-emerald-700 px-5 py-2 rounded m-2 cursor-pointer active:scale-95">Next</button>
        </div>
    )
}

export default Navbar2
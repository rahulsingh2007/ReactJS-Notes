import { useState, useEffect } from "react";
import axios from "axios";
import PrevBtn from "./Components/PrevBtn";
import NextBtn from "./Components/NextBtn";
import LoadingSpinner from "./Components/LoadingSpinner";
import ImageGrid from "./Components/ImageGrid";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`);
        setUserData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [index]);
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col min-h-screen bg-black text-white p-4">
      <div className="flex flex-wrap justify-center gap-5 p-2 relative min-h-[50vh]">
        {loading ? <LoadingSpinner /> : <ImageGrid data={userData} />}
      </div>

      <div className="flex justify-center items-center mt-auto p-4 gap-6">
        <PrevBtn index={index} setIndex={setIndex} setUserData={setUserData} loading={loading} />
        <h1>Page: {index}</h1>
        <NextBtn index={index} setIndex={setIndex} setUserData={setUserData} loading={loading} />
      </div>
    </div>
  );
};

export default App;

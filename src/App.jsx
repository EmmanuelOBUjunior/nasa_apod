import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [showModal, setshowModal] = useState(false);
  const [data, setData] = useState(null);

  function handleToggleModal() {
    setshowModal(!showModal);
  }

  useEffect(() => {
    const fetchNASAData = async () => {
      const NASA_API = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API}`;
      
      const today = (new Date()).toString()
      const localKey = `NASA-${today}`

      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log("Fetched from cache!!!")
        return
      }

      localStorage.clear()

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData);
        console.log("Fetched from API");
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchNASAData()
  }, []);

  return (
    <>
      {data ? (
        <Main data = {data}/>
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && <Sidebar handleToggleModal={handleToggleModal} data={data}/>}
      {data && <Footer handleToggleModal={handleToggleModal} data = {data}/>}
    </>
  );
}

export default App;

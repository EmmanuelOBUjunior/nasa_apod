import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [showModal, setshowModal] = useState(false);
  const [data, setData] = useState(null)

  function handleToggleModal() {
    setshowModal(!showModal);
  }

  useEffect(() => {
    const fetchNASAData = async()=>{
      const NASA_API = import.meta.env.VITE_NASA_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API}`
      // const url = `https://api.nasa.gov/planetary/apod?api_key=wua2QTeWBRfs7lBwdzzpMxwDPYo6l4ZhyQHQVC8N`

      try{
        const res = await fetch(url)
        const apiData = await res.json()
        setData(apiData)
        console.log("DATA\n",apiData)
      }catch(err){
        console.log(err.message)
      }

    }
    // fetchNASAData()
  }, []);

  return (
    <>
      {data ? <Main />:(
        <div className="loadingState"><i className="fa-solid fa-gear"></i></div>
      )}
      {showModal && <Sidebar handleToggleModal={handleToggleModal} />}
      <Footer handleToggleModal={handleToggleModal} />
    </>
  );
}

export default App;

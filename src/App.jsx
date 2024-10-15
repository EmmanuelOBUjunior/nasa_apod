import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [showModal, setshowModal] = useState(false);

  function handleToggleModal() {
    setshowModal(!showModal);
  }

  useEffect(() => {
    const fetchNASAData = async()=>{
      const NASA_API = import.meta.env.NASA_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API}`

      try{
        const res = await fetch(url)
        const data = await res.json()
        console.log("DATA\n",data)
      }catch(err){
        console.log(err.message)
      }

    }
    fetchNASAData()
  }, []);

  return (
    <>
      <Main />
      {showModal && <Sidebar handleToggleModal={handleToggleModal} />}
      <Footer handleToggleModal={handleToggleModal} />
    </>
  );
}

export default App;

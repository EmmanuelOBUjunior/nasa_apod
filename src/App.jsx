import { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {
    const [showModal, setshowModal] = useState(false)

    function handleToggleModal(){
      setshowModal(!showModal)
    }
 
  return (
    <>
      <Main/>
      {showModal && <Sidebar handleToggleModal = {handleToggleModal}/>}
      <Footer handleToggleModal = {handleToggleModal}/>
    </>
  )
}

export default App

import { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {
    const [showModal, setshowModal] = useState(false)
 
  return (
    <>
      <Main/>
      {showModal && <Sidebar/>}
      <Footer/>
    </>
  )
}

export default App

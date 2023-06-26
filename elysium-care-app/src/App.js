import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Need from "./pages/Need"
import Involved from "./pages/Involved"
import Referrals from "./pages/Referrals"
import Donate from "./pages/Donate"
import Search from "./pages/Search"
import { Route, Routes } from "react-router-dom"

function App() {
  

  return (
  <>
    <Navbar />
    <div className= "container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/need" element={<Need/>} />
        <Route path="/involved" element={<Involved/>} />
        <Route path="/referrals" element={<Referrals/>} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </div>
  </>
  )
}

export default App;

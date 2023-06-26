import Navbar from "./Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Need from "./pages/Need"
import Involved from "./pages/Involved"
import Referrals from "./pages/Referrals"
import Donate from "./pages/Donate"
import Search from "./pages/Search"

function App() {
  let component 
  switch (window.location.pathname){
      case "/":
        component = <Home/>
        break
      case "/about":
        component = <About/>
        break
      case "/need":
        component = <Need/>
        break
      case "/involved":
        component = <Involved/>
        break
      case "/referrals":
        component = <Referrals/>
        break
      case "/donate":
        component = <Donate/>
        break
      case "/search":
        component = <Search/>
        break
  }
  return (
  <>
  <Navbar />
  {component}
  </>
  )
}

export default App;

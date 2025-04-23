import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/navbar'
import Maintenance from './pages/maintenance'

function App() {

  const isMaintenance =  false

  return (
    // <>
    //   <NavBar/>
    //   <Outlet/>
    // </>

    <>
       {isMaintenance ? (
        <Maintenance />
      ) : (
        <>
          <NavBar />
          <Outlet />
        </>
      )}
    </>
  )
}

export default App

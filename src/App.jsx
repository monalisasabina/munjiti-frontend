import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> ⛪ WORKING ON PRROGRESS.......... ⛪</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <img  className='logo' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.learn-e.com%2Fmy-writing&psig=AOvVaw0-gFFnB57MxBo46-g0zrCq&ust=1745402943772000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDch-qy64wDFQAAAAAdAAAAABAE' />
      </div>
    
    </>
  )
}

export default App

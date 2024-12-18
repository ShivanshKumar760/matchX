import { useState } from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import OnBoarding from './pages/Onboarding'
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/onboarding" element={<OnBoarding/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

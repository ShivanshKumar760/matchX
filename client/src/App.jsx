import { useState } from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import OnBoarding from './pages/Onboarding'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import { useCookies } from 'react-cookie';
function App() {
  const [count, setCount] = useState(0)
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const authToken=cookies.AuthToken;
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Protected routes */}
        {authToken ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/onboarding" element={<OnBoarding />} />
          </>
        ) : (
          // Redirect to home or login if not authenticated
          <Route path="/dashboard" element={<Navigate to="/" />} />
        )}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

import { useState } from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import OnBoarding from './pages/Onboarding'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useCookies } from 'react-cookie';
function App() {
  const [count, setCount] = useState(0)
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const authToken=cookies.AuthToken;
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {authToken && <Route path="/dashboard" element={<Dashboard/>}/>}
            {authToken && <Route path="/onboarding" element={<OnBoarding/>}/>}

        </Routes>
    </BrowserRouter>
)
}

export default App;

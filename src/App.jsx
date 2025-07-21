import { Routes, Route, Navigate } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"
import Home from './pages/home/Home'
import Login from "./pages/login/Login"
import Signup from './pages/signup/Signup'
import Navbar from "./components/Navbar"


function App() {

  const {authIsReady, user} = useAuthContext()
  
  
  return (
    
    <div>
       {authIsReady && (
        <>
    <Navbar/>
      <Routes>
        <Route path='/' element={user ? <Home/> : <Navigate to="/login" replace/>}/>
        <Route path = '/login' element={!user ? <Login/> : <Navigate to ="/" replace/>}/>
        <Route path ='/signup' element={!user ? <Signup/> : <Navigate to = "/" replace/>}/>
      </Routes>
      </>

)}
      
    </div>
  )
}

export default App

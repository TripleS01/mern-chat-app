import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './App.css'

import PathTo from './paths'
import { useAuthContext } from './context/AuthContext'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/home/Home'


function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>

        <Routes>

          <Route index element={authUser ? <Home /> : <Navigate to={PathTo.Login} />} />

          <Route path={PathTo.Register} element={authUser ? <Navigate to={PathTo.Home} /> : <Register />} />
          <Route path={PathTo.Login} element={authUser ? <Navigate to={PathTo.Home} /> : <Login />} />

        </Routes>

        <Toaster />

      </div>
    </>
  )
};

export default App;
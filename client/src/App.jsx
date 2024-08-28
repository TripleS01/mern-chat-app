import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './App.css'

import PathTo from './paths'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>

        <Routes>

          <Route index element={<Home />} />
          <Route path={PathTo.Register} element={<Register />} />
          <Route path={PathTo.Login} element={<Login />} />

        </Routes>

        <Toaster />

      </div>
    </>
  )
};

export default App;
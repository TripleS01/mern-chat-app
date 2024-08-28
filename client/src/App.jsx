import { Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/home/Home'

function App() {
  return (
    <>
      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App

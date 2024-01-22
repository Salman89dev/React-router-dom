import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SingUp from './Pages/SingUp'
import NAvbar from './Components/NAvbar'
import DashboardHe from './Pages/DashboardHe'

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <NAvbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/singup' element={<SingUp/>} />
          <Route path='/dashboard' element={<DashboardHe />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import Test from './components/Test'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
import Test4 from './components/Test4'
import Test5 from './components/Test5'
import Test6 from './components/Test6'
import Registration from './components/Registration'
import Navbar from './Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Service from './components/Service'
import Calendar from './components/Calendar'
import Projects from './components/Projects'



const App = () => {

  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path="/home" element={<Home/>}/>
       <Route path="/service" element={<Service/>}/>
       <Route path='/calender' element={<Calendar/>}/>
       <Route path='/sujitha' element={<Projects/>}/>
      </Routes> 
    </div>
  )
}

export default App



import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Project from './components/Projects'

const App = () => {
  return (
    <div>
       <Navbar/>
        <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/user/about-us" element={<Aboutus />} />
           <Route path='/user/services' element={<Services />} />
           <Route path="/user/projects" element={<Project />} />
           <Route path="/user/contact" element={<Contact />} />

        </Routes>
      <Footer/>
  
    </div>
  )
}

export default App
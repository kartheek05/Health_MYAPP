import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Doctorcard from './components/Doctorcard'
import AddDoctor from './components/AddDoctor'

function App() {
  return (
    <div>
      <Navbar/>
      <Section/>
      <div className='doctorcontainer'>
      <Doctorcard name = 'Teja' specialization = 'Psychology' gender = 'Male'/>
      <Doctorcard name = 'Kartheek' specialization = 'Cardio' gender = 'Male'/>
      <Doctorcard name = 'Laxman' specialization = 'Nuero' gender = 'Male'/>
      <Doctorcard name = 'Akash' specialization = 'Denstist' gender = 'Male'/>
      </div>
      <AddDoctor/>
    </div>
  )
}

export default App

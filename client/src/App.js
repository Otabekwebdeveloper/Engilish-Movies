import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import AboutUS from './Screens/AboutUS'
import NotFound from './Screens/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/about-us' element={<AboutUS />} />
      <Route path='*' element={<NotFound />} />

    </Routes>
  )
}
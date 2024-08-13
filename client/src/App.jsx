import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from '../pages/HomePage'
import PerformancesPage from '../pages/PerformancesPage'
import ContestantsPage from '../pages/ContestantsPage'
import Header from '../components/header'

import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contestants" element={<ContestantsPage />}></Route>
        <Route path="/performances" element={< PerformancesPage />}></Route>
      </Routes>
    </div>
  )
}

export default App

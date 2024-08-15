import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from '../pages/HomePage'
import PerformancesPage from '../pages/PerformancesPage'
import ContestantsPage from '../pages/ContestantsPage'
import Header from '../components/Header'
import UserProfilePage from '../pages/UserProfilePage'

import {Routes, Route} from 'react-router-dom';
import PerformancesRoundPage from '../pages/PerformancesRoundPage'

function App() {
  //Set User
  const userID = "66b9a77b86ec967f761668f4"; //In normal web development, this would be obtained via an auth token

  return (
    <div>
      <Header id={userID} />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contestants" element={<ContestantsPage />}></Route>
        <Route path="/performances" element={< PerformancesPage />}></Route>
        <Route path="/performances/round/:num" element={<PerformancesRoundPage />}></Route>
        <Route path="/user/:id" element={<UserProfilePage />}></Route>
      </Routes>
    </div>
  )
}

export default App

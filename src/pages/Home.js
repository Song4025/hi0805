import React from 'react'
import { Routes, Route } from "react-router-dom";
import IntegratedInfo from './IntegratedInfo';
import './../sass/Home.scss'

const Home = () => {
  return (
    <Routes>
      <Route path="/" element={<IntegratedInfo />} />
    </Routes>
  )
}

export default Home
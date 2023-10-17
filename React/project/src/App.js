import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Counter from './components/Counter'
import { Route, Routes } from "react-router-dom";
import './App.css'
import Calculator from './components/Calculator';

const App = () => {
  return (
    <>
      <div className='main'>
        <Routes>
          <Route path='/' element={<>
            <Header />
            <Counter />
            <Footer />
          </>}>

          </Route>
          <Route path='/calculator' element={
            <>
              <Header />
              <Calculator />
              <Footer />
            </>
          }>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App

// import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Settings from './components/Settings';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/about' exact element={<About />}></Route>
          <Route path='/settings' exact element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/users' exact element={<Users />}></Route>
          <Route path='/analytics' exact element={<Analytics />}></Route>
          <Route path='/settings' exact element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

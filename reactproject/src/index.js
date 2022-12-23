import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Routing from './Routing';  
import App from './App';
import './style.css';



// HOC
const HOCRed = (props) => {
  return (
    <>
      <div style={{width:"100px", heightD:"100px", backgroundColor:"red"}}><props.cmp/></div>
    </>
  )
}
const HOCGreen = (props) => {
  return (
    <>
      <div style={{width:"100px", heightD:"100px", backgroundColor:"green"}}><props.cmp/></div>
    </>
  )
}
const Counter = () => {
  
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>Update</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <App />
    {/* Render Props */}
    <BrowserRouter>
      <Routes>
      <Route exact path='/routing' element={<Routing name="Routing"/>}/>
      </Routes>
    </BrowserRouter>

    {/* HOC */}
    <h1>HOC</h1>
    <HOCRed cmp={Counter}/>
    <HOCGreen cmp={Counter}/>

  </>
);

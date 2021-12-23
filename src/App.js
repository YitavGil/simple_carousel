import './App.css';
import React from 'react';
import Top from './comps/Top';
import Main from './comps/Main';
import { SliderData } from './comps/SilderData';
import {FaAngellist, FaAngry} from 'react-icons/fa'


function App() {
  return (
    <div className="App">
      <Top />
      <Main slides={SliderData}/>
    </div>
  );
}

export default App;

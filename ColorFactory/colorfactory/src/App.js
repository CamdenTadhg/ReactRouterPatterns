import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Home';
import ColorSelector from './ColorSelector';
import AddColor from './AddColor';

function App() {
  const initialState = [
    {name: "Papaya Whip", value: 'FFEFD5'},
    {name: 'Thistle', value: 'D8BFD8'},
    {name: 'Old Lace', value: 'FDF5E6'}
  ]
  const [colors, setColors] = useState(initialState);
  
  function addColor(name, value) {
    const newColor = {name, value};
    let colorsCopy = structuredClone(colors);
    colorsCopy.unshift(newColor);
    setColors(colorsCopy);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/colors' element={<Home colors={colors}/>}/>
        <Route exact path='/addcolor' element={<AddColor addColor={addColor}/>}/>
        <Route exact path='/colors/:color' element={<ColorSelector colors={colors}/>}/>
        <Route path='*' element={<Navigate to='/colors'/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

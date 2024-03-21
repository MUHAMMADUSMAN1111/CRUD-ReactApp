import logo from './logo.svg';
import './App.css';
import {Create} from './Componets/create';
import {Read} from './Componets/read';
import { Routes, Route } from 'react-router-dom';
import {Edit} from './Componets/edit';
function App() {
  return (
    <>
      <Routes>
        <Route  path='/' element={<Read/>}></Route>
        <Route  path='/create' element={<Create/>}></Route>
        <Route  path='/edit' element={<Edit/>}></Route>
      </Routes>
    </>
  );
}

export default App;

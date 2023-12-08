import logo from './logo.svg';
import './App.css';
import Question from './Components/Button/Question';
import { Route, Routes } from 'react-router-dom';
import Form from './Components/Form/Form';
import { useSelector } from 'react-redux';
import Table from '../src/Components/Table/Table';
import { useEffect } from 'react';
import Answer from './Components/Answers/Answer';

function App() {
  const {counter} = useSelector((store)=>store.masterData)
  
  return <>
    <Routes>
      <Route path='/' element={<Question/>}/>
       <Route path='/Form' element={<Form/>}/>
       <Route path='/table' element={<Table state={counter}/>}/>
       <Route path='/answer' element={<Answer state={counter}/>}/>
    </Routes>
   
  </>
}

export default App;

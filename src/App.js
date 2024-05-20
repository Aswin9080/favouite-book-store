
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Students from './components/student';
import Favstudent from './components/fstudent';
import "./index.css"
import { useState } from 'react';

function App() {
  const [studentarr,setstudent]=useState([{id:1,name:"Aswin",disabled: false},{id:2,name:"Muvi",disabled: false},{id:3,name:"Bharath",disabled: false},{id:4,name:"akash",disabled: false},{id:5,name:"Devi",disabled: false}])
    
    const [favarr,setfavstudent]=useState([])
  return (
    <div>
    <BrowserRouter>
    <nav className='bg-red-500 m-2 p-2 text-xl flex gap-4 underline'>
      <Link to={"/"}>List of Students</Link>
      {"    "}
      <Link to={"/about"}>Favourite Students</Link>
    </nav>
    <Routes>
    <Route path='/' element={<Students studentarr={studentarr} favarr={favarr} setfavstudent={setfavstudent} setstudent={setstudent}/>}></Route>
   <Route path='/about' element={<Favstudent  studentarr={studentarr} favarr={favarr} setfavstudent={setfavstudent} setstudent={setstudent}/>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  )}
    


export default App;

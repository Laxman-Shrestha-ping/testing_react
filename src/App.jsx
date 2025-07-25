
import './App.css'
import About from './components/about/About'
import Location from './components/Location'

import Contact from './components/contact/Contact'

import Counter from './components/counter/Counter'
import Navbar from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom';
import Project from './components/project/project'

import Home  from './components/home/home'
import Login from './components/login/login'
import Product from './components/product/product'

function App() {
   //const age = 20;
  

//    function handleClick() {
//     console.log("button clicked");
//  }


//   const fullName = <h1> i am batman </h1>
// const name = "laxman";
// const person = {
//   name: "laxman",
//   age: 20,
//   address: "morang, Nepal"

  return (
    <>
    <Navbar/>
      {/* <Home/> */}


    {/* <div className="container">
    <h1> MY portfolio </h1>
    <p> i am laxman Shrestha. i am a student</p>
<p> i am {name} and i am {age} years old</p>

    <button
      id='btn'
        onClick={handleClick} >
        click me</button>
       
      </div> */}

       {/*routing configuration*/}
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project />} />
        <Route path='/login' element={<Login />} />
        <Route path='product' element={<Product />} />
        
      </Routes>

{/*      
<div> {fullName}</div>

      <div className="container1">
        Don't tell anyone. I am batman, superman, spiderman, 
    </div> */}
    {/* <div>
      <Location />
      <About person = {person} />
      
     <Location />
     <Contact />


    </div>
     <Counter />
     */}
    
    </>
  )
}
    


export default App

import React from "react";
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import { apiUrl,filterData } from './data.js'
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [courses,setCourses]=useState(null);
  useEffect(()=>{
    const fetchdata= async()=>{

      
     
       try{
          const response=  await fetch(apiUrl);
          const output=await response.json();
          // console.log(output);
          setCourses(output.data);
       }
       catch(error){
         toast.error("something went wrong");
       }
     }
     fetchdata(); 
    },[])

  // const [category,setCategoty]=useState(filterData)
  return (
    <div>
          <Navbar></Navbar>
          <Filter 
            discriminativeData={filterData}
          >

          </Filter>

          <Cards 
          courses={courses}
          ></Cards>
  </div>
  )

};

export default App;

import React from "react";
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import { apiUrl,filterData } from './data.js'
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./components/Spinner.js";

const App = () => { 

  const [courses,setCourses]=useState(null);
  const [loading,setLoading]= useState(true);
  let[category,setCategory]=useState(filterData[0].title);
  

  
  
  useEffect(()=>{

    
    const fetchdata= async()=>{

         setLoading(true);

       try{
          const response=  await fetch(apiUrl);
          const output=await response.json();
          console.log(output);
          // make sure to write output.data
          setCourses(output.data);
       }
       catch(error){
         toast.error("something went wrong");
         
       }
       setLoading(false);
       
     }
     fetchdata(); 
    },[])

  // const [category,setCategoty]=useState(filterData)
  return (
    <div className="min-h-screen flex flex-col">
          <div>
            <Navbar></Navbar>
          </div>


        <div className="min-h-screen bg-gradient-to-br from-pink-900 via-slate-900 to-pink-700 text-white">
  
          <div>
          <Filter discriminativeData={filterData}
          category={category}
          setCategory={setCategory}
          > </Filter>
          </div> 

          <div>
          {
            loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)
          }
          </div>
          </div>
  </div>

  )

};

export default App;

import React from "react";

function Filter({discriminativeData})
{
    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
         {discriminativeData.map((indivisualFilter)=>
         {
          return (
          <button className="text-lg px-4 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50
          border-2 transition-all duration-100"
          key={indivisualFilter.id}>
          {indivisualFilter.title}
          </button>);
         })}  
         
        </div>

    )
}

export default Filter;
import React from "react";

function Filter({discriminativeData})
{
    return(
        <div>
         {discriminativeData.map((indivisualFilter)=>
         {
          return (
          <button key={indivisualFilter.id}>
          {indivisualFilter.title}
          </button>);
         })}  
         
        </div>

    )
}

export default Filter;
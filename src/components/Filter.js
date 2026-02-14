import React from "react";

function Filter({ discriminativeData, category, setCategory }) {

  const filterHandler = (title) => {
    setCategory(title);
  };

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">

      {discriminativeData.map((individualFilter) => (
        
        <button
          key={individualFilter.id}
          onClick={() => filterHandler(individualFilter.title)}
          className={`text-lg px-4 py-1 rounded-md font-medium text-white border-2 transition-all duration-200
            ${category === individualFilter.title 
              ? "bg-blue-600 border-blue-600" 
              : "bg-black hover:bg-opacity-50 border-black"}
          `}
        >
          {individualFilter.title}
        </button>

      ))}

    </div>
  );
}

export default Filter;
 
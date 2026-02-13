import React from "react";

function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      
      {/* Spinner Circle */}
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Loading Text */}
      <p className="mt-4 text-lg font-semibold text-gray-600">
        Loading...
      </p>

    </div>
  );
}

export default Spinner;

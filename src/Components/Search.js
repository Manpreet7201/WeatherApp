import React, { useState } from 'react';

function Search({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onSearch(inputValue);
      setInputValue(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex items-center space-x-4'>
      <input
        type="text"
        placeholder="Enter any city"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      className='px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300'/> 
      <button type="submit" className='px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors' onSubmit={handleSubmit}>Search</button>
    </form>
  );
}

export default Search;


// import React, { useState, useContext } from 'react';
// import { WeatherContext } from '../contexts/weatherContext'

// function Search() {
//   const [input, setInput] = useState('');
//   const { setCity } = useContext(WeatherContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (input.trim()) {
//       setCity(input);
//       setInput(''); 
//     }
//   };

//   return (
//     <div className="flex justify-center"> 
//       <form onSubmit={handleSubmit} className='flex items-center space-x-4'>
//         <input 
//           value={input} 
//           className='px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300' 
//           onChange={(e) => setInput(e.target.value)} 
//           placeholder="Enter any city" 
//         />
//         <button 
//           type="submit" 
//           className='px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors'
//         >
//           Search
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Search;

import './App.css'
import { useState } from 'react';

function App() {
   const [Lan, setLan] = useState(true)
  return ( 
   <>
      <div className="p-5 text-white border-4 border-b-blue-500 shadow-lg shadow-blue-400 bg-gray-800 flex justify-around">
         <h2>
            My portofolio
         </h2>

         <div className=''>
            <button className='m-2'>About me</button>
            <button className='m-2'>Certificate</button>
            <button className='m-2'>Cocial Media</button>
         </div>
      </div> 
   
   </>
   );
}

export default App;
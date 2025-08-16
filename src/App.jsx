import './App.css'
import { useState } from 'react';

function App() {
   const [Lan, setLan] = useState(true)
  return ( 
   <>
      <div className='bg-black p-3 text-white flex justify-around '>
         <h2>Portofolio</h2>
         <div>
            <a href="" className='m-2 hover:text-shadow-lg hover:text-shadow-white'>About-me</a><a href="" className='m-2 hover:text-shadow-lg hover:text-shadow-white'>skill</a><a href="" className='m-2 hover:text-shadow-lg hover:text-shadow-white'>certificate</a>
         </div>
      </div>
   <div className='bg-black p-40 '>
      <div className='flex justify-evenly'>
        <div className='mr-40 mt-20 text-white'>
            <h1 className='text-4xl'>My dream is imposibble but my track is posible</h1>
           <br />
           <div className='flex'>
            <a href="" className='text-gray-600 text-m hover:text-white hover:text-shadow-lg hover:text-shadow-white'>Github</a> 
            <p>--</p>
            <a href="" className='text-pink-400 text-m hover:text-white hover:text-shadow-lg hover:text-shadow-white'>Instagram</a>
            <p>--</p>
            <a href="" className='text-blue-600 text-m hover:text-white hover:text-shadow-lg hover:text-shadow-white'>Facebook</a></div>
            <div>--------------------------------------------------------------------------------</div>
        </div>
         <img src="https://i.pinimg.com/736x/94/09/a5/9409a5a8afb2052f5b6c55021ab3cb89.jpg" alt="" className='rounded-[50%] shadow-2xl shadow-amber-50' width="400px"/>
        
      </div>
   </div>
   </>
   );
}

export default App;
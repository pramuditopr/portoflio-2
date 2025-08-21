import './App.css'
import { useState } from 'react';

function App() {
   const [Lan, setLan] = useState(true)
  return ( 
   <>
   {/* header */}
      <div className='bg-black p-3 text-white flex justify-around font-[Fira_Code]'>
         <h2>Portofolio</h2>
         <div>
            <a href="" className='m-2 hover:text-shadow-lg hover:text-shadow-white'>About-me</a><a href="" className='m-2 hover:text-shadow-lg hover:text-shadow-white'>skill</a><a href="" className='m-2 hover:text-shadow-lg hover:text-shadow-white'>certificate</a>
         </div>
      </div>
{/* jumbotron */}
   <div className='bg-black p-40 font-[Fira_Code]'>
      <div className='flex justify-evenly'>
        <div className='mr-40 mt-20 text-white'>
            <h1 className='text-4xl'>My dream is imposibble but my track is posible</h1>
           <br />
           <div className='flex'>
            <a href="" className='text-gray-600 text-m hover:text-white hover:text-shadow-lg hover:text-shadow-white mr-2'>Github</a> 
            |
            <a href="" className='text-pink-400 text-m hover:text-white hover:text-shadow-lg hover:text-shadow-white mr-2 ml-2'>Instagram</a>
            |
            <a href="" className='text-blue-600 text-m hover:text-white hover:text-shadow-lg hover:text-shadow-white ml-2'>Facebook</a></div>
            <div>--------------------------------------------------------------------------------</div>
        </div>
         <img src="https://i.pinimg.com/736x/94/09/a5/9409a5a8afb2052f5b6c55021ab3cb89.jpg" alt="" className='rounded-[50%] shadow-2xl shadow-amber-50' width="400px"/>
        
      </div>
   </div>
<div className='p-0.5 bg-white '></div>
{/* about me */}
 <div className='p-40 bg-black block text-center font-[Fira-Code]'>
      <h1 className='text-white text-4xl'>Who i am?</h1>
      <div className='m-20 flex text-amber-50'>
         <img src="https://i.pinimg.com/736x/94/09/a5/9409a5a8afb2052f5b6c55021ab3cb89.jpg" alt="image" className='w-100 border-2xl border-amber-50 rounded-2xl shadow-2xl shadow-amber-50'/>

         <div className='p-5 ml-30 border-4 border-white rounded-2xl'>
            <p>
               Hi, I'm Rio — a 7th-grade student passionate about programming. I specialize in web development using HTML, CSS, and JavaScript, and I'm currently exploring PHP and React. I'm also interested in data science and machine learning. With a curious mindset and a drive to keep improving, I aim to create creative and meaningful digital solutions.
            </p>
         </div>
        
      </div>
       <a href="" className='border-4 border-amber-50 w-[80%] text-center pr-80 pl-80 text-white pb-6 hover:shadow-2xl hover:shadow-amber-50 rounded-2xl'> Contact me</a>
 </div>

<div className='p-0.5 bg-white  '></div>
{/* skill */}


   <div className='bg-black p-40 text-center font-[Fira_Code] flex justify-evenly'> 
      <div className='bg-amber-50 pb-10 p-0.5 mr-10'>
         
      </div>
   <div className='block '>
       <h1 className='text-4xl text-white font-[Fira_Code]'>
            What can i do?
         </h1>
      <div className='border-4 border-amber-50 p-20 rounded-2xl m-5 text-amber-50'>
         <h1 className='text-2xl'>💻Front-end developer </h1>
         <br />
         <br />
         <p>Front-End Developer who loves turning ideas into interactive and visually appealing web experiences. I enjoy working with modern technologies to build responsive, user-friendly, and creative websites.</p>
      </div>
      <div className='border-4 border-amber-50 p-20 rounded-2xl m-5 text-amber-50'>
         <h1 className='text-2xl'>🔒back-end developer                    ---                   <span className='text-red-600'>(skill unlock)</span></h1>
         <br />
         <br />
         <p>I’m Rio, and I’m on my journey to becoming a Backend Developer. I enjoy working behind the scenes, designing systems, managing databases, and writing efficient code that ensures every application runs smoothly and securely.</p>
      </div>
      <div className='border-4 border-amber-50 p-20 rounded-2xl m-5 text-amber-50'>
         <h1 className='text-2xl'>🔒Data Science/Machine learning                   ---                   <span className='text-red-600'>(skill unlock)</span></h1>
         <br />
         <br />
         <p>My goal is to step into the world of Data Science and Machine Learning, mastering the art of turning raw data into powerful predictions that can change the future</p>
      </div>
   </div>
          <div className='bg-amber-50 pb-10 p-0.5 ml-10'>
         
      </div>
   </div>
   </>
   );
}

export default App;
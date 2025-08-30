import './App.css'
import { useState } from 'react';

function App() {

   const Follow = [
      {
         image : 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
         name : 'Instagram',
         link : ''
      }
      ,{
         image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMzEkaAN0BJ2o3ri2IsQRKXVk6ejQQqz0GUg&s',
         name : 'Github',
         link : ''
      },{
         image : 'https://static.vecteezy.com/system/resources/previews/023/986/561/non_2x/tiktok-logo-tiktok-logo-transparent-tiktok-icon-transparent-free-free-png.png',
         name : 'Tiktok',
         link : ''
      }
   ]
   const quote = [   
      // Small steps can create something big.
      {qu : "Small"},{qu : "steps"},{qu : "can"},{qu : "create"},{qu : "something"},{qu : "big."}
   ]

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
      <div className='flex justify-center'>
        <div className='mr-40 mt-20 text-white'>
         <h1 className='flex space-x-5'>
            <h1 className='animate-bounce delay-50 duration-50 text-3xl'>📝</h1>
            <h1 className='animate-bounce delay-100 duration-100 text-3xl'>👨‍💻</h1>
            <h1 className='animate-bounce delay-150 duration-150 text-3xl'>🚀</h1>
            <h1 className='animate-bounce delay-200 duration-200 text-3xl'>🛠️</h1>
            <h1 className='animate-bounce delay-250 duration-250 text-3xl'>👨‍💻</h1>
            <h1 className='animate-bounce delay-300 duration-300 text-3xl'>📝</h1></h1>


            <h2 className='text-4xl'>{quote.map((q) => (
               <span className='mr-2 transition-shadow ease-in-out saturate-200 hover:shadow-2xl shadow-amber-50'>{q.qu}</span>
            ))}</h2>
           <br />
           <div className='flex'>
            <a href="" className='text-gray-600 text-m hover:text-white hover:text-shadow-lg hover:text-shadow-white mr-2'>Github</a> 
            |
            <a href="" className='text-pink-400 text-m hover:text-white hover:text-shadow-lg hover:text-shadow-white mr-2 ml-2'>Instagram</a>
            |
            <a href="" className='text-blue-600 text-m hover:text-white hover:text-shadow-lg hover:text-shadow-white ml-2'>Facebook</a></div>
            <div>--------------------------------------------------------------------------------</div>
        </div>

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
       <a href="" className='border-4 border-green-500 w-[80%] text-center pr-80 pl-80 text-white pb-6 hover:shadow-2xl hover:shadow-green-500 rounded-2xl'> Contact me</a>
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
   <div className='bg-white p-0.5'>

   </div>
   <div className='p-40 bg-black text-center block justify-center font-[Fira-Code]'>
      <h1 className='text-white text-2xl '>
         Follow Me
      </h1>
      <div className='flex m-10 mr-10 justify-evenly'>
      {Follow.map((maps)=> (
         <div className='p-10 border-4 block border-amber-50 text-white m-5 justify-center rounded-2xl transition-shadow ease-in-out duration-300  hover:shadow-2xl shadow-amber-50'>
            <img src={maps.image} alt="" width={70} className='m-5'/>
            <div className='pt-0.5 bg-amber-50 pl-10 pr-10'>

            </div>
            <p className='m-5'>{maps.name}</p>
         </div>
      ))}
      </div>


      
   </div>
   </>
   );
}

export default App;

import React,{ useState }  from 'react'


export default function Contact() {
    const [userName,setuerName]=useState(false);
 const [userAge,setuerAge]=useState(false);
 const [userGmail,setuerGmail]=useState(false);
 const [userPassword,setuerPassword]=useState(false);
  return (
    <>
    <section className='pt-4 bg-white font-bold text-3xl items-center justify-center'>
      <div> 
        <h2 className='text-blue-600 uppercase p-5 text-5xl'>conatct section</h2>
        <div className="star my-5 flex items-center justify-center">
            <span className="w-20 h-1 bg-blue-600"></span>
            <i className=" text-blue-600 fa-solid fa-star mx-5"></i>
            <span className="w-20 h-1 bg-blue-600"></span>
        </div>
      </div>
       
      <div className="container px-5 py-10 text-center">
           <div className="w-full mx-auto form md:w-3/5 lg:w-1/2">

             <div className="inputName">
                <label className={`self-start text-emerald-400 relative ${userName? 'top-0 z-10' : 'top-10 -z-10'}  duration-500`} htmlFor="userName">userName:</label>
                <input onInput={(e)=> e.target.value == ''? setuerName(false) : setuerName(true)} className='p-3 mb-10 w-[100%] border-0 outline-0 shadow-md rounded-md' type="text" name="userName" id="userName" placeholder='userName'/>
             </div>

             <div className="inputAge">
                <label className={`self-start text-emerald-400 relative ${userAge? 'top-0 z-10' : 'top-10 -z-10'}  duration-500`} htmlFor="userAge">userAge:</label>
                <input onInput={(e)=> e.target.value == ''? setuerAge(false) : setuerAge(true)} className='p-3 mb-10 w-[100%] border-0 outline-0 shadow-md rounded-md' type="number" name="userAge" id="userAge" placeholder='userAge'/>
             </div>
             
             <div className="inputMail">
                <label className={`self-start text-emerald-400 relative ${userGmail? 'top-0 z-10' : 'top-10 -z-10'}  duration-500`} htmlFor="userEmail">userEmail:</label>
                <input onInput={(e)=> e.target.value == ''? setuerGmail(false) : setuerGmail(true)} className='p-3 mb-10 w-[100%] border-0 outline-0 shadow-md rounded-md' type="email" name="userEmail" id="userEmail" placeholder='userEmail'/>
             </div>
             
             <div className="inputPass">
                <label className={`self-start text-emerald-400 relative ${userPassword? 'top-0 z-10' : 'top-10 -z-10'}  duration-500`} htmlFor="userPassword">userPassword:</label>
                <input onInput={(e)=> e.target.value == ''? setuerPassword(false) : setuerPassword(true)} className='p-3 mb-10 w-[100%] border-0 outline-0 shadow-md rounded-md' type="password" name="userPassword" id="userPassword" placeholder='userPassword'/>
             </div>

             <button className='self-start p-4 py-1 text-white rounded-md bg-emerald-400'>send Message</button>
           </div>
        </div>
    </section>
    </>
  )
}

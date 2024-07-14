"use client";
import Inputs from '@/components/Inputs.jsx';
import axios from 'axios';
import Image from 'next/image';
import { useCallback, useState } from 'react';

import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';


export default  function AuthForm() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [varient,setVarient] = useState('Login');

  const [isLoging, setIsLoging] = useState(false);

  const toggleVarient = useCallback(()=>{ setVarient((currentVarient)=>{ return (currentVarient == "Login"?"register":"Login")})},[]);


  const login = useCallback(async ()=>{
    setIsLoging(true);
    try{
      await signIn('credentials', {
        email,
        password,
        callbackUrl:'/pages/profile'
      });
      setIsLoging(false);

    }catch(error){
      console.log(error);
      throw new Error(error);
    }

  },[email,password,setIsLoging]);


  const register = useCallback(async()=>{

    try{
      await axios.post('/api/auth/register',{
        email,
        name,
        password,
      });

      login();
    }catch(error){
      console.log("ERROR: ",error.response.data.error);

    }
  },[email,name,password,login]);

  return (
    <>
    <div className='h-100 min-h-full w-full bg-[url(/images/background.jpg)] bg-cover '>
    <div className='bg-black h-full min-h-full lg:bg-opacity-50 min-h-full h-full'>
      <nav>
      <Image src= '/images/Netflix_Logo.png' width={100} height={100} alt='Logo' px-2 />
      </nav>
      <div className='flex flex-col justify-center'>
        <div className='bg-black bg-opacity-70 px-16 py-16  self-center '>
          <h2 className='text-white text-2xl mb-8 font-semibold'>
            {varient == 'Login'?"Sign In":"Register"}</h2>
          <div className='flex flex-col gap-2'>
            {varient == "register" && <Inputs id={"userName"} label={"userName"} value={name} onchange={(event)=>{setName(event.target.value)}}/>}
            <Inputs id={"email"} label={"Email"} value={email} onchange={(event)=>{setEmail(event.target.value)}} type={'text'}/>
            <Inputs id={"password"} label={"password"} value={password} onchange={(event)=>{setPassword(event.target.value)}}  type={'password'}/>
          </div>

          <button onClick={varient=='Login'?login:register} className='bg-red-600 py-3 text-white rounded-md w-full hover: bg-red-700 mt-10 transition'>
           {isLoging == false?  ( varient =="Login"?"Login":"Sign Up"): "LOADING..."}
          </button>


          <div className='flex flex-row items-center gap-4 mt-8 justify-center'>

<div onClick={()=>signIn('google' , {callbackUrl: '/pages/profile'})} className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer transition hover:opacity-80'>
  <FcGoogle size={30}/>
</div>


<div onClick={()=>signIn('github' , {callbackUrl: '/pages/profile'})} className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer transition hover:opacity-80'>
  <FaGithub size={30}/>
</div>
</div>

          <p className='text-neutral-500 mt-12'>
            {varient =='Login'?"first time using Netflix?":"already have an account?"}
            <span className='text-white hover:underline cursor-pointer px-1' onClick={toggleVarient}>
             {varient == 'Login'?"Register" : "Login"}
            </span>

          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}

import React, { useCallback } from 'react'
import { MdEmail } from "react-icons/md";
import { AiFillLock, AiOutlineUser } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { useSession, signIn } from 'next-auth/react';
import axios from 'axios'
import { useRouter } from 'next/router';

const Auth = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [varient, setVarient] = React.useState('login')
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [password, setPassword] = React.useState('')

  const toggleVarient = useCallback(() => {
    setVarient((currentVarient) => currentVarient === 'login' ? 'register' : 'login');
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/'
      });

      router.push('/');
    } catch (error) {
      console.log(error);
    }
  }, [email, password , router]);



  
  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email: email,
        name : name,
        password: password,
      });
      login();
    }
       catch{
        console.log('error')
      }
  }, [email, name, password,login]);



  

  return (
    <div className='flex flex-col md:border border-black justify-center 
    md:p-14 md:items-center rounded-3xl'>
      
      <div className="flex flex-col gap-4 md:w-[18rem] justify-center md:items-center">
        <h1 className="font-semibold text-lg">Join thousands of learners from around the world</h1>
        <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
      </div>
      {/* Form */}
      <div className='flex flex-col justify-center items-center gap-4 mt-6'>
          {varient === 'register' && (
          <div className="flex flex-row gap-2 items-center w-full md:w-[18rem]  h-12 border border-[#BDBDBD] rounded-xl pl-2">
              <AiOutlineUser className='text-[#828282] w-5' />
              <input
              id="name"
              type="text"
              value={name}
              onChange={(e: any) => setName(e.target.value)} 
              placeholder="Name"
              />
          </div>
          )}
          <div className="flex flex-row gap-2 items-center w-full md:w-[18rem]  h-12 border border-[#BDBDBD] rounded-xl pl-2">
            <MdEmail className='text-[#828282] w-5'/>
            <input 
            id="email"
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)} 
            placeholder="Email"
             />
          </div>
          <div className="flex flex-row gap-2 items-center w-full md:w-[18rem]  h-12 border border-[#BDBDBD] rounded-xl pl-2">
            <AiFillLock className='text-[#828282] w-5'/>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <button 
              className='bg-[#2F80ED] w-full md:w-[18rem] h-9 text-white text rounded-lg' 
              onClick={varient === 'login' ? login : register} >{varient === 'login' ? "Sign In" : "Register"  }</button>
      </div>

      <div className="flex flex-col justify-center items-center mt-5 gap-4">
        <p className='font-normal text-[#828282]'>or continue with these social profile</p>
          <div className='flex gap-5'>
              <div className=" flex justify-center items-center p-2  rounded-full border border-[#828282] cursor-pointer"
               onClick={() => {
                signIn(
                  "google",
                  {
                  callbackUrl: 'http://localhost:3000/account',
                  }
                );
              }}
              >
                <AiOutlineGoogle className='text-[#828282]'/>
              </div>
              <div className=" flex justify-center items-center p-2  rounded-full border border-[#828282] cursor-pointer"
              onClick={() => {
                signIn(
                  "github",
                  {
                    callbackUrl: 'http://localhost:3000/account',
                  }
                );
              }}
              >
                <AiFillGithub className='text-[#828282]'/>
              </div>
          </div>
        <span> { varient === 'login' ? 'Not a member? ' : 'Already a member? ' }<a onClick={()=>{
          toggleVarient()
        }} className='text-[#2D9CDB] cursor-pointer' >{ varient === 'login' ? "Register" : "Sign In"}</a></span>
      </div>
    </div>
  )
}

export default Auth
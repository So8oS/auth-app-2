import {useSession} from 'next-auth/react';
import React from 'react'

const Info = () => {
const { data: session } = useSession()
console.log(session)
return (
    <div className='flex flex-col justify-center' >

        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className=''>Account</h1>
            <button className='border border-[#828282] text-[#828282] rounded-xl p-1'>Edit Info</button>
        </div>
        
        <div className="flex flex-col mt-10 md:self-center">
            <div className='flex justify-between border-b items-center p-4 md:gap-10 '>
                <h1>Image</h1>
                <img className='w-16 h-16 rounded-xl' src={session?.user?.image} alt="" />
            </div>

            <div className='flex justify-between  border-b p-4  md:gap-52'>
                <h1>Name</h1>
                <h1>{session?.user?.name}</h1>
            </div>

            <div className='flex justify-between  border-b p-4  md:gap-52'>
                <h1>Bio</h1>
                <h1>some shit</h1>
            </div>

            <div className='flex justify-between  border-b p-4  md:gap-52'>
                <h1>Email</h1>
                <h1>{session?.user?.email}</h1>
            </div>

            <div className='flex justify-between  border-b p-4 md:gap-52 '>
                <h1>Password</h1>
                <h1>********</h1>
            </div>


        </div>
    </div>
)
}

export default Info
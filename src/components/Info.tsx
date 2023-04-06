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
                <h1 className='font-bold'>Image</h1>
                {
                    session.user.image ? (
                        <img className='w-16 h-16 rounded-xl' src={session.user.image} alt="" />
                    ) : (
                        //backround image tailwind on div
                        <div className='bg-green-500 w-16 h-16 rounded-xl flex justify-center items-center'>
                            <h1 className='text-4xl font-bold text-white drop-shadow-2xl ' >{session?.user?.name?.charAt(0).toUpperCase()}</h1>
                        </div>
                    )
                }
                
            </div>

            <div className='flex justify-between  border-b p-4  md:gap-52'>
                <h1 className='font-bold'>Name</h1>
                <h1>{session?.user?.name}</h1>
            </div>

            <div className='flex justify-between  border-b p-4  md:gap-52'>
                <h1 className='font-bold'>Bio</h1>
                <h1>some shit</h1>
            </div>

            <div className='flex justify-between  border-b p-4  md:gap-52'>
                <h1 className='font-bold'>Email</h1>
                <h1>{session?.user?.email}</h1>
            </div>

            <div className='flex justify-between  border-b p-4 md:gap-52 '>
                <h1 className='font-bold'>Password</h1>
                <h1>********</h1>
            </div>


        </div>
    </div>
)
}

export default Info
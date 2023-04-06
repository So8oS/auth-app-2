import React, {useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { IoMdArrowDropdown } from 'react-icons/io'
import Link from 'next/link';
import { RiLogoutBoxRLine } from 'react-icons/ri'



const Navbar = () => {
    const { data: session } = useSession();
    const [open, setOpen] =useState(false)
    // const dropdownRef = useRef<HTMLDivElement>(null);
    
    // useEffect(() => {
    //     // const handler = (event: { target: any }) => {
    //     //   //@ts-ignore
    //     //   if (!dropdownRef.current.contains(event.target)) {
    //     //     setOpen(false)
    //     //   }
    //     // }
      
    //     // document.addEventListener('mousedown', handler)
      
    //     // return () => {
    //     //   document.removeEventListener('mousedown', handler)
    //     // }
    
    //   }, [])




  return (
    <div className='flex justify-between mb-12  md:mb-24' >
        <img className="w-32 cursor-pointer" src="./devchallenges.svg" alt="" onClick={() => {!session ? window.location.href = '/' : null}}/>
        {session ?  (
        <div className='flex justify-center items-center gap-1 md:gap-3' >
            <img className="w-7 rounded-sm" src={session.user?.image} alt="Logo" />
            <h1>{session?.user?.name}</h1>
            <IoMdArrowDropdown   className='cursor-pointer' onClick={()=>{
                setOpen(!open)
                }}/>
            {open && (
                    <div 
                    // ref={dropdownRef}
                    className='absolute top-10 right-4 bg-white rounded-3xl flex flex-col  justify-start p-4 overflow-scroll scroll- gap-4  ' >
                        <Link className='font-medium  px-4 py-2 hover:bg-[#E3E1DC] p-2 cursor-pointer rounded-xl'  href={'/account'}
                         onClick={() => {setOpen(false)}}
                        >Account</Link>
                        {/* <Link className='font-medium text-lg px-4 py-2 hover:bg-[#E3E1DC] p-2 cursor-pointer rounded-xl'  href={''} >Group Chat</Link> */}
                        <div className="flex justify-center items-center gap-3 text-red-500">
                            <RiLogoutBoxRLine/>
                            <button className='' onClick={() => {signOut(
                                {
                                    callbackUrl: 'http://localhost:3000/',
                                }
                            );}}>Sign out</button>
                        </div>
                    </div>
                )}
        </div>
            ):(
        <div>
            <h1>Not signed in</h1>
        </div>)}

    </div>
  )
}

export default Navbar
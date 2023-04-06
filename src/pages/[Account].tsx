import React from 'react'
import { useSession } from 'next-auth/react'
import Info from '../components/Info'


const Account = () => {
const { data: session } = useSession()
  return (
    <div>
        {session ?  (
        <Info/>
            ):(
        <div>
            <h1>Not signed in</h1>
        </div>)}
    </div>
  )
}

export default Account
'use client'

import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";



const User = () => {
  const router = useRouter()
  return (
    <div onClick={() => router.push('/login')} className="hidden md:flex">
      <FaUser size={27}/>
    </div>
  )
}

export default User

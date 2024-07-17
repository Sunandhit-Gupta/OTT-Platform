"use client"

import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const BackBar = ()=>{
    const router = useRouter();
    return <>
    <div className='fixed top-0 left-0 w-screen z-10 bg-[#18181B]'>
        <nav className='p-4'>
            <div>
            <FaArrowLeft  onClick={()=>router.push("/pages/home")} className= 'text-white cursor-pointer h-8 w-8 rounded-full p-1 hover:bg-neutral-300 hover:text-black transition delay-75' />
            </div>
    </nav>
    </div>
    </>
}


export default BackBar;
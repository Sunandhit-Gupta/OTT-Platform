"use client"
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa6";
import MovieList from './MovieList';
import Footer from './Footer';
const WatchPage = ({movieTitle,queriedTrailer,Description,recommendations,ratings})=>{

    const router = useRouter();
    return(
        <> <div className=''>
        <div className=" h-100 w-screen bg-black flex flex-col relative no-scrollbar items-center">

<nav className="fixed
w-full
p-4
z-10
flex
flex-row
items-center
gap-8
bg-black
bg-opacity-70
">

   <FaArrowLeft  onClick={()=>router.push("/pages/home")} className= 'text-white cursor-pointer h-8 w-8 rounded-full p-1 hover:bg-neutral-300 hover:text-black transition delay-75' />

   <div className='text-lime-400'>
    Watching: <span className='text-white'> {movieTitle}</span>
   </div>
</nav>
<div className='h-100 lg:h-[400px]  w-[98vw] p-5 mt-20 bg-neutral-700 relative '>
<iframe className='w-full h-full'  src= {queriedTrailer} width="100" height="100" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
</div>
<div className='text-white w-[98vw]'>
    <div className='w-full flex flex-row justify-between p-5 text-white text-md md:text-xl lg:text-2xl font-semibold mt-0'>
        <h2 >Description:</h2>
        <h2 className='text-red-500'>Rating: <span className='text-neutral-300'>{ratings}</span></h2>
    </div>
    <p className='text-white p-5 bg-[#0C6BA6] rounded-md '>
        {Description}
    </p>
</div>

<div className="relative ">
<MovieList title="Recommended" data= {recommendations}/>
</div>
<Footer/>
</div>
</>
    )
}

export default WatchPage;
"use client"
import { useRouter } from 'next/navigation';
import { FaRegHeart } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Footer from './Footer';
import MovieList from './MovieList';
import { useEffect, useState } from 'react';
import { addToFavourites, deleteFavourites, fetchFavourites } from '@/lib/fetchFavourites';
import { useSession } from "@/src/app/contexts/SessionContext";


const WatchPage = ({movieTitle,queriedTrailer,Description,recommendations,ratings,movieId})=>{
    const router = useRouter();
    const [favourite, setFavourite] = useState(false);
    const session =  useSession();
    useEffect(() => {
        const fetchFavouritesData = async () => {
            try {
                const res = await fetchFavourites(session);
                const index = res.findIndex(elem => elem === movieId);
                setFavourite(index !== -1);
            } catch (error) {
                console.error('Error fetching favourites:', error);
            }
        };

        fetchFavouritesData();
    }, []);

    const handleFav = ()=>{
        try{
            const res = deleteFavourites(session,movieId);
        }
        catch(err){
            console.log(err);
            throw new Error(err);
        }
        setFavourite(false);
    }

    const handleNotFav = ()=>{
        try{
            const res = addToFavourites(session,movieId)
        }catch(err){
            console.log(err);
            throw new Error(err);
        }
        setFavourite(true);
    }


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
<div className='h-100 lg:h-[400px]  w-[98vw] p-5 mt-20 bg-black relative '>
<iframe className='w-full h-full'  src= {queriedTrailer} width="100" height="100" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
</div>
<div className='text-white w-[98vw]'>
    <div className='w-full flex flex-row justify-between p-5 text-white text-md md:text-xl lg:text-2xl font-semibold mt-0'>
        <h2 >Description:</h2>
        <div className='flex flex-row items-center gap-[5vw]'>
        { favourite? <FaHeart className='hover:cursor-pointer' color='red' onClick={handleFav}/> : <FaRegHeart className='hover:cursor-pointer' onClick={handleNotFav}/>}
        <h2 className='text-red-500'>Rating: <span className='text-neutral-300'>{ratings}</span></h2>
        </div>
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
"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsFillPlayFill } from "react-icons/bs";
const MovieCard = ({data})=>{

    const router = useRouter();
    const releaseYear = data.release_date.substring(0,4);
    const movieTrailerUrl = data.trailer_urls[0];
    const overview = data.overview;
    const movieId = data.id;
    const movie_ratings = data.vote_average;
    const encodeRatings = encodeURIComponent(movie_ratings);
    let movieTrailerEmbedUrl = "";
    let encodedMovieTrailerEmbedUrl = "";
    if(movieTrailerUrl){
        movieTrailerEmbedUrl  = "https://www.youtube.com/embed/" + movieTrailerUrl.split("watch?v=")[1];
        encodedMovieTrailerEmbedUrl = encodeURIComponent(movieTrailerEmbedUrl);
    }
    const movieTrailerKey = movieTrailerUrl.split("watch?v=")[1];
    const encodedMovieTrailerKey = encodeURIComponent(movieTrailerKey);
    const movieTitle = data.title;
    let poster_url = data.poster_url;
    if(!poster_url) poster_url = data.backdrop_url;

    return (
        <div className="group bg-zinc-900 col-span relative h-[12vw] lg:h-[12vw] md:h-[30vw]">

            <Image className="cursor-pointer rounded-md object-cover transition
            duration
            shadow-xl
            grounp-hover:opacity-90
            sm:group-hover:opacity-0
            delay-100
            w-full
            lg:h-[12vw]
            md:h-[30vw]"
             src={poster_url} width={100} height={100} alt={data.title}/>

             <div className="opacity-0
             absolute
             top-0
             transition
             duration-200
             z-10
             invisible
             sm:visible
             delay-100
             w-full
             scale-0
             group-hover:scale-110
             group-hover:-translate-y-[3vw]
             group-hover:translate-x-[1vw]
             group-hover:opacity-100">

                <Image className="cursor-pointer
                object-cover
                transition
                duration
                shadow-xl
                rounded-t-md
                w-full
                h-[12vw]"
                src={poster_url} width={100} height={100} alt={data.title}/>
                <div
                className="z-10 bg-zinc-800
                p-2
                lg:p-4
                absolute
                w-full
                transition
                shadow-md
                rounded-b-md">
                    <div className="flex flex-row items-center gap-3">
                        <div className="cursor-pointer
                        w-6
                        h-6
                        lg:w-10
                        lg:h-10
                        bg-white
                        rounded-full
                        flex
                        justify-center
                        transition
                        items-center
                        hover:bg-neutral-300"
                        onClick={()=>router.push(`/pages/watch/${movieTitle}/${encodedMovieTrailerKey}/${overview}/${movieId}/${encodeRatings}`)}
                        >
                            <BsFillPlayFill size={30}/>
                        </div>
                    </div>

                    <p className="text-green-400 font-semibold mt-2 text-xs">
                    Year: <span className="text-white text-10px">{releaseYear}</span>
                    </p>
                    <div className="flex flex-row mt-2 gap-2 items-center">
                        <p className="text-red-400 text-[10px] lg:text-sm">
                            Rating: <span className="text-white"> {movie_ratings} </span>
                        </p>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default MovieCard;
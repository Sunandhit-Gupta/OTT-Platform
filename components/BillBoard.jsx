"use client"
import "@/components/BillBoard.css";
import {AiOutlineInfoCircle} from 'react-icons/ai'
import PlayButton from "./PlayButton";
const BillBoard = ({trailerUrl , posterUrl ,movieTitle, movieOverview, movieId, movieRatings}) => {

  const iFrameStyle = "opacity-80 relative z-[-10] w-full h-[56.25vw] object-cover brightness-[30%] bg-transparent ]";
  const divStyle = "yt-embedder relative h-[56.25vw] ";


  return (
    <>
      <div className={divStyle}>

        {trailerUrl && (
          <iframe className={iFrameStyle}  width="560" height="315" src={trailerUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        )}

        </div>

        <div className="absolute top-[30%] md:top-[30%] ml-4 md:ml-16 ">
          <div className=" w-[100%] md:w-[100%] lg:w-[60%] overflow-y-hidden">
          <p className="text-white text-1xl md:text-1xl h-full w-full lg:text-4xl font-bold drop-shadow-xl ">
            {movieTitle}
          </p>
          <p className="text-white text-[8px] h-[10%] lg:h-[20%] md:h-[10%] md:text-lg mt-3 md:mt-8  w-full overflow-hidden ">
            {movieOverview}
          </p>
          </div>
          <div className="flex flex-row items-center mt-2 md:mt-2 gap-3">
          { trailerUrl && <PlayButton trailerUrl={trailerUrl} movieTitle = {movieTitle} overview = {movieOverview} movieId ={movieId} movieRatings={movieRatings}/>}
            <button className="
            bg-white
            text-white
            bg-opacity-30
            rounded-md
            py-1 md:py-2
            px-2 md:px-4
            w-auto
            text-xs lg:text-lg
            fondt-semibold
            flex
            flex-row
            items-center
            hover:bg-opacity-20
            transition">
              <AiOutlineInfoCircle className="mr-1"/>
              More Info
            </button>
          </div>
        </div>
      </>
  );
};

export default BillBoard;

import { useRouter } from "next/navigation";

const SearchTitleCard = ({data})=>{

    const router = useRouter();
    const movieTrailerUrl = data.trailer_urls[0];
    const overview = data.overview;
    const movieId = data.id;
    const movie_ratings = data.vote_average;
    const encodeRatings = encodeURIComponent(movie_ratings);
    let movieTrailerEmbedUrl = "";
    let encodedMovieTrailerEmbedUrl = "";
    let movieTrailerKey = "noKey";
    if(movieTrailerUrl){
        movieTrailerEmbedUrl  = "https://www.youtube.com/embed/" + movieTrailerUrl.split("watch?v=")[1];
        encodedMovieTrailerEmbedUrl = encodeURIComponent(movieTrailerEmbedUrl);
        movieTrailerKey = movieTrailerUrl.split("watch?v=")[1];
    }
    const encodedMovieKey = encodeURIComponent(movieTrailerKey);
    const movieTitle = data.title;

    const handleClick = ()=>{
        return router.push(`/pages/watch/${movieTitle}/${encodedMovieKey}/${overview}/${movieId}/${encodeRatings}`);
    }

    if(!data) return null;




    return <>
    <div className=" font-sans border-2 p-1  overflow-x-scroll border-[#737373] bg-[#737373] hover:bg-[#a8a4a4] hover:cursor-pointer overflow-y-hidden no-scrollbar text-nowrap text-[#e5dede]" onClick={handleClick}>
            {movieTitle}
    </div>
    </>
};

export default SearchTitleCard;
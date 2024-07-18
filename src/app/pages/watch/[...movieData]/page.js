
import WatchPage from "@/components/WatchPage";
import fetchRecommend from "@/lib/fetchRecommendation";
import fetchMovieData from "@/lib/fetchMovieData";

export default async function watch({params} ){

    const movieId = decodeURIComponent(params.movieData[3]);
    const no_of_recommendations = 30;
    let recommendations;
    try{
        recommendations = await fetchRecommend(movieId,no_of_recommendations);
    }
    catch(err){
        console.log(err);
        recommendations = [];
    }

    const rec_movieData = await fetchMovieData(recommendations);
    const movieTitle =  decodeURIComponent(params.movieData[0]);
    const trailerKey = decodeURIComponent(params.movieData[1]);
    const Description = decodeURIComponent(params.movieData[2]);
    const movie_ratings = decodeURIComponent(params.movieData[4]);
    const trailerUrl = "https://www.youtube.com/embed/" + trailerKey;
    const queriedTrailer = trailerUrl+"?&rel=0&modestbranding=1&autoplay=1&loop=1&mute=1&color=white&playsinline=1&enablejsapi=1&t=10s";

    return (
        <div className="">
        <WatchPage  movieTitle={movieTitle} queriedTrailer={queriedTrailer} recommendations={rec_movieData} Description={Description} ratings={movie_ratings} movieId={movieId}/>
        </div>
    )
}

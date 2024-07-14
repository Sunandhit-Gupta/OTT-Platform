import BillBoard from "@/components/BillBoard";
import Footer from "@/components/Footer";
import MovieList from "@/components/MovieList";
import NavBar from "@/components/NavBar";
import fetchGenre from "@/lib/fetchGenre";
import fetchMovieData from "@/lib/fetchMovieData";
import fetchRecommend from "@/lib/fetchRecommendation";
import prismadb from "@/lib/prismadb";

export default async function HomePage() {


  const fetchRandomMovie = async () => {
    try {
      const movieCount = await prismadb.movie.count();
      const randomIndex = Math.floor(Math.random() * movieCount);

      const RandomMovieData = await prismadb.movie.findMany({
        take: 1,
        skip: randomIndex,
      });

      return RandomMovieData;
    } catch (error) {
      console.error('Error fetching random movie:', error);
      return null;
    }
  };



  const data = await fetchRandomMovie();
  let trailerEmbedUrl = '';
  let posterUrl = '';
  let movie_title = data[0].title;
  let movie_overview = data[0].overview;
  let movie_id =data[0].id;
  const movieRatings = data[0].vote_average;
  if (data && data.length > 0 && data[0].trailer_urls && data[0].trailer_urls.length > 0) {
  let youtubeUrl = data[0].trailer_urls[0];
  posterUrl = data[0].poster_url;
  trailerEmbedUrl = "https://www.youtube.com/embed/" + youtubeUrl.split("watch?v=")[1] + "?&rel=0&controls=0&modestbranding=1&autoplay=1&loop=1&mute=1&color=white&playsinline=1&enablejsapi=1&t=10s&playlist="+youtubeUrl.split("watch?v=")[1];

  } else {
    console.error('Invalid data structure:', data);
    throw new Error("Invalid Data");

  }

const no_of_recommendations = 10;
const movie_recommended = await fetchRecommend(movie_id,no_of_recommendations);
const rec_movieData = await fetchMovieData(movie_recommended);
const actionMovies = await fetchGenre('Action',10);
const animationMovies = await fetchGenre('Animation',10,10);
const horrorMovies = await fetchGenre('Horror',10);
const scienceFictionMovies = await fetchGenre('Science Fiction',10);
const documentryMovies = await fetchGenre('Documentary',10,10);
  return (<>
    <div className="relative flex flex-col gap-0  justify-center no-scrollbar">
      <NavBar />
      
      <div className="w-full h-100 relative">
      <BillBoard movieOverview = {movie_overview} movieTitle = {movie_title} trailerUrl={trailerEmbedUrl} posterUrl={posterUrl} movieId={movie_id} movieRatings={movieRatings}/>
      </div>
      <div className="relative ">
        <MovieList title="Trending Now" data= {rec_movieData}/>
      </div>
      <div className="relative ">
     <MovieList title="Action" data= {actionMovies}/>
      </div>
      <div className="relative ">
     <MovieList title="Animation" data= {animationMovies}/>
      </div>
      <div className="relative ">
     <MovieList title="Horror" data= {horrorMovies}/>
      </div>
      <div className="relative ">
     <MovieList title="Science Fiction" data= {scienceFictionMovies}/>
      </div>
      <div className="relative ">
     <MovieList title="Documentary" data= {documentryMovies}/>
      </div>
    </div>
    <Footer/>
    </>
  );
}

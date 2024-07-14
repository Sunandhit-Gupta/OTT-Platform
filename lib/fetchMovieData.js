import axios from "axios";
import prismadb from "./prismadb";

export const fetchMovieData = async (list)=>{

const movieIds = list.map(movie => `${movie.id}`); //converting the Int to String because in databse id is stored as String;

try {
    const movies = await prismadb.movie.findMany({
        where: {
            id: {
                in: movieIds
            }
        }
    });
    return movies;
} catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
}

}

export default fetchMovieData;
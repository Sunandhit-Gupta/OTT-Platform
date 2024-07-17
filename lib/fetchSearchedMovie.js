import axios from "axios";

const fetchSearchedMovie = async (query)=>{
    const url = "/api/fetchSearchedMovies";
    const res = await axios.post(url,{
        query:query
    });
    console.log("response", res.data);
    return res.data;
};

export default fetchSearchedMovie;
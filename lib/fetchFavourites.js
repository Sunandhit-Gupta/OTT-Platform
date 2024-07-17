import axios from "axios";

const fetchFavourites = async(session)=>{

    const favourites = await axios.post('http://localhost:3000/api/getFavourites',{
        session:session,
    });

    return favourites.data;
}

const deleteFavourites = async(session,movie_id)=>{

    const res = await axios.delete('http://localhost:3000/api/favourites',{
        data: {
            session: session,
            movie_id: movie_id,
        },
    });

    return res.data;
}


const addToFavourites = async(session,movie_id)=>{
    const res = await axios.post('http://localhost:3000/api/favourites',{
        session:session,
        movie_id:movie_id,
    });

    return res.data;
}

export {fetchFavourites, addToFavourites,deleteFavourites};
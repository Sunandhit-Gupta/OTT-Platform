import axios from "axios";

const fetchFavourites = async(session)=>{

    const favourites = await axios.post(`${process.env.NEXT_SITE_URL}/api/getFavourites`,{
        session:session,
    });

    return favourites.data;
}

const deleteFavourites = async(session,movie_id)=>{

    const res = await axios.delete(`${process.env.NEXT_SITE_URL}/api/favourites`,{
        data: {
            session: session,
            movie_id: movie_id,
        },
    });

    return res.data;
}


const addToFavourites = async(session,movie_id)=>{
    const res = await axios.post(`${process.env.NEXT_SITE_URL}/api/favourites`,{
        session:session,
        movie_id:movie_id,
    });

    return res.data;
}

export {fetchFavourites, addToFavourites,deleteFavourites};
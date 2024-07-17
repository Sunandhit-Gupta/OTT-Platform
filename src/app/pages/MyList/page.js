import { getServerSession } from "next-auth";
import options from "../../api/auth/[...nextauth]/route";
import { fetchFavourites } from "@/lib/fetchFavourites";
import FetchFavouriteData from "@/lib/fetchFavouriteData";
import BackBar from "@/components/BackBar";
import MovieList from "@/components/MovieList";



const MyList = async ()=>{
    const session = await getServerSession(options);

    const favourites = await fetchFavourites(session);

    const favData = await FetchFavouriteData(favourites);


    return <>
    <div>
        <BackBar/>
        <div className="mt-[80px]">
            <MovieList title={"My Favourites"} data={favData}/>
        </div>
    </div>
    </>
}
export default MyList;
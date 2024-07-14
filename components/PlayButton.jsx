
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter} from "next/navigation";
const PlayButton = ({trailerUrl,movieTitle,overview,movieId, movieRatings})=>{

    const router = useRouter();
    const trailer_url_without_query = trailerUrl.substring(0,41);
    const encodedURL = encodeURIComponent(trailer_url_without_query);
    const encodeOverview = encodeURIComponent(overview);
    const encodeRatings = encodeURIComponent(movieRatings);
    return (
        <button
        onClick={()=>router.push(`/pages/watch/${movieTitle}/${encodedURL}/${encodeOverview}/${movieId}/${encodeRatings}`)}
        className="bg-white
        rounded-md
        py-1 md:py-2
        px-2 md:px-4
        w-auto
        text-xs  lg:text-lg
        cursor-pointer
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition

        ">
            <BsFillPlayFill size={25}/>
            Play
        </button>
    )
}

export default PlayButton;
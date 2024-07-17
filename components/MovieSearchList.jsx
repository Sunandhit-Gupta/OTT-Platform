import SearchTitleCard from "./SearchTitleCard";


const MovieSearchList = ({data}) =>{

    if(!data) return null;
    return <>
    <div className="absolute mt-6 ">

    <div className="relative bg-[#737373] bg-flex flex-col max-h-[30vh] p-1  w-[30vw]  text-sm lg:text-sm lg:w-[12vw] px-2  overflow-scroll no-scrollbar rounded-b-md">
    {
        data.map((movie)=>(
            <SearchTitleCard key={movie.id} data={movie}/>
        ))

    }
    </div>
    </div>
    </>
};

export default MovieSearchList;
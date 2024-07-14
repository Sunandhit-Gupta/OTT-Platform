import MovieCard from "./MovieCard";


export  const MovieList = ({title, data})=>{

    // if there is no data implement that conditin  too:
    if(!data){
        return null;
    }

    return (<>
    <div className=" px-4 md:px-12 space-y-8 w-screen ">
        <div className="w-100 mt-10 mb-10">
            <p className="text-white text-md font-semibold">
                {title}
            </p>
            <div className="grid grid-cols-5 lg:grid-cols-10 gap-2 gap-y-20  lg:gap-y-5">
                { data.map((movie)=>(
                    <MovieCard key={movie.id} data={movie}/>
                    ))}
            </div>
        </div>
    </div>
    </>)
}

export default  MovieList;
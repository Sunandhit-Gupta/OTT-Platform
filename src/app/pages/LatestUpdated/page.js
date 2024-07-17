import BackBar from "@/components/BackBar";
import MovieList from "@/components/MovieList";
import prismadb from "@/lib/prismadb";


const fetchLatestData= async()=>{


    try{
    const data = await prismadb.movie.findMany({
        orderBy:{
            last_update: 'desc',
        },
        skip:0,
        take:30,
    });

    return data;
}catch(err){
    console.log(err);
    throw new Error(err);
}

}


const LastestUpdated = async()=>{

    const data =  await fetchLatestData();

    return <>
    <div>
        <div><BackBar/></div>
        <div className="mt-[80px]"> <MovieList title={"Recently Updated"} data={data}/> </div>
    </div>
    </>
}

export default LastestUpdated;
import prismadb from "./prismadb";


const FetchFavouriteData = async(idList)=>{

    try{
    const res = await prismadb.movie.findMany({
        where:{
            id:{
                in: idList,
            }
        }
    });
    return res;
    }
    catch(err){
        console.log(err);
        throw new Error(err);
    }

}

export default FetchFavouriteData;
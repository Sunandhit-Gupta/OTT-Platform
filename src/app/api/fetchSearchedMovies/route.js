import prismadb from "@/lib/prismadb";
import { NextResponse } from 'next/server';


const fetchMovies = async(query) =>{

    if(!query) return [];
    try{
    let moviesReturned = await prismadb.movie.findMany({
        where:{
            title: {
                contains: query,
            }
        }
    });

    if(moviesReturned.length >8) moviesReturned = moviesReturned.slice(0,7);
    return moviesReturned;
    }
    catch (err){
        console.log(err);
        throw new Error(err);
    }
}

export async function POST (req){
    try{
       const body = await req.json();
       const {query} = body;
       const moviesFetched = await fetchMovies(query);

       return NextResponse.json(moviesFetched,{status:200});
    }
    catch(err){
        console.log(err);
        return NextResponse.json({error: err},{status:400});
    }
}


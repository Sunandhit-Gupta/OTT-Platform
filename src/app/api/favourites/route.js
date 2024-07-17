
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";




const POST = async (req)=>{
    const body = await req.json();
    const {session,movie_id} = body;

    if(!session){
        return NextResponse.json("Not Signed In", {status:400});
    }
    const currentUser = session.user;

    try{
    const user = await prismadb.user.findUnique({
        where:{
            email: currentUser.email,
        }
    });

    const favourites = user.favouriteIds;
if(favourites){
    const FindIndex = favourites.findIndex(elem=>elem == movie_id);

    if(FindIndex != -1) return NextResponse.json("Already Present in Favourites",{status:200});

    const response = await prismadb.user.update({
        where:{
            email: currentUser.email,
        },
        data:{
            favouriteIds:{
                push:String(movie_id),
            }
        }
    });

    return NextResponse.json(response,{status:200});
}
else
{
    const response = await prismadb.user.update({
        where:{
            email: currentUser.email,
        },
        data:{
            favouriteIds:{
                set:[String(movie_id)],
            }
        }
    });
    return NextResponse.json(response,{status:200});
}

}catch(err){
    console.log(err);
    NextResponse.json(err,{status:400});
}
}

const DELETE = async(req)=>{

    const body = await req.json();

    console.log("Bodyie",body);
    const {session, movie_id} = body;

    if(!session){
        return NextResponse.json("Not Signed In", {status:400});
    }
    const currentUser = session.user;

    try{
        const user = await prismadb.user.findUnique({
            where:{
                email: currentUser.email,
            }
        });

        let updatedFavouriteIds = user.favouriteIds;
        const indexMovie = updatedFavouriteIds.findIndex(elem=> elem == String(movie_id));
        if(indexMovie == -1) return NextResponse.json("Already Not Present", {status: 200});

        updatedFavouriteIds.splice(indexMovie,1);

        const updatedUser = await prismadb.user.update({
            where:{
                email: currentUser.email,
            },
            data:{
                favouriteIds:{
                    set: updatedFavouriteIds,
                },
            }
        });

        return NextResponse.json(updatedUser,{status:200});
    }
    catch(err){
        console.log(err);
        NextResponse.json(err,{status:400});
    }
}

export {POST,DELETE};
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

  export async function POST(req){
    const body  = await req.json();

    const {session} = body;

    
    if(!session){
        return NextResponse.json("Not Signed In", {status:410});
    }
    const currentUser = session.user;


    try{
        const user = await prismadb.user.findUnique({
            where:{
                email: currentUser.email,
            }
        });

   if(!user) NextResponse.json("User Not Found",{status:404});

   return NextResponse.json(user.favouriteIds,{status:200});
    }
    catch(err){
        console.log(err);
        NextResponse.json(err,{status:400});
    }
}


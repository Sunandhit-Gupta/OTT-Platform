import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

const POST = async(req)=>{

    const body = await req.json();
    const {id,budget,genre,original_language,title,vote_average,release_date,revenue,overview,cast,crew,poster_url,backdrop_url,trailer_urls} = body;

    console.log("ide:", id);
    if(id&&budget&&genre&&original_language&&title&&vote_average&&release_date&&revenue&&overview&&cast&&crew&&poster_url&&backdrop_url&&trailer_urls){

        try{
            const movie_object = {
                "id":id,
                "budget":budget,
                "genre":genre,
                "original_language":original_language,
                "title":title,
                "vote_average":vote_average,
                "release_date":release_date,
                "revenue":revenue,
                "overview":overview,
                "cast":cast,
                "crew":crew,
                "poster_url":poster_url,
                "backdrop_url":backdrop_url,
                "trailer_urls":trailer_urls,
            }

            const res = await prismadb.movie.create({
                data:movie_object
            });

            return NextResponse.json(res,{status:200});
        }catch(err){
            console.log(err);
            return NextResponse.json(err,{status:400});
        }
    }
    else
    {
        console.log("Some Values are Empty. Provide whole object");
       return NextResponse.json("Some Values are Empty. Provide whole object", {status:400});
    }
}

export { POST };

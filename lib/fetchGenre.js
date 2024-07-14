import prismadb from "./prismadb";

async function fetchGenre(genre,limit,randomIndex=-1){

    try {

// These are all the Genres present in DB: 'Thriller', 'Animation', 'Action', 'Mystery', 'Music', 'Western', 'Science Fiction', 'Foreign', 'Crime', 'Fantasy', 'Documentary', 'Family', 'History', 'Comedy', 'TV Movie', 'Horror', 'Drama', 'Romance', 'War', 'Adventure'
        const genreName = genre; // Replace 'Action' with your desired genre

if(randomIndex == -1){
    const movieCount = await prismadb.movie.count();
    randomIndex = Math.floor(Math.random() * movieCount/limit);
}
else
{
    randomIndex = Math.floor(Math.random() *limit *10);
}
        const movies = await prismadb.movie.aggregateRaw({
            pipeline: [
                {
                    $match: {
                        'genre.name': genreName
                    }
                },
                {
                    $skip:randomIndex
                },
                {
                    $limit: limit
                }
            ]
        });

        return movies;


    } catch (err) {
        console.log(err);
        throw new Error(err);
    }


}

export default fetchGenre;
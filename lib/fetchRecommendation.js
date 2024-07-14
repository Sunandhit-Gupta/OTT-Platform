import axios from "axios";

export default async  function  fetchRecommend(movie_id, quantity=5)  {
    const url = "https://recommend-8fnc.onrender.com/recommend";

    movie_id = parseInt(movie_id,10);   //converting string to Int;
    quantity = parseInt(quantity,10);   //converting string to Int;

    const res = await axios.post(url,{
        'tmdb_id' : movie_id,
        'quantity' : quantity
    },
    {
        headers: {
          'Content-Type': 'application/json'
        }
      }
);

return res.data.recommendations;
}

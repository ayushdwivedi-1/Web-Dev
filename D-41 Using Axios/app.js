// axios
//     .get("https://swapi.dev/api/people/1/").then((res) => {
//         console.log("RESPONSE: ",res);
//     })
//     .catch((e) =>{
//         console.log("ERROR!",e)
//     })

const getStarWars = async (id) => {
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }
    catch(e){
        console.log("ERROR",e)
    }
};
getStarWars(2);
getStarWars(9);

const dadJokes = async () => {
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com',config)
    console.log(res.data.joke)
}
dadJokes()

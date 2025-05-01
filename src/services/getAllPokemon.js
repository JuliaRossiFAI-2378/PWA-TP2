const getAllPokemon = async() =>{
    try{
        const pokeResult = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
        const result = await pokeResult.json();
        return result;
    }catch(error){
        console.log(error);
        return null;
    }
}
export default getAllPokemon;
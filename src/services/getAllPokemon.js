const getAllPokemon = async(limite, offset) =>{
    try{
        const pokeResult = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=${offset}`);
        const result = await pokeResult.json();
        return result;
    }catch(error){
        console.log(error);
        return null;
    }
}
export default getAllPokemon;
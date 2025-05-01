const getPokemon = async({id}) =>{
    try{
        const pokeResult = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const result = await pokeResult.json();
        return result;
    }catch(error){
        console.log(error);
        return null;
    }
}
export default getPokemon;
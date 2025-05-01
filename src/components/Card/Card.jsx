import { useState, useEffect } from "react";
import loading from '../../assets/loading.gif'
import sad from '../../assets/sad.jpg'
import favoritono from '../../assets/favoritono.png'
import Button from '../Button/Button.jsx'
import getPokemon from "../../services/getPokemon.js";

const Card = ({pokereferencia}) => {//recibimos obj conteniendo name y url
    const [pokemon, setPokemon] = useState(null);
    const [imagen, setImagen] = useState(true);

    const handleCargaFallida = () => {
        setImagen(false)
    }

    useEffect(()=>{
        getPokemon(pokereferencia.name).then((datos)=>{setPokemon(datos)})
    }, [])



        return(<div className="relative shadow-md w-full md:min-w-xs mx-auto md:mx-2 lg:mx-2 lg:min-w-xs max-w-xs max-h-max border-4 border-gray-700 bg-blue-300 rounded-xl text-lg my-2 transform transition-all duration-200 hover:scale-105 hover:shadow-xl">
            {pokemon ? <img className="w-40 h-40 object-contain min-w-3xs mx-auto m-2" src={pokemon.id <=3 ? pokemon.sprites.other.showdown.front_default : imagen ? pokemon.sprites.other.showdown.front_default+ "?t=" + Math.random() : sad} onError={() => handleCargaFallida()}/>
            : <img className="w-3xs h-3xs mx-auto m-2" src={loading} />
            } 
            {pokemon ? <img className="absolute w-14 h-14 top-0 right-0 m-4 transform transition-all duration-200 rounded-full hover:scale-110" src={favoritono} />
            : ""
            }
            <div className="ml-13">
                <p><span className="font-bold text-gray-700" >Nombre: </span><span>{pokemon ? pokemon.name : "Cargando..."} </span></p>
                <p><span className="font-bold text-gray-700" >Tipo: </span><span>{pokemon ? pokemon.types.length===1 ? pokemon.types[0].type.name : pokemon.types[0].type.name + "/" + pokemon.types[1].type.name : "Cargando..."} </span></p>
                <p><span className="font-bold text-gray-700" >Altura: </span><span>{pokemon ? pokemon.height /10 : "Cargando..."} mts </span></p>
                <p><span className="font-bold text-gray-700" >Peso: </span><span>{pokemon ? pokemon.weight /10 : "Cargando..."}kgs </span></p>
            </div>
            <Button texto={"Mas Información"} estilo={"bg-gray-700 block mx-auto p-2 m-2 rounded-md shadow-md transform transition-all duration-400 hover:bg-yellow-300 hover:text-gray-700 cursor-pointer"+ pokemon?"":" invisible "}  />
        </div>)
    
}

export default Card;
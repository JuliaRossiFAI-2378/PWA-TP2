import { useState, useEffect } from "react";
import loading from '../../assets/loading.gif'
import Button from '../Button/Button.jsx'
import getPokemon from "../../services/getPokemon.js";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import Favorite from "../Favorite/Favorite.jsx";

const Card = ({pokereferencia}) => {//recibimos obj conteniendo name y url
    const [pokemon, setPokemon] = useState(null);
    const [imagen, setImagen] = useState(true);
    const {t} = useTranslation();

    const HandleCargaFallida = () => {
        setImagen(false)
    }

    useEffect(()=>{
        const id = pokereferencia;
        getPokemon({id}).then((datos)=>{setPokemon(datos)})
    }, [])

    return(<div className="relative hover:-translate-y-4 shadow-md w-full md:min-w-xs mx-auto md:mx-2 lg:mx-2 lg:min-w-xs max-w-xs max-h-max border-4 border-gray-700 bg-[rgba(147,197,253,0.8)] rounded-xl text-lg my-2 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-900">
        <div>
            {pokemon ? <img className="w-40 h-40 object-contain min-w-3xs mx-auto m-2" src={pokemon.id <=3 ? imagen ? pokemon.sprites.other.showdown.front_default : t("/sad.svg") : imagen ? pokemon.sprites.other.showdown.front_default+ "?t=" + Math.random() : t("/sad.svg")} onError={() => HandleCargaFallida()}/>
            : <img className="w-3xs h-3xs mx-auto m-2" src={loading} />
            }
            {pokemon ? <Favorite pokeid={pokemon.id}/> : ""}
        </div>
        <div className="ml-13">
            <p><span className="font-bold text-gray-700" >{t("Name")}: </span><span className="text-shadow-lg/20" >{pokemon ? pokemon.name : t("Loading...")} </span></p>
            <p><span className="font-bold text-gray-700" >{t("Type")}: </span><span className="text-shadow-lg/20" >{pokemon ? pokemon.types.length===1 ? t(pokemon.types[0].type.name) : t(pokemon.types[0].type.name) + "/" + t(pokemon.types[1].type.name) : t("Loading...")} </span></p>
            <p><span className="font-bold text-gray-700" >{t("Height")}: </span><span className="text-shadow-lg/20" >{pokemon ? pokemon.height /10+"mts" : t("Loading...")} </span></p>
            <p><span className="font-bold text-gray-700" >{t("Weight")}: </span><span className="text-shadow-lg/20" >{pokemon ? pokemon.weight /10+"kgs" : t("Loading...")} </span></p>
        </div>
        <NavLink to={`/Details/${pokemon ? pokemon.id : '' }`}>
            <Button texto={t("More Info")} estilo={pokemon?"": " invisible "}  />
        </NavLink>
    </div>)
}
export default Card;
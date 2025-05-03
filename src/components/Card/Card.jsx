import { useState, useEffect } from "react";
import loading from '../../assets/loading.gif'
import sad from '../../assets/sad.jpg'
import favoritono from '../../assets/favoritono.png'
import favorito from '../../assets/favorito.png'
import Button from '../Button/Button.jsx'
import getPokemon from "../../services/getPokemon.js";
import { NavLink } from "react-router";
import paths from "../../paths/paths.js";
import { useTranslation } from "react-i18next";

const Card = ({pokereferencia}) => {//recibimos obj conteniendo name y url
    const [pokemon, setPokemon] = useState(null);
    const [imagen, setImagen] = useState(true);
    const [esFavorito, setEsFavorito] = useState(null);
    const [desactivarHover, setDesactivarHover] = useState(false);
    const {t} = useTranslation();

    const HandleCargaFallida = () => {
        setImagen(false)
    }

    const HandleClickFavorito = () => {
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || {};
        if(esFavorito){
            delete favoritos[pokemon.id]
            setEsFavorito(false)
        }else{
            favoritos[pokemon.id] = pokemon.id
            setEsFavorito(true)
        }
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        setDesactivarHover(true);
        setTimeout(() => {//es esto o desactivarlo con mouseenter y leave y no me da el alma para eso
            setDesactivarHover(false);
        }, 600); 
    }

    useEffect(()=>{
        const id = pokereferencia.name;
        getPokemon({id}).then((datos)=>{setPokemon(datos)})
    }, [])




        return(<div className="relative hover:-translate-y-4 shadow-md w-full md:min-w-xs mx-auto md:mx-2 lg:mx-2 lg:min-w-xs max-w-xs max-h-max border-4 border-gray-700 bg-[rgba(147,197,253,0.8)] rounded-xl text-lg my-2 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-900">
            {pokemon ? <img className="w-40 h-40 object-contain min-w-3xs mx-auto m-2" src={pokemon.id <=3 ? pokemon.sprites.other.showdown.front_default : imagen ? pokemon.sprites.other.showdown.front_default+ "?t=" + Math.random() : sad} onError={() => HandleCargaFallida()}/>
            : <img className="w-3xs h-3xs mx-auto m-2" src={loading} />
            } 
            <img onClick={HandleClickFavorito} src={esFavorito ? favorito : favoritono}//perdon queria una animacion bonita perdon
                className={`absolute w-14 h-14 top-0 right-0 m-4 transform transition-all duration-500 rounded-full
                ${esFavorito
                    ? desactivarHover ? ""
                    : "hover:scale-80 hover:rotate-90 hover:brightness-70 hover:saturate-70 hover:translate-y-1"
                    : desactivarHover ? ""
                    : "hover:scale-120 hover:rotate-180 hover:brightness-200 hover:saturate-200"
                }`}
            />
            {pokemon&&esFavorito===null? setEsFavorito(!!JSON.parse(localStorage.getItem("favoritos"))?.[pokemon.id]) : ""}
            <div className="ml-13">
                <p><span className="font-bold text-gray-700" >{t("Name")}: </span><span className="text-shadow-lg/20" >{pokemon ? pokemon.name : t("Loading...")} </span></p>
                <p><span className="font-bold text-gray-700" >{t("Type")}: </span><span className="text-shadow-lg/20" >{pokemon ? pokemon.types.length===1 ? t(pokemon.types[0].type.name) : t(pokemon.types[0].type.name) + "/" + t(pokemon.types[1].type.name) : t("Loading...")} </span></p>
                <p><span className="font-bold text-gray-700" >{t("Height")}: </span><span className="text-shadow-lg/20" >{pokemon ? pokemon.height /10+"mts" : t("Loading...")} </span></p>
                <p><span className="font-bold text-gray-700" >{t("Weight")}: </span><span className="text-shadow-lg/20" >{pokemon ? pokemon.weight /10+"kgs" : t("Loading...")} </span></p>
            </div>
            <NavLink to={`/Details/${pokemon ? pokemon.id : '' }`}>
                <Button texto={t("More Info")} estilo={pokemon?"bg-gray-700 block mx-auto p-2 m-2 rounded-md shadow-md transform transition-all duration-400 hover:bg-yellow-300 hover:text-gray-700 cursor-pointer": "invisible"}  />
            </NavLink>
        </div>)
    
}

export default Card;
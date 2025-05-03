import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Background from "../../components/Background/Background";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import getPokemon from "../../services/getPokemon";
import { useTranslation } from "react-i18next";

const Details = () =>{
    const {id} = useParams();
    const [pokemon, setPokemon] = useState(null)
    const {t} = useTranslation();

    useEffect(()=>{
        getPokemon({id}).then((result)=>{
            setPokemon(result)
        })
    }, [])
    return <div className="min-h-screen flex flex-col">
        <Header />
        <Background />
        <div className="flex-grow flex-row  w-full mx-auto border-x-2 ">
            {pokemon != null ? 
            <>
            <div className="flex justify-center px-10">
                <div className="mx-16 mt-10 basis-96">
                    <div className="mt-4">
                        <p><span className="font-bold text-gray-700" >{t("Name")}: </span><span className="text-shadow-lg/20">{pokemon ? pokemon.name : t("Loading...")} </span></p>
                    </div>
                    <div className="mt-4">
                        <p><span className="font-bold text-gray-700" >{t("Type")}: </span><span className="text-shadow-lg/20">{pokemon ? pokemon.types.length===1 ? t(pokemon.types[0].type.name) : t(pokemon.types[0].type.name) + "/" + t(pokemon.types[1].type.name) : t("Loading...")} </span></p>
                    </div>
                    <div className="mt-4">
                        <p><span className="font-bold text-gray-700" >{t("Height")}: </span><span className="text-shadow-lg/20">{pokemon ? pokemon.height/10 : t("Loading...")}mts </span></p>
                    </div>
                    <div className="mt-4">
                        <p><span className="font-bold text-gray-700" >{t("Weight")}: </span><span className="text-shadow-lg/20">{pokemon ? pokemon.weight/10 : t("Loading...")}kgs </span></p>
                    </div>
                    <div className="mt-4">
                        <p><span className="font-bold text-gray-700" >{t("Abilities")}: </span><span className="text-shadow-lg/20">{pokemon ? pokemon.abilities.length===1 ? t(pokemon.abilities[0].ability.name) : pokemon.abilities[1].is_hidden === true ? t(pokemon.abilities[0].ability.name) : t(pokemon.abilities[0].ability.name) + " / " + t(pokemon.abilities[1].ability.name) : t("Loading...")} </span></p>
                    </div>
                    <div className="mt-4">
                        <p><span className="font-bold text-gray-700" >{t("Hidden Ability")}: </span><span className="text-shadow-lg/20">{pokemon ? pokemon.abilities.length>2 && pokemon.abilities[2].is_hidden === true ? t(pokemon.abilities[2].ability.name) : pokemon.abilities.length>1 ? pokemon.abilities[1].is_hidden === true ? t(pokemon.abilities[1].ability.name) : t("none") : t("none") : t("Loading...")} </span></p>
                    </div>
                </div>
                <div className="mt-10 relative bg-gray-700 w-full md:min-w-xs mx-auto md:mx-2 lg:mx-2 lg:min-w-xs max-w-xs max-h-max shadow-lg shadow-sky-900 rounded-xl text-lg my-2">
                    <img className="w-64 h-64 p-3" src={pokemon.sprites.other.home.front_default} />
                    <img className="absolute bottom-0 right-0 p-3" src={pokemon.sprites.other.showdown.front_default} />
                </div>
            </div>
            <div className="mx-80 py-1 mt-10 flex justify-evenly content-center shadow-lg shadow-sky-900 mb-4 bg-gray-700 rounded-md">                                                          
                <div className="flex-col my- flex">
                    <div className="flex-row text-blue-400 my-1">{t("Health Points")}:</div>
                    <div className="flex-row text-blue-400 my-1">{t("Attack")}:</div>
                    <div className="flex-row text-blue-400 my-1">{t("Defense")}:</div>
                    <div className="flex-row text-blue-400 my-1">{t("Special Attack")}:</div>
                    <div className="flex-row text-blue-400 my-1">{t("Special Defense")}:</div>
                    <div className="flex-row text-blue-400 my-1">{t("Speed")}:</div>  
                </div>
                <div className="flex-col flex">
                    <div className="flex-row my-1">
                        <span className={`mx-4 border-1 border-green-500 bg-green-500 rounded-md`} style={{paddingInline:`${pokemon.stats[0].base_stat}px`}}></span>
                    </div>        
                    <div className="flex-row my-1">
                        <span className={`mx-4 border-1 border-red-500 bg-red-500 rounded-md`} style={{paddingInline:`${pokemon.stats[1].base_stat}px`}}></span>
                    </div> 
                    <div className="flex-row my-1">
                        <span className={`mx-4 border-1 border-orange-500 bg-orange-500 rounded-md`} style={{paddingInline:`${pokemon.stats[2].base_stat}px`}}></span>
                    </div>
                    <div className="flex-row my-1">
                        <span className={`mx-4 border-1 border-purple-500 bg-purple-500 rounded-md`} style={{paddingInline:`${pokemon.stats[3].base_stat}px`}}></span>
                    </div>
                    <div className="flex-row my-1">
                        <span className={`mx-4 border-1 border-blue-500 bg-blue-500 rounded-md`} style={{paddingInline:`${pokemon.stats[4].base_stat}px`}}></span>
                    </div>
                    <div className="flex-row my-1">
                        <span className={`mx-4 border-1 border-yellow-500 bg-yellow-500 rounded-md`} style={{paddingInline:`${pokemon.stats[5].base_stat}px`}}></span>
                    </div>          
                </div> 
            </div>
            </>
            : "a"}
        </div>
        <Footer />
    </div>
    ;
}
export default Details;
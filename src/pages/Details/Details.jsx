import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Background from "../../components/Background/Background";
import { NavLink, useParams } from "react-router";
import { useEffect, useState } from "react";
import getPokemon from "../../services/getPokemon";
import { useTranslation } from "react-i18next";
import Favorite from "../../components/Favorite/Favorite";
import paths from '../../paths/paths';
import Button from "../../components/Button/Button";

const Details = () =>{
    const {id} = useParams();
    const [pokemon, setPokemon] = useState(null)
    const {t} = useTranslation();
    const [fallo, setFallo] = useState(false)

    useEffect(()=>{
      getPokemon({id}).then((result)=>{
          setPokemon(result)
      })
      const timer = setTimeout(() => setFallo(true), 2000);
      return () => clearTimeout(timer);
    }, [])
    return <div className="min-h-screen flex flex-col">
        <Header />
        <Background />
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow w-full mx-auto">
            {pokemon != null ? (
              <>
                <div className=" flex flex-col lg:flex-row justify-center px-4 lg:px-10 mx-auto max-w-80 lg:max-w-3xl">
                  <div className="mx-4 mt-6 lg:basis-96">
                    <div>
                      <p>
                        <span className="font-bold text-gray-700">{t("Name")}: </span>
                        <span className="text-shadow-lg/20">
                          {pokemon ? pokemon.name : t("Loading...")}
                        </span>
                      </p>
                    </div>
                    <div className="mt-2">
                      <p>
                        <span className="font-bold text-gray-700">{t("Type")}: </span>
                        <span className="text-shadow-lg/20">
                          {pokemon
                            ? pokemon.types.length === 1
                              ? t(pokemon.types[0].type.name)
                              : t(pokemon.types[0].type.name) +
                                "/" +
                                t(pokemon.types[1].type.name)
                            : t("Loading...")}
                        </span>
                      </p>
                    </div>
                    <div className="mt-2">
                      <p>
                        <span className="font-bold text-gray-700">{t("Height")}: </span>
                        <span className="text-shadow-lg/20">
                          {pokemon ? pokemon.height / 10 : t("Loading...")}mts
                        </span>
                      </p>
                    </div>
                    <div className="mt-2">
                      <p>
                        <span className="font-bold text-gray-700">{t("Weight")}: </span>
                        <span className="text-shadow-lg/20">
                          {pokemon ? pokemon.weight / 10 : t("Loading...")}kgs
                        </span>
                      </p>
                    </div>
                    <div className="mt-2">
                      <p>
                        <span className="font-bold text-gray-700">
                          {t("Abilities")}:{" "}
                        </span>
                        <span className="text-shadow-lg/20">
                          {pokemon
                            ? pokemon.abilities.length === 1
                              ? t(pokemon.abilities[0].ability.name)
                              : pokemon.abilities[1].is_hidden === true
                              ? t(pokemon.abilities[0].ability.name)
                              : t(pokemon.abilities[0].ability.name) +
                                " / " +
                                t(pokemon.abilities[1].ability.name)
                            : t("Loading...")}
                        </span>
                      </p>
                    </div>
                    <div className="mt-2 mb-4">
                      <p>
                        <span className="font-bold text-gray-700">
                          {t("Hidden Ability")}:{" "}
                        </span>
                        <span className="text-shadow-lg/20">
                          {pokemon
                            ? pokemon.abilities.length > 2 &&
                              pokemon.abilities[2].is_hidden === true
                              ? t(pokemon.abilities[2].ability.name)
                              : pokemon.abilities.length > 1 &&
                                pokemon.abilities[1].is_hidden === true
                              ? t(pokemon.abilities[1].ability.name)
                              : t("none")
                            : t("Loading...")}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-2 mb-6 relative bg-gray-700 w-full  lg:mx-2 lg:min-w-xs max-w-xs max-h-max shadow-md shadow-sky-700/50 rounded-xl text-lg">
                    <img
                      className="w-64 h-64 p-3"
                      src={pokemon.sprites.other.home.front_default}
                    />
                    <Favorite pokeid={pokemon.id} />
                    <img
                      className="absolute bottom-0 right-0 p-3"
                      src={pokemon.sprites.other.showdown.front_default}
                    />
                  </div>
                </div>


                <div className="mx-auto mt-6 px-4 max-w-xl shadow-md shadow-sky-700/50 mb-6 bg-gray-700 rounded-md">
                  <h3 className="text-center text-xl font-bold pt-2">{t("Base Stats")}</h3>
                  <div className="flex flex-row justify-evenly py-4">
                    <div className="flex flex-col justify-between text-blue-400 text-sm md:text-base lg:text-base">
                      <div className="my-1">{t("Health Points")}:</div>
                      <div className="my-1">{t("Attack")}:</div>
                      <div className="my-1">{t("Defense")}:</div>
                      <div className="my-1">{t("Special Attack")}:</div>
                      <div className="my-1">{t("Special Defense")}:</div>
                      <div className="my-1">{t("Speed")}:</div>
                    </div>

                    <div className="flex flex-col bg-blue-300 rounded-xl min-w-[150px] lg:min-w-[270px] md:min-w-[270px]">
                      <div className="my-1 ">
                        <span
                          className="mx-2 border-2 border-green-500 bg-green-500 rounded-md sm:px-2 md:px-4"
                          style={{
                            paddingInline: `${pokemon.stats[0].base_stat / 2}px`,
                          }}
                        ></span>
                      </div>
                      <div className="my-1">
                        <span
                          className="mx-2 border-2 border-red-500 bg-red-500 rounded-md sm:px-2 md:px-4"
                          style={{
                            paddingInline: `${pokemon.stats[1].base_stat / 2}px`,
                          }}
                        ></span>
                      </div>
                      <div className="my-1">
                        <span
                          className="mx-2 border-2 border-orange-500 bg-orange-500 rounded-md sm:px-2 md:px-4"
                          style={{
                            paddingInline: `${pokemon.stats[2].base_stat / 2}px`,
                          }}
                        ></span>
                      </div>
                      <div className="my-1">
                        <span
                          className="mx-2 border-2 border-purple-500 bg-purple-500 rounded-md sm:px-2 md:px-4"
                          style={{
                            paddingInline: `${pokemon.stats[3].base_stat / 2}px`,
                          }}
                        ></span>
                      </div>
                      <div className="my-1">
                        <span
                          className="mx-2 border-2 border-blue-500 bg-blue-500 rounded-md sm:px-2 md:px-4"
                          style={{
                            paddingInline: `${pokemon.stats[4].base_stat / 2}px`,
                          }}
                        ></span>
                      </div>
                      <div className="my-1">
                        <span
                          className="mx-2 border-2 border-yellow-500 bg-yellow-500 rounded-md sm:px-2 md:px-4"
                          style={{
                            paddingInline: `${pokemon.stats[5].base_stat / 2}px`,
                          }}
                        ></span>
                      </div>
                    </div>
                  </div>

                </div>
              </>
            ) : (
              fallo && (
                <div className="flex flex-col items-center mx-auto mt-10 px-4 max-w-xl shadow-md shadow-sky-700/50 mb-6 border-4 bg-gray-700/50 border-yellow-300 rounded-md">
                  <div className="flex justify-evenly py-4">
                    <img src={t("/detailsad.svg")} />
                  </div>
                  <NavLink to={paths.home}>
                    <Button
                      texto={t("Go back")}
                      estilo="bg-gray-700 block mx-auto p-2 m-2 rounded-md shadow-md transform transition-all duration-400 hover:bg-yellow-300 hover:text-gray-700 cursor-pointer"
                    />
                  </NavLink>
                </div>
              )
              
            )}
          </div>
        </div>
        <Footer />
    </div>
    ;
}
export default Details;
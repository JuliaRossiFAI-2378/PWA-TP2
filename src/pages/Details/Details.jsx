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
import DetailStatCard from "../../components/DetailStatCard/DetailStatCard";
import DetailsInfo from "../../components/DetailsInfo/DetailsInfo";

const Details = () =>{
    const {id} = useParams();
    const [pokemon, setPokemon] = useState(null)
    const {t} = useTranslation();
    const [fallo, setFallo] = useState(false)
    const [imagen, setImagen] = useState(true)
    const [gif, setGif] = useState(true)

    const HandleCargaFallidaImagen = () => {
      setImagen(false);
    }

    const HandleCargaFallidaGif = () => {
      setGif(false);
    }

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
          <div className="flex-grow w-full mx-auto">
            {pokemon != null ? (
              <>
                <div className=" flex flex-col lg:flex-row justify-center px-4 lg:px-10 mx-auto max-w-80 lg:max-w-3xl">
                  <DetailsInfo poke={pokemon}/>
                  <div className="mt-2 mb-6 relative bg-gray-700 w-full  lg:mx-2 lg:min-w-xs max-w-xs max-h-max shadow-md shadow-sky-700/50 rounded-xl text-lg">
                    <img
                      className="w-64 h-64 p-3" onError={HandleCargaFallidaImagen}
                      src={imagen? pokemon.sprites.other.home.front_default : t('/sad.svg')}
                    />
                    <Favorite pokeid={pokemon.id} />
                    <img
                      className="absolute bottom-0 right-0 p-3" onError={HandleCargaFallidaGif}
                      src={gif? pokemon.sprites.other.showdown.front_default : ' '}
                    />
                  </div>
                </div>
                <DetailStatCard stats={pokemon.stats}/>
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
                    />
                  </NavLink>
                </div>
              )
            )}
          </div>
          <Footer />
        </div>
    ;
}
export default Details;
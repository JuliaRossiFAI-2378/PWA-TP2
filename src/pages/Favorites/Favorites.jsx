import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import { useEffect, useState } from "react";
import Background from '../../components/Background/Background.jsx';
import Card from '../../components/Card/Card.jsx'
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import paths from '../../paths/paths';
import Button from '../../components/Button/Button.jsx';

const Home = () =>{
    const storage = JSON.parse(localStorage.getItem("favoritos")) || null;
    const pokeId = Object.values(storage?storage:{});
    const [recarga, setRecarga] = useState(1);
    const {t} = useTranslation();

    useEffect(() => {
        const handleFavorito = () => {
            setRecarga(prev => prev + 1);
        };
        window.addEventListener("favoritoClick", handleFavorito);
        return () => window.removeEventListener("favoritoClick", handleFavorito);
    }, []);
    

    return(//mx-auto en el contenedor nos puede causar problemas con alineacion despues, tener en cuenta
        <div className="min-h-screen flex flex-col">
        <Header />
        <Background />
            <div className="flex-grow flex-wrap justify-center max-w-9/10 w-full mx-auto flex flex-col md:flex-row lg:flex-row">
                {
                    storage===null || Object.values(JSON.parse(localStorage.getItem("favoritos"))).length === 0 ? 
                    <div className="flex flex-col items-center mx-auto mt-10 px-4 max-w-xl shadow-md shadow-sky-700/50 mb-6 border-4 bg-gray-700/50 border-yellow-300 rounded-md">
                        <div className="flex justify-evenly py-4">
                        <img src={t("/favsad.svg")} />
                        </div>
                        <NavLink to={paths.home}>
                        <Button
                            texto={t("Go back")}
                            estilo="bg-gray-700 block mx-auto p-2 m-2 rounded-md shadow-md transform transition-all duration-400 hover:bg-yellow-300 hover:text-gray-700 cursor-pointer"
                        />
                        </NavLink>
                    </div> : pokeId.map(favId => (
                        <Card key={favId} pokereferencia={favId} />
                    ))
                }
            </div>
            <Footer />
        </div>)
};
export default Home;
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
    

    return(
        <div className="min-h-screen flex flex-col">
        <Header />
        <Background />
            <div className='flex-grow' >
            <div className="flex-wrap justify-center max-w-9/10 w-full mx-auto flex flex-col md:flex-row lg:flex-row">
                {
                    storage===null || Object.values(JSON.parse(localStorage.getItem("favoritos"))).length === 0 ? 
                    <div className="flex flex-col items-center mx-auto mt-10 px-4 max-w-xl shadow-md shadow-sky-700/50 mb-6 border-4 bg-gray-700/50 border-yellow-300 rounded-md">
                        <div className="flex justify-evenly py-4">
                        <img src={t("/favsad.svg")} />
                        </div>
                        <NavLink to={paths.home}>
                        <Button
                            texto={t("Go back")}
                        />
                        </NavLink>
                    </div> : pokeId.map(favId => (
                        <Card key={favId} pokereferencia={favId} />
                    ))
                }
            </div>
            </div>
            <Footer />
        </div>
    )
};
export default Home;
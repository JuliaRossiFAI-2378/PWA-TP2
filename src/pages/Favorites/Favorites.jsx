import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import { useEffect, useState } from "react";
import Background from '../../components/Background/Background.jsx';
import Card from '../../components/Card/Card.jsx'
import getAllPokemon from '../../services/getAllPokemon.js';
import loading from '../../assets/loading.gif'
import getPokemon from '../../services/getPokemon.js';


const Home = () =>{
    const storage = JSON.parse(localStorage.getItem("favoritos"));
    const pokeId = Object.values(storage);
    const [recarga, setRecarga] = useState(1);

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
                    storage===null? "" : pokeId.map(favId => (
                        <Card key={favId} pokereferencia={favId} />
                    ))
                }
            </div>
            <Footer />
        </div>)
};
export default Home;
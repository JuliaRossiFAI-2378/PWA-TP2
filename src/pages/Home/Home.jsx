import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import { useEffect, useState } from "react";
import Background from '../../components/Background/Background.jsx';
import Card from '../../components/Card/Card.jsx'
import getAllPokemon from '../../services/getAllPokemon.js';

const Home = () =>{
    const [listaPokemon, setListaPokemon] = useState(null);

    useEffect(()=>{
        getAllPokemon().then((datos)=>{setListaPokemon(datos.results)})
    }, [])

    return(//mx-auto en el contenedor nos puede causar problemas con alineacion despues, tener en cuenta
        <div className="min-h-screen flex flex-col">
        <Header />
        <Background />
            <div className="flex-grow flex-wrap justify-center max-w-9/10 w-full mx-auto flex flex-col md:flex-row lg:flex-row border-x-2">
                {listaPokemon!=null ?
                listaPokemon.map(pokemon => (
                    <Card key={pokemon.name} pokereferencia={pokemon?pokemon:null} />
                )) :
                "aca mostramos algo en caso de que falle el fetcheo/mientras esta cargando?"}
            </div>
            <Footer />
        </div>)
}        
;
export default Home;
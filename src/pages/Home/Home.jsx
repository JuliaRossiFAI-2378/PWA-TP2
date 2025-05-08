import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import { useEffect, useState } from "react";
import Background from '../../components/Background/Background.jsx';
import Card from '../../components/Card/Card.jsx'
import getAllPokemon from '../../services/getAllPokemon.js';
import { useTranslation, Trans } from 'react-i18next';
import loading from '../../assets/loading.gif'
import Pagination from '../../components/Pagination/Pagination.jsx';

const Home = () =>{
    const [listaPokemon, setListaPokemon] = useState(null);
    const [busqueda, setBusqueda] = useState("")
    const [listaBusqueda, setListaBusqueda] = useState(null)
    const { t } = useTranslation()
    const paginas = [151, 100, 135, 107, 156, 72, 88, 96, 120]; // 9 páginas
    const [paginaActual, setPaginaActual] = useState(1);

    const calcularOffset = (pagina) => {
        return paginas.slice(0, pagina - 1).reduce((a, b) => a + b, 0);
    };
    
    useEffect(() => {
        const fetchData = async () => {
            const limite = paginas[paginaActual - 1];
            const offset = calcularOffset(paginaActual);
            const datos = await getAllPokemon(limite, offset);
            if (datos) {
                setListaPokemon(datos.results);
                setListaBusqueda(datos.results);
            }
        };
        fetchData();
    }, [paginaActual]);

    useEffect(() => {
        if (busqueda === "") {
            setListaBusqueda(listaPokemon);
        } else {
            setListaBusqueda(
                listaPokemon?.filter(pokemon =>
                    pokemon.name?.includes(busqueda.toLowerCase())
                )
            );
        }
    }, [busqueda, listaPokemon]);
    
    return(
        <div className="min-h-screen flex flex-col">
        <Header />
        <Background />
            <div className="bg-yellow-300 m-4 max-w-80 lg:max-w-1/2 md:max-w-1/2 md:w-1/2 lg:w-1/2 self-center rounded-sm flex items-center">
                <label className='text-stone-500 font-bold ml-1 select-none w-auto'>{t("Search")}: </label>
                <input type='text' value={busqueda} onChange={(event) => setBusqueda(event.target.value)}  placeholder={ t ('Input a Pokename')} className='w-full h-9 ml-2 pl-1 text-slate-500 border-0 border-b-2 border-yellow-300 focus:border-gray-700 focus:outline-none transition-transform duration-300  text-center' />
            </div>
            <Pagination paginas={paginas} paginaActual={paginaActual} setPaginaActual={setPaginaActual}/>
            <div className="flex-grow flex-wrap justify-center max-w-9/10 w-full mx-auto flex flex-col md:flex-row lg:flex-row">
                {listaBusqueda===null ? <img src={loading}/> 
                    : listaBusqueda.map(pokemon => (
                        <Card key={pokemon.name} pokereferencia={pokemon?pokemon.name:null} />
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}        
;
export default Home;
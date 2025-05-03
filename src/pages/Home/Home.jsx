import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import { useEffect, useState } from "react";
import Background from '../../components/Background/Background.jsx';
import Card from '../../components/Card/Card.jsx'
import getAllPokemon from '../../services/getAllPokemon.js';
import { useTranslation, Trans } from 'react-i18next';
import i18n from '../../i18n.js';
import loading from '../../assets/loading.gif'


const Home = () =>{
    const [listaPokemon, setListaPokemon] = useState(null);
    const [busqueda, setBusqueda] = useState("")
    const [listaBusqueda, setListaBusqueda] = useState(null)
    const { t } = useTranslation()
    useEffect(()=>{
        getAllPokemon().then((datos)=>{setListaPokemon(datos.results)})
        //seteamos la lista de busqueda con todos los pokemons tambien, sino crashea
        getAllPokemon().then((datos)=>{setListaBusqueda(datos.results)}) 
    }, [])


 
    useEffect(()=>{
        listaPokemon? setListaBusqueda(listaPokemon.filter(pokemon => {
            return pokemon.name?.includes(busqueda) //filtramos la listapoke con el input de busqueda
        })) : console.log("Cargando...") //esto solo pasa antes de que carguen las 2 listas
    }, [busqueda])//se filtra cada vez que el input cambia
        
    

    return(//mx-auto en el contenedor nos puede causar problemas con alineacion despues, tener en cuenta
        <div className="min-h-screen flex flex-col">
        <Header />
        <Background />
            <div className="bg-yellow-300 m-4 max-w-80 lg:max-w-1/2 md:max-w-1/2 md:w-1/2 lg:w-1/2 self-center rounded-sm flex items-center">
                <label className='text-stone-500 font-bold ml-1 select-none w-auto'>{t("Search")}: </label>
                <input type='text' value={busqueda} onChange={(event) => setBusqueda(event.target.value)}  placeholder={ t ('Input a Pokename')} className='w-full h-9 ml-2 pl-1 text-slate-500 border-0 border-b-2 border-yellow-300 focus:border-gray-700 focus:outline-none transition-transform duration-300  text-center' />
            </div>
            <div className="flex-grow flex-wrap justify-center max-w-9/10 w-full mx-auto flex flex-col md:flex-row lg:flex-row">
                {listaBusqueda===null ? 
                //le puse para que muestre el gif de carga en esos segundos de espera
                            //pero deberiamos ver bien que poner despues
                    <img src={loading}/> :  listaBusqueda.map(pokemon => (
                        <Card key={pokemon.name} pokereferencia={pokemon?pokemon:null} />
                    )) }
            </div>
            <Footer />
        </div>)
}        
;
export default Home;
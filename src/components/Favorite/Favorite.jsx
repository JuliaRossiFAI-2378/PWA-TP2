import favorito from '../../assets/favorito.png'
import favoritono from '../../assets/favoritono.png'
import { useState, useEffect } from 'react'

const Favorite = ({pokeid}) =>{
    const [esFavorito, setEsFavorito] = useState(!!JSON.parse(localStorage.getItem("favoritos"))?.[pokeid]);
    const [desactivarHover, setDesactivarHover] = useState(false);

    const HandleClickFavorito = () => {
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || {};
        window.dispatchEvent(new CustomEvent("favoritoClick", { detail: pokeid }));
        if(esFavorito){
            delete favoritos[pokeid]
            setEsFavorito(false)
        }else{
            favoritos[pokeid] = pokeid
            setEsFavorito(true)
        }
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        setDesactivarHover(true);
        setTimeout(() => {//es esto o desactivarlo con mouseenter y leave y no me da el alma para eso
            setDesactivarHover(false);
        }, 600); 
    }


    return (
        <img onClick={HandleClickFavorito} src={esFavorito ? favorito : favoritono}//perdon queria una animacion bonita perdon
            className={`absolute w-14 h-14 top-0 right-0 m-4 transform transition-all duration-500 rounded-full
            ${esFavorito
                ? desactivarHover ? ""
                : "hover:scale-80 hover:rotate-90 hover:brightness-70 hover:saturate-70 hover:translate-y-1"
                : desactivarHover ? ""
                : "hover:scale-120 hover:rotate-180 hover:brightness-200 hover:saturate-200"
            }`}
        />
    )

}
export default Favorite;
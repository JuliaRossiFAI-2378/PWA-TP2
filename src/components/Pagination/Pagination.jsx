import estrella from '../../assets/favoritono.png'
import estrellasi from '../../assets/favorito.png'

const Pagination = ({ paginas, paginaActual, setPaginaActual }) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 my-4">
            {paginas.map((_, index) => {//solo nos interesa el index, y usamos map porque retorna contenido
                const esActual = paginaActual === index + 1;
                //no vale la pena llamar al componente boton para esto, esos estaban planeados para mostrar texto
                return (
                    <button key={index} onClick={() => setPaginaActual(index + 1)}
                        className={`relative w-12 h-12 overflow-hidden transform transition-all duration-300
                            ${esActual ? 'scale-110' : 'hover:scale-110'}
                            ${esActual ? 'saturate-125' : 'hover:saturate-125 hover:brightness-125'}`
                        }
                    >
                        <img src={esActual ? estrellasi : estrella} className="w-[130%] h-[130%] object-contain absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                        <span className={`absolute inset-0 flex items-center justify-center font-bold cursor-pointer ${esActual ? 'text-gray-700' : 'text-white'}`}>
                            {index + 1}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;

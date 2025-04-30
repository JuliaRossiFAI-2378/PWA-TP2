import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import { useEffect, useState } from "react";
import Aaa from '../../components/test.jsx';
import Background from '../../components/Background/Background.jsx';

const Home = () =>{

    

    return(//mx-auto en el contenedor nos puede causar problemas con alineacion despues, tener en cuenta
        <div className="min-h-screen flex flex-col">
        <Header />
        <Background />
            <div className="flex-grow max-w-9/10 w-full mx-auto border-x-2">
                <p className='p-8'>soy el contenido de home, hola :)</p>
                <Aaa />
            </div>
            <Footer />
        </div>)
}        
;
export default Home;
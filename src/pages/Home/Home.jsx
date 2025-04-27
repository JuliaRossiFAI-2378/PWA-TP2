import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx';

const Home = () =>
        <div className="min-h-screen flex flex-col">
        <Header />
            <div className="flex-grow" >
            <p className='p-8'>soy el contenido de home, hola :)</p>
            </div>
            <Footer />
        </div>
;
export default Home;
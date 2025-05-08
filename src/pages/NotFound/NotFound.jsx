import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import paths from "../../paths/paths";
import Button from "../../components/Button/Button";
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import Background from '../../components/Background/Background.jsx';

const NotFound = () => {
    const {t} = useTranslation();
    return(
        <div className="min-h-screen flex flex-col">
            <Header />
            <Background />
            <div className="flex-grow">
                <div className="flex flex-col items-center mx-auto mt-10 px-4 max-w-xl shadow-md shadow-sky-700/50 mb-6 border-4 bg-gray-700/50 border-yellow-300 rounded-md">
                    <div className="flex justify-evenly py-4">
                        <img src={t("/sad404.svg")} />
                    </div>
                    <NavLink to={paths.home}>
                        <Button texto={t("Home")} />
                    </NavLink>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default NotFound;
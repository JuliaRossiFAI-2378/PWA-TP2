import { useState, useEffect } from "react";
import Idioma from '../Idioma/Idioma.jsx'
import { useTranslation } from "react-i18next";
import logo from '../../assets/logo.svg'
import logohover from '../../assets/logohover.svg'
import { NavLink } from "react-router";
import paths from '../../paths/paths.js'
const Header = () => {
    //esto es super innecesario pero no me resisti
  const [scrolling, setScrolling] = useState(false);
  const [imagenLogo, setImagenLogo] = useState(logo);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoMouseEnter = () =>{
    setImagenLogo(logohover)
  }
  const logoMouseLeave = () =>{
    setImagenLogo(logo)
  }

  return (
    <div
      className={` sticky top-0 w-full p-4 shadow-md flex items-center justify-between z-10 transition-colors duration-300
        ${scrolling
          ? "bg-blue-300"
          : "bg-[rgba(122,204,247,0.2)]"}`}
    >
      <NavLink to={paths.home}>
        <img onMouseEnter={logoMouseEnter} onMouseLeave={logoMouseLeave} className="h-10 scale-200 origin-left overflow-visible select-none ml-0 sm:ml-4 md:ml-8 lg:ml-12 cursor-pointer" src={imagenLogo} />
      </NavLink>
      <nav className="text-xl">
        <ul className="flex space-x-4">
          <li>
            <NavLink to={paths.favorites}>
              <span className="hover:text-yellow-300 cursor-pointer">{t("favorites")}</span>
            </NavLink>
          </li>
          <li>
              <Idioma/>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

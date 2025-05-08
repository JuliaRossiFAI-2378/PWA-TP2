import { useTranslation } from "react-i18next";
import whatsapp from '../../assets/whatsapp-48.png'
import linkedin from '../../assets/linkedin-48.png'
import github from '../../assets/github-50.png'

const Footer = () => {
  const{t}=useTranslation();
  return (
    <footer className="bg-gray-700 text-white py-3">
      <div className="max-w-[95%] mx-auto px-4">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold mb-2">{t("Socials")}</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#">
                <img src={whatsapp} className="w-6 h-6" />
              </a>
              <a href="https://github.com/JuliaRossiFAI-2378/PWA-TP2/">
                <img src={github} className="w-6 h-6" />
              </a>
              <a href="#">
                <img src={linkedin} className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">{t("Resources")}</h5>
            <ul className="space-y-1 text-sm">
              <li><a href="https://pokeapi.co" className="hover:text-yellow-400">{t("API")}</a></li>
              <li><a href="https://pokeapi.co/docs/v2" className="hover:text-yellow-400">{t("Documentation")}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">{t("Contact us")}</h5>
            <ul className="space-y-1 text-sm">
              <li><span>{t("Street")} Siempreviva 123, Neuquén Capital, Q8300, Argentina</span></li>
              <li><span>+54 299 123-4567</span></li>
              <li><span>correo@superlegit.gov</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-300 mt-6 pt-4 text-xs text-center">
          Trabajo Práctico 2 - Programacion Web Avanzada {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
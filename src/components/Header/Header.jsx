import { useState, useEffect } from "react";

const Header = () => {
    //esto es super innecesario pero no me resisti
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={` sticky top-0 w-full p-4 shadow-md flex items-center justify-between z-10 transition-colors duration-300
        ${scrolling
          ? "bg-blue-300"
          : "bg-[rgba(122,204,247,0.2)]"}`}
    >
      <h1 className="text-2xl font-bold text-gray-700 hover:text-yellow-300 cursor-pointer">
        nombre/logo
      </h1>
      <nav className="text-xl">
        <ul className="flex space-x-4">
          <li>
            <a className="hover:text-yellow-300 cursor-pointer">cambiar idioma</a>
          </li>
          <li>
            <a className="hover:text-yellow-300 cursor-pointer">favoritos</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

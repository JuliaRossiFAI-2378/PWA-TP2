const Header = () => {
  return (
    <div className="bg-242424 shadow-md sticky top-0 w-full p-4 flex items-center justify-between z-10">
        <h1 className="text-2xl font-bold text-sky-400">nombre/logo</h1>
        <nav className="text-xl">
            <ul className="flex space-x-4">
                <li>
                    <a className="hover:text-cyan-400 cursor-pointer">cambiar idioma</a>
                </li>
                <li>
                    <a className="hover:text-cyan-400 cursor-pointer" >favoritos</a>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Header;


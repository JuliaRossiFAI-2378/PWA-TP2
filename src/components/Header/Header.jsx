const Header = () => {
  return (
    <div className="bg-[rgba(122,204,247,0.2)] shadow-md sticky top-0 w-full p-4 flex items-center justify-between z-10 bg-opacity-0">
        <h1 className="text-2xl font-bold text-gray-700 hover:text-yellow-300 cursor-pointer">nombre/logo</h1>
        <nav className="text-xl">
            <ul className="flex space-x-4">
                <li>
                    <a className="hover:text-yellow-300 cursor-pointer">cambiar idioma</a>
                </li>
                <li>
                    <a className="hover:text-yellow-300 cursor-pointer" >favoritos</a>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Header;


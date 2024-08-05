const NavBar = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-6">
        <div className="flex items-center flex-shrink-0 text-[#113540] mr-6 ">
          {/* logo */}
          <img
            src="../src/assets/logoLight.png"
            alt="Logo"
            className="h-10 w-10 items-center"
          />
          <span className="font-semibold text-xl tracking-tight">
            Ktaki Candles
          </span>
        </div>
        <nav className="block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#catalogue"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4"
            >
              Catalogue
            </a>
            <a
              href="#about"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black"
            >
              Contact
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
            >
              Shop Now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;


import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-primary/40 py-3 sm:py-0">
        {/* upper Navbar */}
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="/"
              className="font-bold text-2xl sm:text:3xl flex gap-2 items-center"
            >
              <img src="./logo.jpg" alt="brand-logo" width={50} height={50} className="rounded-full"/>
              Bilmosh
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            {/* search */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 focus:outline-none px-2 py-1 rounded-full
                  border-gray-300 focus:border-1 focus:border-primary"
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 
            right-3 cursor-pointer"
              />
            </div>
            {/* cart */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary
          text-white rounded-full group flex items-center gap-3 
           px-4 py-1 transition-all duration-300"
            >
              <span className="hidden group-hover:block transition-all duration-500">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* toggle button */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

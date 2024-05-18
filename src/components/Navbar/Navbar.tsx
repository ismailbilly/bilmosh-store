import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import LowerNavbar from "./LowerNavbar";

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200  z-40 fixed w-full">
      <div className="bg-primary/40 py-3 sm:py-0">
        {/* upper Navbar */}
        <div className="container flex justify-between items-center">
          <div>
            <a
              href="/"
              className="font-bold text-2xl sm:text:3xl flex gap-2 items-center"
            >
              <img
                src="./logo.jpg"
                alt="brand-logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="hidden sm:inline">Bilmosh</span>
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            {/* search */}
            {/* <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 focus:outline-none px-2 py-1 rounded-full
                  border-gray-300 focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 
            right-3 cursor-pointer"
              />
            </div> */}
            {/* login button */}
            <button className="py-1 px-2 sm:px-4 text-sm sm:text-base rounded-full border-2 border-black">
              Login
            </button>
            {/* cart */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary
          text-white rounded-full group flex items-center gap-3 
           px-4 py-1 transition-all duration-300 relative"
            >
              <span className="hidden group-hover:block transition-all duration-500">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              <div className="w-5 h-5 rounded-full font-bold bg-black absolute -top-2 left-7 text-sm">
                3
              </div>
            </button>
            {/* toggle button */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* search on mobile screens */}
      <div className="relative group px-2 sm:hidden">
        <input
          type="text"
          placeholder="Search..."
          className=" w-[80%] outline-none border-none px-2 py-1 dark:border-gray-500 dark:bg-gray-800 "
        />
        <IoMdSearch
          className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 
            right-3 cursor-pointer"
        />
      </div>
      <LowerNavbar />
    </div>
  );
};

export default Navbar;

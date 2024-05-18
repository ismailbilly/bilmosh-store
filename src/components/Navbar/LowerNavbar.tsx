//import React from 'react'

import { FaCaretDown } from "react-icons/fa6";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Womens Wear",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "New Arrival",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 6,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 7,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 8,
    name: "Top Rated",
    link: "/#",
  },
];
const LowerNavbar = () => {
  return (
    <div className="flex justify-center">
      <ul className="sm:flex hidden  items-center gap-4">
        {Menu.map((data) => (
          <li key={data.id}>
            <a
              href={data.link}
              className="inline-block px-4 hover:text-primary duration-200"
            >
              {data.name}
            </a>
          </li>
        ))}
        {/* Simple dropdown and links */}
        <li className="group relative cursor-pointer">
          <a href="#" className="flex items-center py-2 gap-[2px]">
            Trending
            <span>
              <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
            </span>
          </a>
          <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
            <ul>
              {DropdownLinks.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default LowerNavbar
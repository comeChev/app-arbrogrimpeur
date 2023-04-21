import React, { useState } from "react";
import { Link } from "react-router-dom";
//images
import logo from "../../assets/images/static/AOG-logo.png";
//components
import Quote from "../ui/Quote";
import LinkButton from "../ui/buttons/LinkButton";
import IconMenu from "../ui/icons/IconMenu";
import IconCloseMenu from "../ui/icons/IconCloseMenu";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menu = [
    {
      name: "Accueil",
      to: "/",
    },
    {
      name: "Nos services",
      to: "/services",
    },
    {
      name: "A propos",
      to: "/about",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];

  return (
    <div className="bg-white w-3/4 flex flex-col mx-auto relative">
      {/* DESKTOP MENU BAR */}
      <div className="w-full flex items-center justify-between md:justify-around sm:items-between mb-6">
        {/* LOGO  */}
        <div className="flex flex-col sm:flex-row flex-shrink-0 items-center">
          <Link to="/">
            <img
              className="block h-24 w-auto lg:h-36"
              src={logo}
              alt="Arbr'O Grimpeur"
            />
          </Link>
        </div>
        <Quote />

        {/* MOBILE MENU BUTTON  */}
        <button
          id="mobile-button"
          type="button"
          className="sm:hidden z:30 flex items-center justify-center rounded-md p-2 text-teal-800 hover:bg-teal-800 hover:text-white transition duration-300"
          aria-controls="mobile-menu"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <span className="sr-only">Ouvrir le menu principal</span>
          {isOpenMenu ? <IconCloseMenu /> : <IconMenu />}
        </button>
      </div>

      <div className="hidden absolute -bottom-14 w-full sm:flex sm:items-center sm:justify-center py-10 z-40 bg-white rounded-md shadow-lg">
        {/* MAIN MENU  */}
        <nav className="sm:ml-6 flex flex-shrink-0 items-center">
          <ul className="flex list-none">
            {menu.map((link, index) => (
              <LinkButton key={index} to={link.to} text={link.name} />
            ))}
          </ul>
        </nav>
      </div>
      {/* MOBILE MENU  */}
      {
        isOpenMenu ? (
          <nav className="sm:hidden">
            <ul className="space-y-1 px-2 pb-3 pt-2">
              {menu.map((link) => (
                <LinkButton
                  onClick={() => setIsOpenMenu(false)}
                  to={link.to}
                  text={link.name}
                  css="block"
                />
              ))}
            </ul>
          </nav>
        ) : null
        /* END MOBILE MENU */
      }
    </div>
  );
};

export default Navbar;

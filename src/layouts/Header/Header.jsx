import { useState } from "react";
import { ItemNavLink } from "../../components/ItemNavLink/ItemNavLink";
import { Navbar } from "../Navbar/Navbar";
import imgPrueba from "../../assets/images/User_image.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full h-auto flex flex-row flex-wrap justify-around items-center p-4 rounded-b-xl bg-[#1E3A8A] text-white font-bold">
      <img className="w-15 bg-amber-50 h-15 rounded-4xl" src={imgPrueba} alt="img prueba" />

      <h1 className="font-bold">Juan David Caro Vargas</h1>

      <button
        className="sm:hidden text-white p-2 rounded focus:outline-none"
        onClick={toggleMenu}
      >
        {/* Ícono del menú hamburguesa */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <Navbar>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } sm:flex font-bold space-y-4 sm:space-y-0 sm:space-x-8 bg-[#1E3A8A] sm:bg-transparent p-4 sm:p-0 rounded-md`}
        >
          <ItemNavLink route="/" content="Inicio" />
          <ItemNavLink route="/EnglishLevel" content="Nivel De Ingles" />
          <ItemNavLink route="/TechnicalSkills" content="Habilidades Tecnicas" />
          <ItemNavLink route="/SocialSkills" content="Habilidades sociales" />
          <ItemNavLink route="/Studies" content="Estudios" />
        </ul>
      </Navbar>
    </header>
  );
};

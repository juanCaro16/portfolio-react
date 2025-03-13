import { ItemNavLink } from "../../components/ItemNavLink/ItemNavLink"
import { Navbar } from "../Navbar/Navbar"
import imgPrueba from "../../assets/images/User_image.png"


export const Header = () => {
  return (
    <header className="w-[98.6vw] ml-[1vw] h-20 rounded-b-xl bg-[#1E3A8A] flex justify-around items-center text-white font-bold">


      <img className="w-15 bg-amber-50 h-15 rounded-4xl" src={imgPrueba} alt="img prueba" />

      <h1 className="font-bold relative right-60  ">Juan David Caro Vargas</h1>

      <Navbar>

        <ul className="flex justify-center items-center flex-row gap-5">
          <ItemNavLink route='/' content='Inicio' />
          <ItemNavLink route='/EnglishLevel' content='Nivel De Ingles' />
          <ItemNavLink route='/SocialSkills' content='Habilidades sociales' />
          <ItemNavLink route='/Studies' content='Estudios' />


        </ul>


      </Navbar>


    </header>
  )
}



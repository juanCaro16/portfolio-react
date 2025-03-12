import { ItemNavLink } from "../../components/ItemNavLink/ItemNavLink"
import { Navbar } from "../Navbar/Navbar"
import  imgPrueba  from "../../assets/images/img_prueba.png"


export const Header = () => {
  return (
    <header className="w-350 h-20 rounded-b-xl bg-blue-500 flex justify-around items-center">
          
        <img className="w-20 h-15 rounded-4xl" src={imgPrueba} alt="img prueba" />

        <h1 className="font-bold relative right-65  ">Juan David Caro Vargas</h1>
       
        <Navbar>
      


        <ul className="flex justify-center items-center flex-row gap-5">
            <ItemNavLink route='/' content='Inicio'/>
            <ItemNavLink route='/EnglishLevel'  content='English Level'/>
            <ItemNavLink route='/SocialSkills'  content='Social Skills'/>
            <ItemNavLink route=''  content='Inicsa'/>
            
            
        </ul>


        </Navbar>


    </header>
  )
}



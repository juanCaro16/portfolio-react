import { ItemNavLink } from "../../components/ItemNavLink/ItemNavLink"
import { Navbar } from "../Navbar/Navbar"


export const Header = () => {
  return (
    <header className="w-450 h-20 rounded-xl bg-blue-500 flex justify-around items-center">

        <h1 className="font-bold">Juan David Caro Vargas</h1>
        <Navbar>

        <ul className="flex justify-center items-center flex-row gap-10">
            <ItemNavLink route='/' content='Inicio'/>
            <ItemNavLink route=''  content='Inicio'/>
            <ItemNavLink route=''  content='Inicio'/>
            <ItemNavLink route=''  content='Inicio'/>
            
            
        </ul>


        </Navbar>


    </header>
  )
}



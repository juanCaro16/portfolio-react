import { ItemNavLink } from "../../components/ItemNavLink/ItemNavLink"
import { Navbar } from "../Navbar/Navbar"


export const Header = () => {
  return (
    <header className="w-450 h-20 rounded-xl bg-amber-500 flex justify-center items-center">

        <h1 className="font-bold">Juan David Caro Vargas</h1>
        <Navbar>

        <ul>
            <ItemNavLink route='/' content='Inicio'/>
            <ItemNavLink route=''  content='Inicio'/>
            <ItemNavLink route=''  content='Inicio'/>
            <ItemNavLink route=''  content='Inicio'/>
            
            
        </ul>


        </Navbar>


    </header>
  )
}



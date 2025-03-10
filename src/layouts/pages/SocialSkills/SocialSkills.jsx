import { ItemSocialSkills } from "../../../components/ItemSocialSkills/ItemSocialSkills"
import { Navbar } from "../../Navbar/Navbar"



export const SocialSkills = () => {
  return (
    <>
      <Navbar>
        <ul className="mt-40 text-white ">
          <ItemSocialSkills content={"Puntualidad"}/>            
          <ItemSocialSkills content={"Comunicacion Efectiva"}/>            
          <ItemSocialSkills content={"Liderazgo"}/>            
          <ItemSocialSkills content={"Honestidad"}/>            
          <ItemSocialSkills content={"Respeto"}/>            
          <ItemSocialSkills content={"Trabajo En Equipo"}/>            
          <ItemSocialSkills content={"Puntualidad"}/>            
          <ItemSocialSkills content={"Puntualidad"}/>            
        </ul>
      </Navbar>
    </>
  )
}


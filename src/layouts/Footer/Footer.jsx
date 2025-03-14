import { ItemNavLink } from "../../components/ItemNavLink/ItemNavLink"
import { FaGithub,FaInstagram,FaLinkedin  } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="bg-blue-950 w-full h-24  flex flex-row flex-wrap justify-center items-center ">
        <h2 className="font-bold">Hecho Por Juan David Caro©</h2>
        <ul className="flex justify-center items-center flex-row">
        <ItemNavLink to={""} content={<FaGithub className="w-20 h-10" />} />
        <ItemNavLink to={""} content={<FaInstagram className="w-20 h-10" />} />
        <ItemNavLink to={""} content={<FaLinkedin  className="w-20 h-10" />} />
        
        </ul>
      </footer>
    </>
  )
}



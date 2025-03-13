import { ItemNavLink } from "../../components/ItemNavLink/ItemNavLink"
import { FaGithub,FaInstagram,FaLinkedin  } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="w-[98.7vw]  h-20 bg-[#1F2937] text-[#9CA3AF] ml-[1vw] justify-around gap-[50%] items-center flex flex-row">
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



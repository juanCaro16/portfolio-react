import img from "../../assets/images/foto_jdcv.jpg"


export const Main = () => {
  
  const skills = [
    { icon: "⚡", title: "C#", level: "Básico" },
    { icon: "💻", title: "JavaScript", level: "Intermedio" },
    { icon: "☕", title: "Java", level: "Intermedio" },
    { icon: "🐍", title: "Python", level: "Intermedio" },
    { icon: "🌐", title: "PHP", level: "Intermedio" },
    { icon: "🗄️", title: "MySQL", level: "Intermedio" },
  ];

  const technologies = [
    "Desarrollo Web",
    "Visual Studio Code",
    "Visual Studio",
    "Eclipse",
    "NetBeans",
    "MySQL Workbench",
    "MongoDB",
    "Git",
    "GitHub",
  ];

  return (
    <div  className="flex w-[99.8vw] bg-[#111827] justify-center items-center h-[100vh] flex-col">

      <img className="w-60 mt-10 h-80 rounded-4xl" src={img} alt="img" />
      <h2 className="mt-10 text-white font-black flex justify-center text-3xl">Algo Sobre Mi</h2>

      <p className="text-white mt-5 p-5 text-justify">Soy Juan David Caro Vargas, estudiante de Análisis y Desarrollo de Software en el SENA. Tengo habilidades en JavaScript, React JS y Tailwind CSS. Me destaco por mi capacidad de trabajo en equipo, atención al detalle y pasión por resolver problemas. Aspiro a especializarme tanto en back-end como en front-end, buscando oportunidades para crecer y aportar en proyectos significativos.
      </p>

      

      
      
          
     
    </div>
  )
}






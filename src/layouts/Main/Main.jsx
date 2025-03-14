import imgMain from "../../assets/images/foto_jdcv.jpg"


export const Main = () => {
  
  
  return (
    <div  className="flex w-[99.8vw]  justify-center items-center h-[100vh] flex-col">

      <img className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto object-cover rounded-lg shadow-lg" src={imgMain} alt="img" />
      <h2 className="mt-10 text-white font-black flex justify-center text-3xl">Algo Sobre Mi</h2>

      <p className="text-white mt-5 p-5 text-justify">Soy Juan David Caro Vargas, estudiante de Análisis y Desarrollo de Software en el SENA. Tengo habilidades en JavaScript, React JS y Tailwind CSS. Me destaco por mi capacidad de trabajo en equipo, atención al detalle y pasión por resolver problemas. Aspiro a especializarme tanto en back-end como en front-end, buscando oportunidades para crecer y aportar en proyectos significativos.
      </p>

      

      
      
          
     
    </div>
  )
}






import img_prueba2 from "../../assets/images/img_prueba2.png"
import img_prueba3 from "../../assets/images/img_prueba3.png"
import img_prueba4 from "../../assets/images/img_prueba4.png"

export const Main = () => {

  const levels = [
    [
      { level: "A1", title: "Principiante", description: "Comprende y usa expresiones cotidianas básicas. Se presenta y da información personal sencilla." },
      { level: "A2", title: "Elemental", description: "Comprende frases y expresiones frecuentes. Puede comunicarse en situaciones simples y cotidianas." }
    ],
    [
      { level: "B1", title: "Intermedio", description: "Entiende los puntos principales de conversaciones. Se desenvuelve en situaciones durante un viaje." },
      { level: "B2", title: "Intermedio alto", description: "Comprende ideas complejas y puede interactuar con hablantes nativos con fluidez." }
    ],
    [
      { level: "C1", title: "Avanzado", description: "Comprende textos largos y exigentes. Se expresa de manera fluida y usa el idioma en contextos profesionales." },
      { level: "C2", title: "Maestría", description: "Comprende prácticamente todo. Se expresa espontáneamente y diferencia matices sutiles." }
    ]
  ];

  return (
    <>

      <h2 className="absolute mt-40 left-10 text-white font-black flex justify-start text-3xl">Algo Sobre Mi</h2>
      <p className="text-white mt-35 pl-10">Soy Juan David Caro Vargas Estudiante de Análisis y Desarrollo de Software en el Servicio Nacional de Aprendizaje (SENA)
        Dedicado estudiante de Análisis y Desarrollo de Software en búsqueda activa de oportunidades para aplicar y expandir mis habilidades en el ámbito de la programación. Poseo un sólido compromiso con el aprendizaje continuo y el desarrollo profesional, respaldado por mi formación en el prestigioso Instituto SENA. Tengo Un buen nivel en JavaScript Usando la biblioteca de React JS siendo complementada con el framework de CSS “Tailwind css”. Me destaco por mi capacidad para trabajar en equipo, mi atención al detalle y mi pasión por resolver problemas mediante soluciones innovadoras en el campo de la tecnología, Mi gran meta es lograr especializarme en el campo del back-end y en el campo del front-end. Busco integrarme en un entorno laboral que me brinde la oportunidad de crecer y contribuir al desarrollo de proyectos significativos.
      </p>

      <div className="w-full flex justify-center items-center gap-30 mt-20">

        <img className="w-50 h-50 rounded-4xl" src={img_prueba2} alt="" />
        <img className="w-50 h-50 rounded-4xl" src={img_prueba3} alt="" />
        <img className="w-50 h-50 rounded-4xl" src={img_prueba4} alt="" />

      </div>


      <h1 className="text-white text-xl mt-10 font-bold">Acerca De Mi Nivel</h1>

      <p className="text-white text-xl mt-10 w-150 text-justify">Actualmente mi nivel de ingles de grado B1, puesto que en el mundo del desarrollo es demasiado importante me estoy esforzando por conseguir un mayor nivel. Deseo llegar a C1 en algun futuro!</p>

      <h2 className="text-white text-2xl mt-15 font-black ">Diferencias Entre Los Niveles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 mt-5">

        {levels.map((column, columnIndex) => (

          <div key={columnIndex} className="flex flex-col gap-4">

            {column.map((item, index) => (

              <div key={index} className="bg-blue-100 p-4 rounded-2xl shadow-md hover:shadow-lg transition">
                <h2 className="text-xl font-bold text-blue-800">{item.level} - {item.title}</h2>
                <p className="text-gray-700 mt-2">{item.description}</p>

              </div>
            )
            )
            }

          </div>
        )
        )
        }
      </div>

    </>


  )
}



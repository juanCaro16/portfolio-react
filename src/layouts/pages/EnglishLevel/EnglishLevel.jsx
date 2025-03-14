export const EnglishLevel = () => {

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

    <h1 className="text-white text-xl mt-10 font-bold">Acerca De Mi Nivel</h1>

    <p className="text-white text-xl mt-10 w-auto p-[15px] text-justify ">Actualmente mi nivel de ingles de grado B1, puesto que en el mundo del desarrollo es demasiado importante me estoy esforzando por conseguir un mayor nivel. Deseo llegar a C1 en algun futuro!</p>

    <h2 className="text-white text-2xl mt-15 font-black sm:2/1  text-center ">Diferencias Entre Los Niveles</h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 mt-5">
      
      {levels.map((column, columnIndex) => (
        
        <div key={columnIndex} className="flex flex-col gap-4">

          {column.map((item, index) => (
            
            <div key={index} className="bg-[#D1FAE5] p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
              <h2 className="text-xl font-bold text-black">{item.level} - {item.title}</h2>
              <p className="text-[#065F46] mt-2">{item.description}</p>
            
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
  );
};




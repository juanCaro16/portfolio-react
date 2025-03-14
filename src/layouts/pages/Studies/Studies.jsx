export const Studies = () => {
  const studies = [
    { icon: "🎓", title: "Bachillerato - INSTIUCION EDUCATIVA CIUDAD DORADA", description: "Educación secundaria completa con enfoque académico general." },
    { icon: "💻", title: "Técnico en Análisis y Desarrollo de Software - SENA", description: "Formación en diseño, desarrollo y mantenimiento de software." },
    { icon: "</>", title: "Fundamentos de Basicos JS Platzi", description: "Curso de introducción básica a JavaScript y lógica de programación." },
  ];

  return (
    <div className="w-11/12  min-h-screen max-w-screen-lg mx-auto p-4 sm:p-8 mt-20">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-white">
        📚 Mis Estudios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {studies.map((study, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 sm:p-6 bg-white shadow-md sm:shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="text-4xl sm:text-5xl mb-4">{study.icon}</div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black text-center">
              {study.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 text-center mt-2">
              {study.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TechnicalSkills = () => {
  const skills = [
    { icon: "⚡", title: "C#", level: "Básico" },
    { icon: "💻", title: "JavaScript", level: "Alto" },
    { icon: "🎨", title: "CSS", level: "Alto" },
    { icon: "🐍", title: "Python", level: "Intermedio" },
    { icon: "🌐", title: "PHP", level: "Intermedio" },
    { icon: "🗄️", title: "MySQL", level: "Intermedio" },
    { icon: "📘", title: "TailWind", level: "Alto"},
  ];

  const technologies = [
    "Desarrollo Web",
    "Visual Studio Code",
    "Visual Studio",
    "NetBeans",
    "MySQL Workbench",
    "MongoDB",
    "Git",
    "GitHub",
  ];
  
  return (
    <div className="w-3/4  mx-auto p-4 sm:h-screen">
      <h2 className="text-2xl font-bold text-center mb-4 text-white mt-10">🚀 Mis Conocimientos</h2>

      <h3 className="text-lg font-semibold text-center mb-2 mt-10 text-white">Lenguajes de Programación</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white shadow-md rounded-xl transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <h3 className="text-sm font-semibold text-black">{skill.title}</h3>
            <p className="text-xs text-gray-600">{"Nivel : " + skill.level}</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-center mb-2 text-white mt-20">Tecnologías y Herramientas</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white text-sm rounded-full shadow-md text-black"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}



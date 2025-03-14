import { Navbar } from '../../Navbar/Navbar';

export const SocialSkills = () => {
  const skills = [
    [
      { title: 'Puntualidad', description: 'Capacidad de llegar a tiempo a compromisos y respetar los horarios establecidos.' },
      { title: 'Comunicación Efectiva', description: 'Habilidad para transmitir ideas de manera clara y comprensible.' },
    ],
    [
      { title: 'Liderazgo', description: 'Capacidad de influir y motivar a otros para lograr objetivos comunes.' },
      { title: 'Honestidad', description: 'Actuar con transparencia, veracidad y ética en todas las interacciones.' },
    ],
    [
      { title: 'Respeto', description: 'Reconocer y valorar las opiniones, derechos y sentimientos de los demás.' },
      { title: 'Trabajo en Equipo', description: 'Colaborar eficazmente con otros para alcanzar metas compartidas.' },
    ],
  ];

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <div className="p-6 text-center mt-40">
        <h1 className="text-4xl font-bold mb-10">Mis Habilidades Sociales</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {skills.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-6">
              {column.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#D1FAE5] p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <h2 className="text-2xl font-bold text-black">{item.title}</h2>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
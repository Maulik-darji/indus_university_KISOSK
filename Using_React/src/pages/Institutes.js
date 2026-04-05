import React from 'react';

function Institutes() {
  const defaultInstitutes = [
    { id: 1, name: 'IITE – Indus Institute of Technology & Engineering', desc: 'Upgrading technical skills as per industry requirements.' },
    { id: 2, name: 'IAS – Indus Architecture School', desc: 'Shaping the built environment through excellence.' },
    { id: 3, name: 'IDS – Indus Design School', desc: 'Fostering creativity and innovation in specialized design.' },
    { id: 4, name: 'IIICT – Indus Institute of Info. & Comm. Technology', desc: 'Leading the way in computing and IT research.' },
    { id: 5, name: 'IIMS – Indus Institute of Management Studies', desc: 'Where Practice Meets Theory in business management.' },
    { id: 6, name: 'IISHLS – Indus Institute of Sci. Humanities & Lib. Studies', desc: 'Interdisciplinary pursuit of sciences and humanities.' },
    { id: 7, name: 'IISS – Indus Institute of Special Studies', desc: 'Integrating traditional values and ethos.' },
    { id: 8, name: 'IIPR – Indus Institute of Pharmacy and Research', desc: 'High-quality education in pharmaceutical sciences.' },
    { id: 9, name: 'IIATE – Indus Institute of Aviation Tech & Engineering', desc: 'Specialized training in aviation and aerospace.' },
    { id: 10, name: 'IAGNI – Indus Advance Green Nanotechnology Institute', desc: 'Cutting-edge research in sustainable nanotechnology.' },
  ];

  const [institutes, setInstitutes] = React.useState(() => {
    const saved = localStorage.getItem('indus_institutes');
    return saved ? JSON.parse(saved) : defaultInstitutes;
  });

  return (
    <div className="fade-in max-w-5xl">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Institutes</h1>
        <p className="text-lg text-gray-500">Centers of Excellence at Indus University</p>
      </header>

      <div className="space-y-4 py-2 max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">
        {institutes.map((inst, i) => (
          <div 
            key={i} 
            className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="institute-text">
              <h3 className="text-xl font-bold text-slate-900 mb-1">{inst.name}</h3>
              <p className="text-slate-500">{inst.desc}</p>
            </div>
            <div className="text-3xl text-brand-brown transition-all transform group-hover:translate-x-1">
              ›
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Institutes;

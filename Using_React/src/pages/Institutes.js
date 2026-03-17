import React from 'react';

function Institutes() {
  const institutes = [
    { name: 'IITE – Indus Institute of Technology & Engineering', desc: 'Upgrading technical skills as per industry requirements.' },
    { name: 'IAS – Indus Architecture School', desc: 'Shaping the built environment through excellence.' },
    { name: 'IDS – Indus Design School', desc: 'Fostering creativity and innovation in specialized design.' },
    { name: 'IIICT – Indus Institute of Info. & Comm. Technology', desc: 'Leading the way in computing and IT research.' },
    { name: 'IIMS – Indus Institute of Management Studies', desc: 'Where Practice Meets Theory in business management.' },
    { name: 'IISHLS – Indus Institute of Sci. Humanities & Lib. Studies', desc: 'Interdisciplinary pursuit of sciences and humanities.' },
    { name: 'IISS – Indus Institute of Special Studies', desc: 'Integrating traditional values and ethos.' },
    { name: 'IIPR – Indus Institute of Pharmacy and Research', desc: 'High-quality education in pharmaceutical sciences.' },
    { name: 'IIATE – Indus Institute of Aviation Tech & Engineering', desc: 'Specialized training in aviation and aerospace.' },
    { name: 'IAGNI – Indus Advance Green Nanotechnology Institute', desc: 'Cutting-edge research in sustainable nanotechnology.' },
  ];

  return (
    <div className="fade-in max-w-5xl">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Institutes</h1>
        <p className="text-lg text-gray-500">Centers of Excellence at Indus University</p>
      </header>

      <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-4 custom-scrollbar">
        {institutes.map((inst, i) => (
          <div 
            key={i} 
            className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center cursor-pointer hover:bg-brand-brown hover:border-brand-brown hover:shadow-xl hover:shadow-brand-brown/10 hover:translate-x-2 transition-all duration-300"
          >
            <div className="institute-text">
              <h3 className="text-xl font-bold group-hover:text-white transition-colors mb-1">{inst.name}</h3>
              <p className="text-gray-500 group-hover:text-white/80 transition-colors">{inst.desc}</p>
            </div>
            <div className="text-3xl text-brand-brown group-hover:text-white transition-all transform group-hover:translate-x-1">
              ›
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Institutes;

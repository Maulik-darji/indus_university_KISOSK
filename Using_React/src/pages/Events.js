import React from 'react';

function Events() {
  const events = [
    { 
      month: 'JAN', 
      day: '05', 
      title: 'INDUS CUP 2K26', 
      desc: 'Stand a Chance to Win Cash Prizes up to ₹10,00,000', 
      type: 'Sports Fest', 
      accent: 'border-l-orange-500', 
      textColor: 'text-orange-600' 
    },
    { 
      month: 'FEB', 
      day: '15', 
      title: 'Indus Hackathon 2025', 
      desc: 'Exhilarating one-day event organized by the CSE Department.', 
      type: 'Technical', 
      accent: 'border-l-blue-500', 
      textColor: 'text-blue-600', 
      badge: true 
    },
    { 
      month: 'APR', 
      day: '27', 
      title: 'ISTE State Convention', 
      desc: '26th ISTE Faculty Annual State Convention at Indus.', 
      type: 'Academic', 
      accent: 'border-l-brand-brown', 
      textColor: 'text-brand-brown' 
    },
  ];

  return (
    <div className="fade-in">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Activities & Events</h1>
        <p className="text-lg text-gray-500">Exciting life and opportunities at Indus University</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {events.map((e, i) => (
          <div 
            key={i} 
            className={`flex bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-[6px] ${e.accent}`}
          >
            {/* Left Date Section */}
            <div className="bg-gray-50 py-8 px-10 flex flex-col items-center justify-center border-r border-gray-100 min-w-[130px]">
              <span className="text-sm font-bold text-gray-400 tracking-wider mb-1">{e.month}</span>
              <span className="text-5xl font-black text-gray-800 leading-none">{e.day}</span>
            </div>
            
            {/* Right Info Section */}
            <div className="p-8 flex flex-col justify-center flex-1">
              <div className="flex items-center gap-3 mb-3">
                 <span className={`text-xs font-bold uppercase tracking-widest ${e.textColor} bg-gray-50 px-3 py-1 rounded-full border border-gray-100`}>
                   {e.type}
                 </span>
                 {e.badge && (
                   <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded leading-tight uppercase">Featured</span>
                 )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">{e.title}</h3>
              <p className="text-gray-500 leading-relaxed">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;

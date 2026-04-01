import React, { useState } from 'react';

function Programs() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'btech',
      label: 'B.Tech',
      badge: 'DEGREE',
      status: 'ADMISSION OPEN',
      color: 'border-blue-500',
      bgColor: 'bg-blue-500',
      lightBg: 'bg-blue-50',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      programs: [
        'Information & Communication Technology (ICT)',
        'Civil Engineering',
        'Automobile Engineering',
        'Mechanical Engineering',
        'Metallurgical Engineering',
        'Electrical Engineering',
        'Electronics & Communication Engineering',
        'Computer Engineering',
        'Cyber Security',
        'Information Technology',
        'Computer Science Engineering',
        'Aircraft Maintenance Engineering',
        'Aeronautical Engineering',
        'Aerospace Engineering',
        'Defence Aerospace Engineering'
      ]
    },
    {
      id: 'btech-dtd',
      label: 'B.Tech (D to D)',
      badge: 'LATERAL',
      status: 'OPEN',
      color: 'border-amber-700',
      bgColor: 'bg-amber-700',
      lightBg: 'bg-amber-50',
      icon: (
        <svg className="w-8 h-8 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      programs: [
        'Information & Communication Technology (ICT)',
        'Civil Engineering',
        'Automobile Engineering',
        'Mechanical Engineering',
        'Metallurgical Engineering',
        'Electrical Engineering',
        'Electronics & Communication Engineering',
        'Computer Engineering',
        'Cyber Security',
        'Information Technology',
        'Computer Science Engineering'
      ]
    },
    {
      id: 'diploma',
      label: 'Diploma',
      badge: 'TECHNICAL',
      status: 'NOW',
      color: 'border-orange-500',
      bgColor: 'bg-orange-500',
      lightBg: 'bg-orange-50',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040 12.02 12.02 0 00.3 9.342 12.01 12.01 0 002.398 3.7l6.404 6.404a1 1 0 001.414 0l6.404-6.404a12.01 12.01 0 002.398-3.7 12.02 12.02 0 00.3-9.342z" />
        </svg>
      ),
      programs: [
        'Information & Communication Technology (ICT)',
        'Civil Engineering',
        'Automobile Engineering',
        'Mechanical Engineering',
        'Computer Engineering',
        'Electrical Engineering',
        'Electronics & Communication Engineering'
      ]
    },
    {
      id: 'mtech',
      label: 'M.Tech',
      badge: 'MASTERS',
      status: 'NOW',
      color: 'border-red-600',
      bgColor: 'bg-red-600',
      lightBg: 'bg-red-50',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      programs: [
        'CAD / CAM (Mechanical Engr.)',
        'Construction Project Management (Civil Engg.)',
        'Digital Communication (EC Engg.)',
        'Electrical Power System',
        'Industrial Metallurgy',
        'Structural Engineering (Civil Engg.)',
        'Data Science (Computer)',
        'Cyber Security'
      ]
    },
    {
      id: 'bdes',
      label: 'B.Des',
      badge: 'DESIGN',
      status: 'CREATIVE',
      color: 'border-yellow-500',
      bgColor: 'bg-yellow-500',
      lightBg: 'bg-yellow-50',
      icon: (
        <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      programs: [
        'Product Design',
        'Interior Design',
        'Fashion Design',
        'Communication Design - (Graphic Design)'
      ]
    },
    {
      id: 'mdes',
      label: 'M.Des',
      badge: 'MASTERS',
      status: 'NOW',
      color: 'border-teal-600',
      bgColor: 'bg-teal-600',
      lightBg: 'bg-teal-50',
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.828 2.828a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      programs: [
        'Fashion Design',
        'Interior Design',
        'UI-UX Design'
      ]
    },
    {
      id: 'bsc',
      label: 'B.Sc',
      badge: 'SCIENCE',
      status: 'OPEN',
      color: 'border-blue-400',
      bgColor: 'bg-blue-400',
      lightBg: 'bg-blue-50',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547" />
        </svg>
      ),
      programs: [
        'Data Science',
        'Computer Application (CA) & (IT)',
        'Clinical Research (Hons)',
        'Mathematics (Hons)',
        'Physics (Hons)',
        'Chemistry (Hons)',
        'Cyber Security (Hons)',
        'Microbiology (Hons)',
        'Computer Science (AI & ML)'
      ]
    },
    {
      id: 'msc',
      label: 'M.Sc',
      badge: 'MASTERS',
      status: 'NOW',
      color: 'border-indigo-600',
      bgColor: 'bg-indigo-600',
      lightBg: 'bg-indigo-50',
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13" />
        </svg>
      ),
      programs: [
        'Information Technology (IT)',
        'Clinical Research',
        'Mathematics',
        'Physics',
        'Chemistry',
        'Cyber Security',
        'Microbiology'
      ]
    },
    {
      id: 'mba-avia',
      label: 'MBA/BBA',
      badge: 'BUSINESS',
      status: 'ACTIVE',
      color: 'border-purple-600',
      bgColor: 'bg-purple-600',
      lightBg: 'bg-purple-50',
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      programs: [
        'Aviation Management',
        'BBA',
        'Marketing',
        'Finance',
        'Human Resource'
      ]
    },
    {
      id: 'bca',
      label: 'BCA',
      badge: 'COMPUTER',
      status: 'OPEN',
      color: 'border-cyan-500',
      bgColor: 'bg-cyan-500',
      lightBg: 'bg-cyan-50',
      icon: (
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      programs: ['BCA']
    },
    {
      id: 'mca',
      label: 'MCA',
      badge: 'POST-GRAD',
      status: 'OPEN',
      color: 'border-rose-500',
      bgColor: 'bg-rose-500',
      lightBg: 'bg-rose-50',
      icon: (
        <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      programs: ['MCA']
    }
  ];

  if (!selectedCategory) {
    return (
      <div className="fade-in pb-20 max-w-full mx-auto px-4 md:px-8">
        {/* Admissions Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Academic Categories</h1>
        </div>

        {/* Categories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-h-[calc(100vh-250px)] overflow-y-auto pr-4 pt-8 custom-scrollbar">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => setSelectedCategory(cat)}
              className={`bg-white rounded-[2.5rem] p-14 shadow-[0_15px_50px_-20px_rgba(0,0,0,0.1)] border-t-8 ${cat.color} relative overflow-hidden group hover:shadow-2xl transition-all duration-500 cursor-pointer`}
            >
              {/* Badge */}
              <div className="absolute top-8 right-8">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest ${cat.lightBg} ${cat.color.replace('border-', 'text-')} opacity-90 uppercase border ${cat.color.replace('border-', 'border-')}/10`}>
                  {cat.status}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-20 h-20 ${cat.lightBg} rounded-[2rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                {cat.icon}
              </div>

              {/* Metadata */}
              <div className="text-[12px] font-black text-slate-400 tracking-[0.25em] mb-4 uppercase">
                {cat.badge} • PROGRAMS
              </div>

              {/* Category Name */}
              <h3 className="text-3xl font-black text-slate-900 leading-tight mb-4 tracking-tight">
                {cat.label}
              </h3>

              <div className="flex items-center text-slate-500 font-bold text-xs group-hover:text-slate-900 transition-colors">
                <span>EXPLORE COURSES</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Decorative Background */}
              <div className={`absolute -bottom-16 -right-16 w-40 h-40 ${cat.lightBg} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-700`}></div>
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <p className="mt-24 text-center text-slate-300 text-sm font-black tracking-widest uppercase italic border-t border-slate-100 pt-12">"Where Practice Meets Theory"</p>
      </div>
    );
  }

  return (
    <div className="fade-in pb-20 max-w-full mx-auto px-4 md:px-8">
      {/* Detail Header with Back Button */}
      <div className="mb-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <button 
          onClick={() => {
            setSelectedCategory(null);
            setSelectedProgram(null);
          }}
          className="flex items-center px-8 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:-translate-x-2 transition-all font-bold text-slate-600 group w-fit"
        >
          <svg className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO CATEGORIES
        </button>

        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* Search Bar */}
          <div className="relative group min-w-[300px]">
            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search programs..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none font-bold text-slate-700 transition-all placeholder:text-slate-300"
            />
          </div>

          <div className="text-right">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{selectedCategory.label} Courses</h1>
            <p className={`text-xl font-bold ${selectedCategory.color.replace('border-', 'text-')} mt-2 text-right`}>Available specializations & programs</p>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[calc(100vh-420px)] overflow-y-auto pr-4 pt-4 custom-scrollbar">
        {selectedCategory.programs
          .filter(prog => prog.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((prog, idx) => (
            <div 
              key={idx}
              className="bg-white p-10 rounded-[2.5rem] shadow-[0_15px_50px_-20px_rgba(0,0,0,0.05)] border border-slate-50 hover:shadow-2xl hover:border-blue-500/10 transition-all duration-500 group cursor-pointer relative overflow-hidden"
            >
              <div className="flex items-center relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${selectedCategory.lightBg} flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-500`}>
                  <div className={`w-3 h-3 rounded-full ${selectedCategory.bgColor} animate-pulse`}></div>
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 tracking-[0.2em] mb-1 uppercase">COURSE</div>
                  <h4 className="text-xl font-black text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">{prog}</h4>
                </div>
              </div>
              
              <div className="mt-8 flex items-center text-[10px] font-black text-slate-400 tracking-widest group-hover:text-slate-900 transition-colors uppercase">
                <span>Program Details</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>

              {/* Decorative background element */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${selectedCategory.lightBg} rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 blur-2xl`}></div>
            </div>
          ))}

        {selectedCategory.programs.filter(prog => prog.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
          <div className="col-span-full py-40 text-center bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-2 mt-10">No matching programs</h3>
            <p className="text-slate-400 font-bold">Try searching for another keyword</p>
          </div>
        )}
      </div>

      {/* Footer Quote */}
      <p className="mt-24 text-center text-slate-300 text-sm font-black tracking-widest uppercase italic border-t border-slate-100 pt-12">"Where Practice Meets Theory"</p>
    </div>
  );
}

export default Programs;

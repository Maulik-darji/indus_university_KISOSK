import React, { useState } from 'react';

function Programs({ setActivePage }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedDetailSection, setSelectedDetailSection] = useState('CURRICULUM & LEARNING');
  const [searchQuery, setSearchQuery] = useState('');
  const detailContentRef = React.useRef(null);

  const handleDetailClick = (id) => {
    setSelectedDetailSection(id);
    // Add a slight delay to ensure the content area is focused correctly
    setTimeout(() => {
      detailContentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  // Common B.Tech Eligibility (applied to all B.Tech except D2D)
  const commonBtechEligibility = {
    sections: [
      {
        title: 'Eligibility Criteria',
        items: ['10 + 2 SCIENCE WITH MIN 45% IN PCM OR EQUIVALENT FROM A RECOGNIZED BOARD']
      },
      {
        title: 'Program Duration',
        items: ['4 Years (8 Semesters)']
      }
    ],
    showApply: true
  };

  const commonBtechFees = {
    sections: [
      {
        title: 'Academic Fees Structure',
        items: ['Total 1st Semester Fees: ₹60,220']
      }
    ]
  };

  const programData = {
    'Information & Communication Technology (ICT)': {
      'CURRICULUM & LEARNING': {
        sections: [
          {
            title: 'Core Technical Areas',
            items: ['Data management', 'Networking and protocols', 'Software development', 'Programming languages']
          },
          {
            title: 'Advanced / Emerging Areas',
            items: ['Artificial Intelligence', 'Cybersecurity', 'Blockchain', 'Internet of Things']
          }
        ]
      },
      'INDUSTRY EXPOSURE': {
        sections: [
          {
            title: 'Indus try Exposure & Practical Learning',
            items: ['Hands-on laboratory sessions', 'Industry visits', 'Technical workshops', 'Project-based learning']
          }
        ]
      },
      'CAREER PROSPECTS': {
        sections: [
          {
            title: 'Job Roles',
            items: ['Digital Technology Engineer', 'Network Planning Engineer', 'Cybersecurity Analyst', 'Service Engineer', 'Robotics Engineer']
          },
          {
            title: 'Career Sectors',
            items: ['IT services', 'Telecommunications', 'Software development', 'Healthcare IT']
          }
        ]
      },
      'WHY CHOOSE US': {
        sections: [
          {
            title: 'Why Choose This Program at Indus University',
            items: [
              'Industry-oriented curriculum',
              'Practical learning environment',
              'Exposure to emerging ICT technologies',
              'Holistic technical development'
            ]
          }
        ]
      },
      'ELIGIBILITY': commonBtechEligibility,
      'FEES STRUCTURE': commonBtechFees,
      'ADMISSION': {
        sections: [
          {
            title: 'Admission Process',
            items: [
              'Admissions are conducted as per guidelines of the Admission Committee for Professional Courses (ACPC) and university norms.',
              'A portion of seats is filled through centralized merit-based admission, while remaining seats are filled under Management Quota as per applicable regulations.'
            ]
          }
        ],
        showApply: true
      }
    },
    // Applying common B.Tech eligibility to other engineering programs
    'Civil Engineering': { 'ELIGIBILITY': commonBtechEligibility, 'FEES STRUCTURE': commonBtechFees },
    'Automobile Engineering': { 'ELIGIBILITY': commonBtechEligibility, 'FEES STRUCTURE': commonBtechFees },
    'Mechanical Engineering': { 'ELIGIBILITY': commonBtechEligibility, 'FEES STRUCTURE': commonBtechFees },
    'Metallurgical Engineering': { 'ELIGIBILITY': commonBtechEligibility, 'FEES STRUCTURE': commonBtechFees },
    'Electrical Engineering': { 'ELIGIBILITY': commonBtechEligibility, 'FEES STRUCTURE': commonBtechFees },
    'Electronics & Communication Engineering': { 'ELIGIBILITY': commonBtechEligibility, 'FEES STRUCTURE': commonBtechFees },
    'Computer Engineering': { 'ELIGIBILITY': commonBtechEligibility, 'FEES STRUCTURE': commonBtechFees },
    'Cyber Security': { 'ELIGIBILITY': commonBtechEligibility, 'FEES STRUCTURE': commonBtechFees },
    'Information Technology': { 'ELIGIBILITY': commonBtechEligibility, 'FEES STRUCTURE': commonBtechFees },
    'Computer Science Engineering': { 'ELIGIBILITY': commonBtechEligibility, 'FEES STRUCTURE': commonBtechFees },
    'Aircraft Maintenance Engineering': { 'ELIGIBILITY': commonBtechEligibility, 'FEES STRUCTURE': commonBtechFees },
    'Aeronautical Engineering': { 'ELIGIBILITY': commonBtechEligibility, 'FEES STRUCTURE': commonBtechFees },
    'Aerospace Engineering': { 'ELIGIBILITY': commonBtechEligibility, 'FEES STRUCTURE': commonBtechFees },
    'Defence Aerospace Engineering': { 'ELIGIBILITY': commonBtechEligibility, 'FEES STRUCTURE': commonBtechFees }
  };

  const categories = [
    {
      id: 'btech',
      label: 'B.Tech',
      badge: 'DEGREE',
      color: 'border-blue-500',
      bgColor: 'bg-blue-500',
      lightBg: 'bg-blue-50',
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
      color: 'border-amber-700',
      bgColor: 'bg-amber-700',
      lightBg: 'bg-amber-50',
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
      color: 'border-orange-500',
      bgColor: 'bg-orange-500',
      lightBg: 'bg-orange-50',
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
      color: 'border-red-600',
      bgColor: 'bg-red-600',
      lightBg: 'bg-red-50',
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
      color: 'border-yellow-500',
      bgColor: 'bg-yellow-500',
      lightBg: 'bg-yellow-50',
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
      color: 'border-teal-600',
      bgColor: 'bg-teal-600',
      lightBg: 'bg-teal-50',
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
      color: 'border-blue-400',
      bgColor: 'bg-blue-400',
      lightBg: 'bg-blue-50',
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
      color: 'border-indigo-600',
      bgColor: 'bg-indigo-600',
      lightBg: 'bg-indigo-50',
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
      color: 'border-purple-600',
      bgColor: 'bg-purple-600',
      lightBg: 'bg-purple-50',
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
      color: 'border-cyan-500',
      bgColor: 'bg-cyan-500',
      lightBg: 'bg-cyan-50',
      programs: ['BCA']
    },
    {
      id: 'mca',
      label: 'MCA',
      badge: 'POST-GRAD',
      color: 'border-rose-500',
      bgColor: 'bg-rose-500',
      lightBg: 'bg-rose-50',
      programs: ['MCA']
    }
  ];

  if (!selectedCategory) {
    return (
      <div className="w-full flex-1 h-full overflow-hidden p-6 md:p-10 lg:p-12 pb-24 md:pb-24 fade-in">
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
              {/* Metadata */}
              <div className="text-[12px] font-black text-slate-400 tracking-[0.25em] mb-4 uppercase mt-2">
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
    <div className="w-full">
      <div className="w-full flex-1 h-full overflow-hidden p-6 md:p-10 lg:p-12 pb-24 md:pb-24 fade-in">
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
              onClick={() => setSelectedProgram(prog)}
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

    </div>

    {/* Program Details Sidebar */}
    {selectedProgram && (
      <div 
        className="fixed left-0 md:left-64 right-0 top-0 bottom-0 z-[100] flex justify-end"
        aria-labelledby="slide-over-title" 
        role="dialog" 
        aria-modal="true"
      >
        {/* Backdrop Overlay */}
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity duration-500 opacity-100" 
          onClick={() => setSelectedProgram(null)}
        ></div>

        {/* Slide-over panel */}
        <div className="relative w-full max-w-2xl bg-[#fcfbf9] shadow-[-20px_0_80px_-20px_rgba(0,0,0,0.3)] h-full slide-in-right overflow-hidden flex flex-col">
          {/* Header / Top Bar */}
          <div className="px-14 pt-16 pb-6 flex justify-between items-start sticky top-0 bg-[#fcfbf9]/80 backdrop-blur-xl z-20">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-blue-50 rounded-full border border-blue-100 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                <span className="text-[10px] font-black text-blue-600 tracking-[0.2em] uppercase">Program Spectrum</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 leading-tight mb-1">{selectedProgram}</h2>
              <p className="text-[13px] text-slate-400 font-bold opacity-80 tracking-tight">Academic Methodology & Specialization Insights</p>
            </div>
            
            <button 
              onClick={() => setSelectedProgram(null)}
              className="mt-2 p-5 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl hover:scale-110 active:scale-95 transition-all group"
            >
              <svg className="w-8 h-8 text-slate-400 group-hover:text-slate-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main Content Area - Grid of Detail Squares */}
          <div className="flex-1 overflow-y-auto custom-scrollbar px-14 pb-24">
            <div className="grid grid-cols-3 gap-4 pt-8 pb-4 max-w-[90%]">
              {[
                { title: 'CURRICULUM & LEARNING', color: 'bg-[#ffae4f]', id: 'CURRICULUM & LEARNING' },
                { title: 'INDUSTRY EXPOSURE', color: 'bg-[#c9d09e]', id: 'INDUSTRY EXPOSURE' },
                { title: 'CAREER PROSPECTS', color: 'bg-[#ff7a4d]', id: 'CAREER PROSPECTS' },
                { title: 'WHY CHOOSE US', color: 'bg-[#ffae4f]', id: 'WHY CHOOSE US' },
                { title: 'ELIGIBILITY', color: 'bg-[#c9d09e]', id: 'ELIGIBILITY' },
                { title: 'ADMISSION', color: 'bg-[#ff7a4d]', id: 'ADMISSION' },
                { title: 'FEES STRUCTURE', color: 'bg-[#ffae4f]', id: 'FEES STRUCTURE', shadow: true, pointer: true }
              ].map((item, i) => (
                <div 
                  key={i}
                  onClick={() => handleDetailClick(item.id)}
                  className={`
                    relative aspect-square p-4 flex flex-col items-center justify-center text-center
                    rounded-[2rem] cursor-pointer transition-all duration-500 group
                    hover:scale-[1.02] hover:-translate-y-2
                    ${item.color} 
                    ${selectedDetailSection === item.id ? 'shadow-2xl scale-[1.03] -translate-y-1 z-10' : 'shadow-sm hover:shadow-xl hover:z-10'}
                    ${item.shadow ? 'shadow-[0_15px_35px_rgba(255,122,77,0.3)]' : ''}
                  `}
                >
                  <h3 className="text-[16px] font-bold text-slate-900 leading-tight">
                    {item.title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}
                  </h3>
                </div>
              ))}
            </div>

            {/* Detail Content (Populated with actual data) */}
            <div ref={detailContentRef} className="mt-2 p-10 bg-white rounded-[2.5rem] border border-slate-100 min-h-[400px] shadow-sm relative overflow-hidden">
               {programData[selectedProgram] && programData[selectedProgram][selectedDetailSection] ? (
                 <div className="fade-in">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">
                      {selectedDetailSection === 'CURRICULUM & LEARNING' ? 'Curriculum & Learning Areas' : 
                       selectedDetailSection === 'INDUSTRY EXPOSURE' ? 'Industry Exposure & Practical Learning' : 
                       selectedDetailSection === 'CAREER PROSPECTS' ? 'Career Opportunities' :
                       selectedDetailSection === 'ADMISSION' ? 'Admission Process' :
                       selectedDetailSection}
                    </h3>
                    <div className="space-y-8">
                      {programData[selectedProgram][selectedDetailSection].sections.map((section, idx) => (
                        <div key={idx}>
                          <h4 className="font-bold text-slate-800 text-xl mb-4 tracking-tight">
                            {section.title}
                          </h4>
                          
                          <ul className="space-y-3 ml-2">
                            {section.items.map((item, i) => (
                              <li key={i} className="flex items-start text-[16px] text-slate-600 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 mr-4 opacity-80 shrink-0"></span>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                 </div>
               ) : (
                 <div className="h-full flex flex-col items-center justify-center text-center opacity-40 py-20">
                    <svg className="w-16 h-16 text-slate-200 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[18px] text-slate-400 font-bold italic leading-relaxed">
                      Detailed information for "{selectedDetailSection}" <br/> is being updated for {selectedProgram}.
                    </p>
                 </div>
               )}
            </div>
          </div>

          {/* Bottom Contact / Action Bar */}
          <div className="p-10 bg-white border-t border-slate-100 flex items-center justify-between pb-16">
            <div>
              <p className="text-[9px] font-black text-slate-400 tracking-[0.2em] uppercase mb-1">Inquiry Support</p>
              <p className="text-base font-bold text-slate-900">+91 74054 13342</p>
            </div>
            <button 
              onClick={() => {
                if(setActivePage) setActivePage('admission');
              }}
              className="px-8 py-3.5 bg-[#ff4d20] text-white text-[12px] font-black uppercase tracking-widest rounded-xl shadow-[0_10px_25px_rgba(255,77,32,0.3)] hover:scale-105 active:scale-95 transition-all"
            >
              Apply Now
            </button>
          </div>

        </div>
      </div>
      )}
    </div>
  );
}

export default Programs;

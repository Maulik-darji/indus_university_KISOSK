import React, { useState } from 'react';
import drRituBhandariImg from '../images/Indus university Governance Image/dr-ritu-bhandari.webp';
import drNageshBhandariImg from '../images/Indus university Governance Image/dr-nagesh-bhandari.webp';
import sandeepChakravortyImg from '../images/Indus university Governance Image/sandeep-chakravorty.webp';
import drRKSinghImg from '../images/Indus university Governance Image/dr-r-k-singh.webp';
import suketuJaniImg from '../images/Indus university Governance Image/suketu-jani.webp';

function About() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { title: 'Governance', content: 'Information regarding the leadership and administrative structure of the university.', icon: '' },
    { title: 'Awards and Recognition', content: 'Discover our accreditations, rankings, and major achievements.', icon: '' },
    { title: 'Committees', content: 'Details about various institutional committees and their organizational functions.', icon: '' },
    { title: 'Public Self Disclosure / Mandatory Disclosure', content: 'Official public details, compliance records, and mandatory statutory disclosures.', icon: '' },
  ];

  if (selectedCard === 'Governance') {
    return (
      <div className="fade-in h-full overflow-y-auto custom-scrollbar pr-2 md:pr-4 pb-10 flex flex-col" style={{ maxHeight: 'calc(100vh - 120px)' }}>
        <div className="mb-10 shrink-0">
          <button 
            onClick={() => setSelectedCard(null)}
            className="flex items-center px-5 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all font-bold text-gray-600 group w-fit"
          >
            <svg className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            BACK
          </button>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 uppercase tracking-wide shrink-0">INDUS UNIVERSITY GOVERNANCE</h1>

        <div className="w-[calc(100%+3rem)] -mx-6 md:-mx-10 lg:-mx-12 bg-[#d3d3d3] py-16 px-10 md:px-24 flex flex-col md:flex-row items-center md:items-start gap-12 flex-none">
          {/* Image */}
          <div className="w-[300px] h-[340px] shrink-0 shadow-sm overflow-hidden flex items-center justify-center">
             <img src={drRituBhandariImg} alt="Dr. Ritu Bhandari" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1 mt-4 md:mt-2">
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Dr. Ritu Bhandari</h2>
             <h3 className="text-sm md:text-base font-bold text-brand-brown mb-6 tracking-wider uppercase">Presidential Secretariat</h3>
             <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify">
               Studied and trained in management for several years and is interested in human psychology. She has oriented high morale measures for every family member of INDUS University. She believes in encouraging the standard of education and discipline to foster our country's quality and cultural life. Her education, experience, and personal attributes offer 360-degree development to the professionals and students.
             </p>
          </div>
        </div>

        <div className="w-[calc(100%+3rem)] -mx-6 md:-mx-10 lg:-mx-12 bg-white py-16 px-10 md:px-24 flex flex-col-reverse md:flex-row items-center md:items-start gap-12 flex-none border-b border-gray-100">
          <div className="flex-1 mt-4 md:mt-2">
             <div className="text-right">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Dr. Nagesh Bhandari</h2>
               <h3 className="text-sm md:text-base font-bold text-brand-brown mb-6 tracking-wider uppercase">Presidential Secretariat</h3>
             </div>
             <div className="space-y-5 text-base md:text-lg text-gray-800 leading-relaxed text-left">
               <p>
                 Indus management, staff & students are honored to have Dr. Nagesh Bhandari as part of the Presidential Secretariat of Indus University. He is a Doctor by profession, a Spine Surgery Specialist. He earned his medical degree from the globally acclaimed spine center 'Rehabilitations Krankenhaus,' Germany. Furthermore, Dr. Bhandari has been trained under the guidance of Professor J. Hans, the world-famous spine surgeon.
               </p>
               <p>
                 Dr. Nagesh has shared the space with the world's celebrated spine surgeons in his comprehensive career as a spine specialist. He has worked with some surgeons across the globe - Dr. C. S Ranawat (from the USA), Dr. Peter Fowler (from Canada), Dr. H. W Pia (from Germany), Professor B. G Weber (from Switzerland), and Professor M. Michon (from France). Furthermore, he worked as a visiting doctor in leading hospitals of Ahmedabad and Indore.
               </p>
               <p>
                 Talking about his contributions in the field of Research, Dr. Bhandari has contributed immensely at national and international levels. Dr. Bhandari is a recipient of the Gold Medal for the 'Best Poster' presentation at the 40th Annual Conference of Indian Orthopedic Association, held in Ahmedabad in 2001.
               </p>
               <p>
                 Dr. Nagesh has also significantly contributed to developing novel instrumentation systems, eventually adding to the cost-effective treatment procedures in his chosen field. He is actively involved in philanthropic and charity works through Bhandari Charitable Trust. Dr. Bhandari is also the founder of Ahmedabad Aviation Aeronautics Ltd & Western India Institute of Aeronautics at Ahmedabad.
               </p>
             </div>
          </div>

          <div className="w-[300px] h-[340px] shrink-0 shadow-sm overflow-hidden flex items-center justify-center">
             <img src={drNageshBhandariImg} alt="Dr. Nagesh Bhandari" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="w-[calc(100%+3rem)] -mx-6 md:-mx-10 lg:-mx-12 bg-[#d3d3d3] py-16 px-10 md:px-24 flex flex-col md:flex-row items-center md:items-start gap-12 flex-none">
          <div className="w-[300px] h-[340px] shrink-0 shadow-sm overflow-hidden flex items-center justify-center">
             <img src={sandeepChakravortyImg} alt="Prof. (Dr.) Sandeep Chakravorty" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1 mt-4 md:mt-2">
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Prof. (Dr.) Sandeep Chakravorty</h2>
             <h3 className="text-sm md:text-base font-bold text-brand-brown mb-6 tracking-wider uppercase">Executive President</h3>
             <div className="space-y-5 text-base md:text-lg text-gray-800 leading-relaxed text-left">
               <p>
                 Prof. (Dr.) Sandeep Chakravorty is Ph.D in (Power System), M.E. Software Engineering from Birla Institute of Technology, Mesra, and Gold Medalist in B.E Electrical and Electronics Engineering. He is an able academician and administrator, he aims to lead with sustained emphasis and strategic focus on progressive initiatives to fulfill the vision and mission of the University with the up-gradation of the competitive, educational and qualitative professional indices in an enabling environment.
               </p>
               <p>
                 He has contributed to the field of Power System Planning, Multi-Criteria Decision Making Tools, and Soft Computing and have published articles in refreed journals and conferences.
               </p>
               <p>
                 He is also in the advising and reviewing committee of many International and National Journals. His other notable achievements include framing of Industry oriented courses, design and installation of PV stand-alone systems, etc. He is an active member of several professional bodies, including the Institute of Electronics and Telecommunication Engineers (IETE) and the Institute of Electrical and Electronics Engineers (IEEE).
               </p>
             </div>
          </div>
        </div>

        <div className="w-[calc(100%+3rem)] -mx-6 md:-mx-10 lg:-mx-12 bg-white py-16 px-10 md:px-24 flex flex-col-reverse md:flex-row items-center md:items-start gap-12 flex-none border-b border-gray-100">
          <div className="flex-1 mt-4 md:mt-2">
             <div className="text-right">
               <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Dr. R.K. Singh</h2>
               <h3 className="text-sm md:text-base font-bold text-brand-brown mb-6 tracking-wider uppercase">Registrar</h3>
             </div>
             <div className="space-y-5 text-base md:text-lg text-gray-800 leading-relaxed text-left">
               <p>
                 Dr. R.K. Singh is a Science Graduate from Gujarat University with a Master's Degree in Business Administration (MBA) with an HR specialization. He is also the holder of a Doctorate Degree (Ph.D) in Management.
               </p>
               <p>
                 Over 3 decades of experience, he has held top management and administrative positions in esteemed organizations in his comprehensive career span. At Indus, he has been an integral part of administration and management. His expertise over the years has been mainly in academic administration. He has co-authored half a dozen publications and has attended many national and international conferences.
               </p>
               <p>
                 Dr. R.K. Singh has in-depth knowledge of higher education rules, regulations, practices, and conventions advocated by agencies such as the University Grants Commission, All India Council for Technical Education, National Board of Accreditation, National Assessment and Accreditation Council, and other regulations bodies.
               </p>
               <p>
                 Dr. Singh is an outstanding institution builder actively engaged in establishing a modern setup to be on par with global trends about academia. Besides, he is involved in coordination and liaison with other educational institutions.
               </p>
             </div>
          </div>

          <div className="w-[300px] h-[340px] shrink-0 shadow-sm overflow-hidden flex items-center justify-center">
             <img src={drRKSinghImg} alt="Dr. R.K. Singh" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="w-[calc(100%+3rem)] -mx-6 md:-mx-10 lg:-mx-12 bg-[#d3d3d3] py-16 px-10 md:px-24 flex flex-col md:flex-row items-center md:items-start gap-12 flex-none">
          <div className="w-[300px] h-[340px] shrink-0 shadow-sm overflow-hidden flex items-center justify-center">
             <img src={suketuJaniImg} alt="Dr. Suketu Jani" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1 mt-4 md:mt-2">
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Dr. Suketu Jani</h2>
             <h3 className="text-sm md:text-base font-bold text-brand-brown mb-6 tracking-wider uppercase">Deputy Registrar</h3>
             <div className="space-y-5 text-base md:text-lg text-gray-800 leading-relaxed text-left">
               <p>
                 Dr. Suketu Jani currently serves as the Deputy Registrar at Indus University, where he plays a pivotal role in managing admissions, human resources, recruitment, training and placement, and student discipline, including the enforcement of the university's code of conduct. With a robust administrative and academic presence,
               </p>
               <p>
                 Dr. Jani acts as a key liaison between the university and various external agencies, ensuring smooth coordination and institutional compliance.
               </p>
               <p>
                 Dr. Jani brings over 17 years of combined experience in teaching and academic administration, all of which he has dedicated to Indus University. He holds a Bachelor's, Master's, and Ph.D. in Mechanical Engineering, and is a certified Green Belt in Lean Six Sigma as well as a Lead Auditor for ISO 9001:2008.
               </p>
               <p>
                 A prolific contributor to academic research, Dr. Jani has authored more than 20 research papers published in national and international journals and conferences. He also serves as a Ph.D. supervisor in the disciplines of Mechanical Engineering, Automobile Engineering, and Quality Management at Indus University, mentoring emerging scholars and professionals.
               </p>
               <p>
                 Known for his dynamic leadership and multi-functional expertise, Dr. Jani continues to play an integral role in shaping academic excellence and operational efficiency at Indus University.
               </p>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in h-full overflow-y-auto custom-scrollbar pr-2 md:pr-4 pb-10" style={{ maxHeight: 'calc(100vh - 120px)' }}>
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">About Indus University</h1>
        <p className="text-lg text-gray-500">Knowledge Enlightens the World</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => setSelectedCard(card.title)}>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">{card.content}</p>
            </div>
            <button className="py-2.5 px-4 text-sm border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-brand-brown hover:text-white hover:border-brand-brown transition-all w-full text-center">
              Discover More
            </button>
          </div>
        ))}
      </div>

      {/* Detailed Information Section */}
      <div className="bg-white p-10 md:p-14 rounded-3xl shadow-sm border border-gray-100">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Courses Indus Offers</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The aspirants are bestowed with manifold courses to choose from. Undergraduate and postgraduate courses are available in the following areas:
          </p>
          <p className="text-sm font-semibold text-gray-800 leading-relaxed bg-brand-light p-5 rounded-2xl">
            Engineering <span className="text-brand-brown mx-2">•</span> 
            Design & Architecture <span className="text-brand-brown mx-2">•</span> 
            Computer Science <span className="text-brand-brown mx-2">•</span> 
            Business Management <span className="text-brand-brown mx-2">•</span> 
            Aviation Technology <span className="text-brand-brown mx-2">•</span> 
            Clinical Research <span className="text-brand-brown mx-2">•</span> 
            Skill Development <span className="text-brand-brown mx-2">•</span> 
            Indology <span className="text-brand-brown mx-2">•</span> 
            Indic studies <span className="text-brand-brown mx-2">•</span> 
            Sustainability <span className="text-brand-brown mx-2">•</span> 
            Arts and Humanities <span className="text-brand-brown mx-2">•</span> 
            Commerce <span className="text-brand-brown mx-2">•</span> 
            Pharmaceutical Science <span className="text-brand-brown mx-2">•</span> 
            Pure Science <span className="text-brand-brown mx-2">•</span> 
            Applied Science <span className="text-brand-brown mx-2">•</span> 
            Legal Education
          </p>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Management Mission</h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Vision of the University</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
              <li>To be an internationally acclaimed university, amongst our country's best universities for Academic Excellence, Professional Relevance, Research & Innovation.</li>
              <li>To seamlessly integrate Indian Values & Global Ethos.</li>
              <li>To foster a culture of educational wisdom, professional brilliance, and research & innovation.</li>
              <li>To nurture a spirit of entrepreneurship and social responsibility.</li>
              <li>To develop a competent, mindful and devoted to the common good.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Mission of the University</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
              <li>To offer quality technical and management education to its community members in the best traditions of the creative and innovative teaching learning process.</li>
              <li>We encompass the philosophy "Where Practice Meets Theory" by ensuring State-of-the-Art infrastructure and attracting talented and qualified human resources.</li>
              <li>Believing in extensive growth, noticeable steps are taken whenever required to prepare students for the commercial industry worldwide.</li>
              <li>To encapsulate, Indus looks forward to meeting the standard global criteria, making a significant impact in academia, research & development.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Objectives of the University</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
              <li>To build an environment that fosters the development of brilliant young minds as innovators and entrepreneurs.</li>
              <li>To build an infrastructure that promotes the highest standards of research & innovation.</li>
              <li>To share learning through a simple teaching process IDEA-R - Illustration, Dissection, Exposition, Analysis & Reciprocation.</li>
              <li>To offer courses that further contribute to society and the country's requirements.</li>
              <li>To act as a catalyst between the industry, students, alumni and faculty members, maintaining balance.</li>
              <li>To continue upgrading course curriculum and regular academic auditing processes & procedures to meet skilled human resource requirements.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ideology</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed">
              <li>High-quality education and a passionate profession make a person a complete professional.</li>
              <li>Keeping this view in mind, Indus University has embarked on an evolved path to provide professional education in diverse disciplines of Engineering, Management, Computer Applications, Architecture, Aviation Technology & Information Technology.</li>
              <li>We ensure that the successful students of these programs translate themselves into professionals.</li>
              <li>Course curriculum related to practice is returned following the theory concerning all the programs offered in the University.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;

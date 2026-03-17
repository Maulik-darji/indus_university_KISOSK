import React from 'react';

function About() {
  const cards = [
    { title: 'Our Vision', content: 'To be a globally recognized university contributing to society through innovative education and research.', icon: '' },
    { title: 'Our Mission', content: 'Where Practice Meets Theory - Bridging the gap between academic knowledge and industry demands.', icon: '' },
    { title: 'Core Values', content: 'Excellence, Integrity, Sustainability, and Social Responsibility in every step we take.', icon: '' },
    { title: 'Research Excellence', content: 'Empowering students and faculty to explore the unknown and create meaningful impact.', icon: '' },
  ];

  return (
    <div className="fade-in">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">About Indus University</h1>
        <p className="text-lg text-gray-500">Knowledge Enlightens the World</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="text-4xl mb-6 bg-brand-light w-16 h-16 flex items-center justify-center rounded-2xl">{card.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{card.content}</p>
            </div>
            <button className="py-3 px-6 border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-brand-brown hover:text-white hover:border-brand-brown transition-all">
              Discover More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Admission from './pages/Admission';
import Programs from './pages/Programs';
import Institutes from './pages/Institutes';
import Events from './pages/Events';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'admission':
        return <Admission />;
      case 'about':
        return <About />;
      case 'programs':
        return <Programs setActivePage={setActivePage} />;
      case 'institutes':
        return <Institutes />;
      case 'events':
        return <Events />;
      case 'map':
        return (
          <div className="fade-in">
            <h2 className="text-3xl font-bold mb-6">Campus Map</h2>
            <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center text-gray-500 italic">
              Interactive Map Loading...
            </div>
          </div>
        );
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full overflow-hidden bg-brand-light">
      {/* Mobile Top Bar */}
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 md:hidden sticky top-0 z-50">
        <div className="font-bold text-gray-900 tracking-tight">INDUS UNIVERSITY</div>
        <button 
          className="p-2 text-2xl hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsSidebarOpen(true)}
        >
          &#9776;
        </button>
      </header>

      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen}
      />

      <main className="flex-1 h-full w-full overflow-hidden p-6 md:p-10 lg:p-12 pb-24 md:pb-24">
        <div className="w-full max-w-full mx-auto">
          {renderPage()}
        </div>
      </main>

      {/* Ticker */}
      <div className="fixed bottom-0 left-0 md:left-64 right-0 bg-white border-t border-gray-200 h-14 overflow-hidden flex items-center shadow-[0_-4px_10px_rgba(0,0,0,0.03)]">
        <div className="animate-scroll whitespace-nowrap px-4 font-medium text-gray-700">
          <span className="inline-block mr-12 text-brand-brown">⭐ INDUS CUP 2K26! Win Cash Prizes up to ₹10,00,000! ⭐</span>
          <span className="inline-block mr-12 text-blue-600">🚀 Hackathon 2025 by CSE Department - Register Now! 🚀</span>
          <span className="inline-block mr-12 text-brand-brown">⭐ INDUS CUP 2K26! Win Cash Prizes up to ₹10,00,000! ⭐</span>
          <span className="inline-block mr-12 text-blue-600">🚀 Hackathon 2025 by CSE Department - Register Now! 🚀</span>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { PageType, SchoolPhoto } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PhotoModal } from './components/PhotoModal';
import { HomePage } from './pages/HomePage';
import { InfraestructuraPage } from './pages/InfraestructuraPage';
import { ProyectosPage } from './pages/ProyectosPage';
import { ClubsPage } from './pages/ClubsPage';
import { ConocenosPage } from './pages/ConocenosPage';
import { UbicacionPage } from './pages/UbicacionPage';
import { DiagnosticoPage } from './pages/DiagnosticoPage';
import { PresentacionPage } from './pages/PresentacionPage';
import { ExcelPage } from './pages/ExcelPage';
import { Home, Building2, Sparkles, Users, FileSpreadsheet, MapPin } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('inicio');
  const [selectedPhoto, setSelectedPhoto] = useState<SchoolPhoto | null>(null);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPhoto = (photo: SchoolPhoto) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Barra de Navegación Principal */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
      />

      {/* Contenido Principal según la Página / Subpágina Seleccionada */}
      <main className="flex-1">
        {currentPage === 'inicio' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onSelectPhoto={handleSelectPhoto} 
          />
        )}

        {currentPage === 'infraestructura' && (
          <InfraestructuraPage 
            onSelectPhoto={handleSelectPhoto} 
          />
        )}

        {currentPage === 'proyectos' && (
          <ProyectosPage />
        )}

        {currentPage === 'clubs' && (
          <ClubsPage 
            onSelectPhoto={handleSelectPhoto} 
          />
        )}

        {currentPage === 'conocenos' && (
          <ConocenosPage 
            onSelectPhoto={handleSelectPhoto} 
          />
        )}

        {currentPage === 'ubicacion' && (
          <UbicacionPage 
            onSelectPhoto={handleSelectPhoto} 
          />
        )}

        {currentPage === 'diagnostico' && (
          <DiagnosticoPage />
        )}

        {currentPage === 'presentacion' && (
          <PresentacionPage />
        )}

        {currentPage === 'excel' && (
          <ExcelPage />
        )}
      </main>

      {/* Modal de Pantalla Completa para Fotografías del Plantel */}
      <PhotoModal 
        photo={selectedPhoto} 
        onClose={() => setSelectedPhoto(null)} 
      />

      {/* Pie de Página Institucional */}
      <Footer onNavigate={handleNavigate} />

      {/* Barra Rápida Flotante Inferior para Móviles */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 px-2 py-1.5 shadow-lg flex items-center justify-around">
        <button
          onClick={() => handleNavigate('inicio')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
            currentPage === 'inicio' ? 'text-red-700 font-bold' : 'text-stone-500'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Inicio</span>
        </button>

        <button
          onClick={() => handleNavigate('infraestructura')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
            currentPage === 'infraestructura' ? 'text-red-700 font-bold' : 'text-stone-500'
          }`}
        >
          <Building2 className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Infra</span>
        </button>

        <button
          onClick={() => handleNavigate('proyectos')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
            currentPage === 'proyectos' ? 'text-amber-600 font-bold' : 'text-stone-500'
          }`}
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">PAEC</span>
        </button>

        <button
          onClick={() => handleNavigate('clubs')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
            currentPage === 'clubs' ? 'text-red-700 font-bold' : 'text-stone-500'
          }`}
        >
          <Users className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Clubs</span>
        </button>

        <button
          onClick={() => handleNavigate('excel')}
          className={`flex flex-col items-center py-1 px-2 rounded-xl transition-colors cursor-pointer ${
            currentPage === 'excel' ? 'text-emerald-700 font-bold' : 'text-stone-500'
          }`}
        >
          <FileSpreadsheet className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Excel</span>
        </button>
      </div>
    </div>
  );
}

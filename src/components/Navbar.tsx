import React, { useState } from 'react';
import { 
  Building2, 
  Sparkles, 
  Users, 
  PhoneCall, 
  MapPin, 
  BarChart3, 
  Presentation, 
  FileSpreadsheet, 
  Menu, 
  X, 
  ChevronDown,
  Home
} from 'lucide-react';
import { PageType } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [proyectosDropdownOpen, setProyectosDropdownOpen] = useState(false);
  const [clubsDropdownOpen, setClubsDropdownOpen] = useState(false);
  const [documentosDropdownOpen, setDocumentosDropdownOpen] = useState(false);

  const handleNav = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setProyectosDropdownOpen(false);
    setClubsDropdownOpen(false);
    setDocumentosDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all">
      {/* Top microbar */}
      <div className="bg-red-800 text-white text-xs px-4 py-1 flex justify-between items-center tracking-wide">
        <span className="font-medium truncate flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          CCT: {SCHOOL_INFO.cct} • {SCHOOL_INFO.motto}
        </span>
        <div className="hidden sm:flex items-center gap-4 text-xs text-red-100">
          <span>{SCHOOL_INFO.city}</span>
          <span className="opacity-60">|</span>
          <span className="font-semibold text-amber-300">Turnos: Matutino y Vespertino</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* ESQUINA IZQUIERDA: Logo de la EPO 44 + abajo nombre en chico "equipo a" y logo de una "A" */}
          <div 
            onClick={() => handleNav('inicio')}
            className="flex items-center gap-3.5 cursor-pointer group py-1"
          >
            {/* Logo oficial EPO 44 */}
            <div className="relative">
              <div className="w-13 h-13 rounded-xl overflow-hidden shadow-md ring-2 ring-red-700/20 group-hover:ring-red-700 transition-all bg-white flex items-center justify-center p-0.5">
                <img 
                  src="/assets/aistudio/IMG-20261016-WA0005_9c8b8385.jpg" 
                  alt="Escudo Oficial EPO 44" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
            </div>

            {/* Titulo y abajo: "equipo a" junto con logo de una "A" */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-extrabold text-stone-900 tracking-tight leading-none group-hover:text-red-700 transition-colors">
                  EPO 44
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-800 hidden xs:inline-block">
                  Temoaya
                </span>
              </div>
              <span className="text-[11px] text-stone-500 font-medium hidden sm:block leading-tight">
                Escuela Preparatoria Oficial Núm. 44
              </span>
              
              {/* Bloque solicitado: Abajo en chico "equipo a" y logo de una "A" */}
              <div className="mt-1 flex items-center gap-1.5 pt-0.5 border-t border-stone-200/80">
                <span className="text-[11px] font-bold text-red-700 tracking-wide uppercase">
                  equipo a
                </span>
                {/* Logo estilizado de la letra A */}
                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-red-700 to-amber-500 flex items-center justify-center text-[10px] font-black text-white shadow-xs">
                  A
                </div>
                <span className="text-[9px] text-stone-400 font-semibold uppercase tracking-wider">
                  Orgullo 44
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => handleNav('inicio')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                currentPage === 'inicio' 
                  ? 'bg-red-50 text-red-700' 
                  : 'text-stone-700 hover:text-red-700 hover:bg-stone-50'
              }`}
            >
              <Home className="w-4 h-4" />
              Inicio
            </button>

            <button
              onClick={() => handleNav('infraestructura')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                currentPage === 'infraestructura' 
                  ? 'bg-red-50 text-red-700' 
                  : 'text-stone-700 hover:text-red-700 hover:bg-stone-50'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Infraestructura
            </button>

            {/* Proyectos Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleNav('proyectos')}
                onMouseEnter={() => setProyectosDropdownOpen(true)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                  currentPage === 'proyectos' 
                    ? 'bg-red-50 text-red-700' 
                    : 'text-stone-700 hover:text-red-700 hover:bg-stone-50'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                Proyectos (PAEC)
                <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-60" />
              </button>
            </div>

            {/* Clubs */}
            <button
              onClick={() => handleNav('clubs')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                currentPage === 'clubs' 
                  ? 'bg-red-50 text-red-700' 
                  : 'text-stone-700 hover:text-red-700 hover:bg-stone-50'
              }`}
            >
              <Users className="w-4 h-4 text-red-600" />
              Clubs
            </button>

            {/* Conócenos */}
            <button
              onClick={() => handleNav('conocenos')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                currentPage === 'conocenos' 
                  ? 'bg-red-50 text-red-700' 
                  : 'text-stone-700 hover:text-red-700 hover:bg-stone-50'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              Conócenos
            </button>

            {/* Ubicación */}
            <button
              onClick={() => handleNav('ubicacion')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                currentPage === 'ubicacion' 
                  ? 'bg-red-50 text-red-700' 
                  : 'text-stone-700 hover:text-red-700 hover:bg-stone-50'
              }`}
            >
              <MapPin className="w-4 h-4 text-emerald-600" />
              Ubicación
            </button>

            {/* Institutional Modules Pill */}
            <div className="h-6 w-[1px] bg-stone-200 mx-1"></div>

            <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-xl">
              <button
                onClick={() => handleNav('diagnostico')}
                title="Diagnóstico Institucional"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                  currentPage === 'diagnostico' 
                    ? 'bg-red-700 text-white shadow-xs' 
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                Diagnóstico
              </button>

              <button
                onClick={() => handleNav('presentacion')}
                title="Presentación Escolar"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                  currentPage === 'presentacion' 
                    ? 'bg-red-700 text-white shadow-xs' 
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white'
                }`}
              >
                <Presentation className="w-3.5 h-3.5" />
                Presentación
              </button>

              <button
                onClick={() => handleNav('excel')}
                title="Hoja de Excel Institucional"
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
                  currentPage === 'excel' 
                    ? 'bg-emerald-700 text-white shadow-xs' 
                    : 'text-stone-600 hover:text-emerald-700 hover:bg-white'
                }`}
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                Excel
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNav('excel')}
              className="p-2 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold flex items-center gap-1"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span className="hidden xs:inline">Excel</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:text-red-700 hover:bg-stone-100 transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-1 shadow-xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          {/* Header del menú móvil con logo y "equipo a" */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-stone-100">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-red-200 p-0.5">
                <img 
                  src="/assets/aistudio/IMG-20261016-WA0005_9c8b8385.jpg" 
                  alt="Escudo EPO 44" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900 leading-tight">EPO 44 Temoaya</p>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-bold text-red-700 uppercase">equipo a</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-red-700 text-white text-[8px] flex items-center justify-center font-black">
                    A
                  </div>
                </div>
              </div>
            </div>
            <span className="text-[10px] bg-red-50 text-red-700 font-bold px-2 py-0.5 rounded-full">
              {SCHOOL_INFO.cct}
            </span>
          </div>

          <button
            onClick={() => handleNav('inicio')}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 ${
              currentPage === 'inicio' ? 'bg-red-50 text-red-700 font-bold' : 'text-stone-700 hover:bg-stone-50'
            }`}
          >
            <Home className="w-4 h-4 text-red-600" />
            Inicio
          </button>

          <button
            onClick={() => handleNav('infraestructura')}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 ${
              currentPage === 'infraestructura' ? 'bg-red-50 text-red-700 font-bold' : 'text-stone-700 hover:bg-stone-50'
            }`}
          >
            <Building2 className="w-4 h-4 text-red-600" />
            Infraestructura
          </button>

          <button
            onClick={() => handleNav('proyectos')}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
              currentPage === 'proyectos' ? 'bg-red-50 text-red-700 font-bold' : 'text-stone-700 hover:bg-stone-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Proyectos (PAEC)</span>
            </div>
            <span className="text-[11px] bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-semibold">
              Origami
            </span>
          </button>

          <button
            onClick={() => handleNav('clubs')}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
              currentPage === 'clubs' ? 'bg-red-50 text-red-700 font-bold' : 'text-stone-700 hover:bg-stone-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <Users className="w-4 h-4 text-red-600" />
              <span>Clubs Escolares</span>
            </div>
            <span className="text-[10px] text-stone-400">4 Clubs</span>
          </button>

          <button
            onClick={() => handleNav('conocenos')}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 ${
              currentPage === 'conocenos' ? 'bg-red-50 text-red-700 font-bold' : 'text-stone-700 hover:bg-stone-50'
            }`}
          >
            <PhoneCall className="w-4 h-4 text-red-600" />
            Conócenos y Redes
          </button>

          <button
            onClick={() => handleNav('ubicacion')}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-3 ${
              currentPage === 'ubicacion' ? 'bg-red-50 text-red-700 font-bold' : 'text-stone-700 hover:bg-stone-50'
            }`}
          >
            <MapPin className="w-4 h-4 text-emerald-600" />
            Ubicación en Temoaya
          </button>

          <div className="pt-3 border-t border-stone-200">
            <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider px-3 mb-1.5">
              Documentos y Enlaces Especiales
            </p>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => handleNav('diagnostico')}
                className={`p-2.5 rounded-xl text-xs font-semibold flex flex-col items-center gap-1.5 border text-center transition-all ${
                  currentPage === 'diagnostico'
                    ? 'bg-red-700 text-white border-red-700'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-white'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Diagnóstico</span>
              </button>

              <button
                onClick={() => handleNav('presentacion')}
                className={`p-2.5 rounded-xl text-xs font-semibold flex flex-col items-center gap-1.5 border text-center transition-all ${
                  currentPage === 'presentacion'
                    ? 'bg-red-700 text-white border-red-700'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-white'
                }`}
              >
                <Presentation className="w-4 h-4" />
                <span>Presentación</span>
              </button>

              <button
                onClick={() => handleNav('excel')}
                className={`p-2.5 rounded-xl text-xs font-semibold flex flex-col items-center gap-1.5 border text-center transition-all ${
                  currentPage === 'excel'
                    ? 'bg-emerald-700 text-white border-emerald-700'
                    : 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-white'
                }`}
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Excel</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

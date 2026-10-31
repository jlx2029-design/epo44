import React from 'react';
import { 
  Building2, 
  Sparkles, 
  Users, 
  PhoneCall, 
  MapPin, 
  BarChart3, 
  Presentation, 
  FileSpreadsheet, 
  Facebook, 
  Mail, 
  Phone, 
  ArrowUp
} from 'lucide-react';
import { PageType } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Columna 1: Identidad Institucional + "equipo a" */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-0.5 overflow-hidden shadow ring-2 ring-red-600/40">
                <img 
                  src="/assets/aistudio/IMG-20261016-WA0005_9c8b8385.jpg" 
                  alt="Escudo EPO 44" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-white font-bold text-base leading-tight">
                  EPO 44 Temoaya
                </h4>
                <p className="text-xs text-stone-400">
                  {SCHOOL_INFO.name}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="text-[11px] font-bold text-red-400 tracking-wider uppercase">
                    equipo a
                  </span>
                  <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-[10px] font-black text-white">
                    A
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              Institución de Educación Media Superior comprometida con la formación integral de la juventud de Temoaya, Estado de México, bajo el lema: <span className="text-stone-200 font-semibold italic">"{SCHOOL_INFO.motto}"</span>.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800/80 border border-stone-700/60 text-xs text-stone-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Clave C.C.T.: <strong>{SCHOOL_INFO.cct}</strong></span>
              </div>
            </div>
          </div>

          {/* Columna 2: Páginas Principales */}
          <div>
            <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Secciones
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('inicio')} 
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-red-500">•</span> Inicio Institucional
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('infraestructura')} 
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <Building2 className="w-3.5 h-3.5 text-stone-500" /> Infraestructura y Espacios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('proyectos')} 
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> PAEC: Elaboración de Origami
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('clubs')} 
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <Users className="w-3.5 h-3.5 text-red-500" /> Clubs: Artes, Danzas, Básquet, Música
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('conocenos')} 
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-stone-500" /> Conócenos y Redes Sociales
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('ubicacion')} 
                  className="hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-emerald-500" /> Ubicación en Temoaya
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Subpáginas Documentales */}
          <div>
            <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Subpáginas y Recursos
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('diagnostico')} 
                  className="hover:text-red-400 transition-colors flex items-center gap-2 p-1.5 -ml-1.5 rounded-lg hover:bg-stone-800"
                >
                  <BarChart3 className="w-4 h-4 text-red-400" />
                  <div>
                    <span className="font-medium text-stone-200">Diagnóstico Escolar</span>
                    <p className="text-[11px] text-stone-500">Matriz FODA e indicadores</p>
                  </div>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('presentacion')} 
                  className="hover:text-red-400 transition-colors flex items-center gap-2 p-1.5 -ml-1.5 rounded-lg hover:bg-stone-800"
                >
                  <Presentation className="w-4 h-4 text-amber-400" />
                  <div>
                    <span className="font-medium text-stone-200">Presentación Oficial</span>
                    <p className="text-[11px] text-stone-500">Diapositivas y modelo educativo</p>
                  </div>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('excel')} 
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2 p-1.5 -ml-1.5 rounded-lg hover:bg-stone-800"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="font-medium text-stone-200">Hoja de Cálculo Excel</span>
                    <p className="text-[11px] text-stone-500">Alumnos, promedios y PAEC</p>
                  </div>
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto Rápido */}
          <div className="space-y-3">
            <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-stone-800 pb-2">
              Contacto y Redes
            </h5>
            
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-xl bg-stone-800/80 hover:bg-blue-900/30 border border-stone-700/60 hover:border-blue-700 transition-all text-xs group"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="font-semibold text-stone-200 group-hover:text-blue-300">Facebook Oficial</p>
                <p className="text-[10px] text-stone-400 truncate">EPO 44 Oficial Temoaya</p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-2 rounded-xl bg-stone-800/80 border border-stone-700/60 text-xs">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-stone-200">Teléfono Escolar</p>
                <p className="text-[11px] text-stone-400">{SCHOOL_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-xl bg-stone-800/80 border border-stone-700/60 text-xs">
              <div className="w-7 h-7 rounded-lg bg-red-600 flex items-center justify-center text-white shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="font-semibold text-stone-200">Correo Electrónico</p>
                <p className="text-[11px] text-stone-400 truncate">{SCHOOL_INFO.email}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Escuela Preparatoria Oficial Núm. 44 Temoaya, México. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-stone-400">
              Desarrollado para la comunidad escolar por el <strong className="text-stone-300">Equipo A</strong>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

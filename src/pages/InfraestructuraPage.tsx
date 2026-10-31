import React, { useState } from 'react';
import { 
  Building2, 
  Eye, 
  Sparkles, 
  CheckCircle, 
  ShieldCheck, 
  Sun, 
  Moon, 
  MapPin, 
  Maximize2,
  TreePine,
  Layers,
  Flag
} from 'lucide-react';
import { SchoolPhoto } from '../types';
import { SCHOOL_PHOTOS, SCHOOL_INFO } from '../data/schoolData';

interface InfraestructuraPageProps {
  onSelectPhoto: (photo: SchoolPhoto) => void;
}

export const InfraestructuraPage: React.FC<InfraestructuraPageProps> = ({ onSelectPhoto }) => {
  const [filter, setFilter] = useState<'todos' | 'aulas' | 'deportes' | 'civico' | 'paisaje'>('todos');

  const filteredPhotos = filter === 'todos' 
    ? SCHOOL_PHOTOS 
    : SCHOOL_PHOTOS.filter(p => {
        if (filter === 'aulas') return p.category === 'aulas' || p.category === 'infraestructura';
        return p.category === filter;
      });

  const infrastructureZones = [
    {
      title: 'Arcotecho Monumental y Canchas Deportivas',
      icon: 'Shield',
      badge: 'Deporte y Salud',
      desc: 'Cubierta curva autoportante de acero que resguarda la cancha multiusos de las inclemencias del tiempo, permitiendo la práctica de básquetbol, voleibol y fútbol rápido sin importar la lluvia o el sol.',
      photo: SCHOOL_PHOTOS.find(p => p.id === 'arcotecho-gardens') || SCHOOL_PHOTOS[3],
      features: ['Tableros reglamentarios de básquetbol', 'Pintura epóxica antiderrapante de alta resistencia', 'Iluminación artificial para horario vespertino']
    },
    {
      title: 'Módulos Académicos de Dos Niveles',
      icon: 'Building',
      badge: 'Espacio Educativo',
      desc: 'Edificios estructurados con aulas ventiladas, cancelería de aluminio y ventanales panorámicos que brindan una iluminación natural óptima para el aprendizaje diario de la comunidad estudiantil.',
      photo: SCHOOL_PHOTOS.find(p => p.id === 'front-gardens-classrooms') || SCHOOL_PHOTOS[5],
      features: ['Mobiliario ergonómico escolar', 'Pizarrones de porcelana blanca y proyectores', 'Capacidad para más de 480 estudiantes']
    },
    {
      title: 'Explanada y Plaza Cívica Institucional',
      icon: 'Flag',
      badge: 'Civismo y Protocolo',
      desc: 'Espacio central abierto donde se llevan a cabo los homenajes a la Bandera Nacional, ceremonias de graduación, asambleas generales y presentaciones de danza y arte escolar.',
      photo: SCHOOL_PHOTOS.find(p => p.id === 'civic-plaza-day') || SCHOOL_PHOTOS[6],
      features: ['Asta bandera protocolaria', 'Capacidad para toda la matrícula reunida', 'Sonorización para eventos institucionales']
    },
    {
      title: 'Jardines Ornamentales y Áreas Verdes',
      icon: 'Tree',
      badge: 'Sustentabilidad y Bienestar',
      desc: 'Setos podados con esmero, pinos, cipreses y jardines florales que rodean los pasillos y escaleras, generando un microclima fresco y armonioso propicio para la convivencia y la paz escolar.',
      photo: SCHOOL_PHOTOS.find(p => p.id === 'stairs-ramp') || SCHOOL_PHOTOS[8],
      features: ['Especies adaptadas al clima de Temoaya', 'Riego y cuidado constante por el personal', 'Bancadas de descanso para los alumnos']
    },
    {
      title: 'Pasillos, Andadores y Rampas de Accesibilidad',
      icon: 'Layers',
      badge: 'Inclusión y Tránsito',
      desc: 'Infraestructura de comunicación entre las diferentes terrazas y plantas del plantel, equipada con barandales de seguridad, escaleras amplias y rampas que facilitan la movilidad incluyente.',
      photo: SCHOOL_PHOTOS.find(p => p.id === 'corridor-classrooms') || SCHOOL_PHOTOS[4],
      features: ['Barandales de protección en planta alta', 'Piso uniforme de loseta lavable', 'Señalética preventiva de protección civil']
    },
    {
      title: 'Vistas Panorámicas y Turno Vespertino',
      icon: 'Moon',
      badge: 'Paisaje y Seguridad',
      desc: 'Gracias a su ubicación elevada en Temoaya, el plantel goza de atardeceres y cielos crepusculares impresionantes con vista a los valles y montañas, complementados con alumbrado nocturno de seguridad.',
      photo: SCHOOL_PHOTOS.find(p => p.id === 'sunset-dramatic') || SCHOOL_PHOTOS[14],
      features: ['Vista panorámica hacia el valle de Temoaya', 'Luminarias perimetrales e internas en pasillos', 'Ambiente propicio para el turno vespertino']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-900 via-red-950 to-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-red-900/40 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 text-red-300 border border-red-500/30 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Infraestructura Física Educativa</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Infraestructura de la EPO 44 Temoaya
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Conoce cada uno de los espacios físicos que conforman la Escuela Preparatoria Oficial Núm. 44. Instalaciones seguras, modernas y diseñadas para el bienestar integral de nuestra comunidad estudiantil.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-amber-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Arcotecho monumental
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Aulas equipadas de 2 pisos
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Iluminación nocturna
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Áreas verdes y jardines
            </span>
          </div>
        </div>
      </div>

      {/* Zonas Principales de Infraestructura */}
      <section className="space-y-6">
        <div className="text-left border-b border-stone-200 pb-3">
          <h2 className="text-2xl font-extrabold text-stone-900">
            Zonas e Instalaciones Clave del Plantel
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Espacios diseñados para el desarrollo académico, deportivo y cultural de la Escuela Preparatoria Oficial Núm. 44 Temoaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infrastructureZones.map((zone, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div 
                  onClick={() => onSelectPhoto(zone.photo)}
                  className="relative aspect-[16/10] overflow-hidden bg-stone-100 cursor-pointer group"
                >
                  <img 
                    src={zone.photo.src} 
                    alt={zone.photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <span className="absolute top-3 left-3 bg-red-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    {zone.badge}
                  </span>
                  <div className="absolute bottom-2.5 right-2.5 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md flex items-center gap-1 backdrop-blur-xs">
                    <Maximize2 className="w-3 h-3 text-amber-400" /> Ver foto
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-stone-900 text-base leading-snug">
                    {zone.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {zone.desc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-stone-100">
                    <p className="text-[11px] font-bold text-stone-700 uppercase tracking-wide">
                      Características destacadas:
                    </p>
                    {zone.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-stone-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-stone-50 border-t border-stone-100">
                <button
                  onClick={() => onSelectPhoto(zone.photo)}
                  className="w-full py-2 rounded-xl bg-white hover:bg-red-50 text-stone-700 hover:text-red-700 border border-stone-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-red-600" />
                  Ver imagen ampliada
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALERÍA COMPLETA DE IMÁGENES DEL PLANTEL (16 FOTOGRAFÍAS DISTRIBUIDAS) */}
      <section className="space-y-6 bg-stone-100/70 p-6 sm:p-8 rounded-3xl border border-stone-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
              Acervo Visual Institucional
            </span>
            <h2 className="text-2xl font-extrabold text-stone-900 mt-0.5">
              Galería Fotográfica Completa de la EPO 44
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Haz clic en cualquier imagen para verla en pantalla completa con sus detalles.
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-xl border border-stone-200 shadow-2xs">
            <button
              onClick={() => setFilter('todos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'todos' ? 'bg-red-700 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Todas (16)
            </button>
            <button
              onClick={() => setFilter('aulas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'aulas' ? 'bg-red-700 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Aulas y Módulos
            </button>
            <button
              onClick={() => setFilter('deportes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'deportes' ? 'bg-red-700 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Cancha / Básquet
            </button>
            <button
              onClick={() => setFilter('civico')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'civico' ? 'bg-red-700 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Actos Cívicos
            </button>
            <button
              onClick={() => setFilter('paisaje')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filter === 'paisaje' ? 'bg-red-700 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Atardecer y Noche
            </button>
          </div>
        </div>

        {/* Grid de Fotos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-900 shadow-sm hover:shadow-lg border border-stone-200/80 cursor-pointer transition-all"
            >
              <img 
                src={photo.src} 
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-70 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-3 text-white">
                <span className="text-[9px] font-bold uppercase tracking-wider text-amber-300">
                  {photo.tag}
                </span>
                <p className="text-xs font-bold leading-tight line-clamp-1 mt-0.5">
                  {photo.title}
                </p>
                <div className="flex items-center gap-1 text-[10px] text-stone-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3 h-3 text-amber-400" />
                  <span>Clic para ampliar</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ficha Técnica de Infraestructura */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-red-700" />
          Ficha Técnica de Mantenimiento y Seguridad Escolar
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-stone-600">
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100">
            <span className="font-bold text-stone-900 block text-sm">Alumbrado LED</span>
            Iluminación en canchas, pasillos y fachada para actividades vespertinas y nocturnas.
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100">
            <span className="font-bold text-stone-900 block text-sm">Rutas de Evacuación</span>
            Escaleras con señalización de protección civil y puntos de reunión en explanada.
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100">
            <span className="font-bold text-stone-900 block text-sm">Arcotecho Estructural</span>
            Diseño arquitectónico con canalones para captación pluvial y sombra integral.
          </div>
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-100">
            <span className="font-bold text-stone-900 block text-sm">Áreas Ecológicas</span>
            Zonas de jardinería protegidas para preservar la vegetación nativa de Temoaya.
          </div>
        </div>
      </section>

    </div>
  );
};

import React from 'react';
import { 
  Building2, 
  Sparkles, 
  Users, 
  MapPin, 
  PhoneCall, 
  BarChart3, 
  Presentation, 
  FileSpreadsheet, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Eye, 
  Compass, 
  HeartHandshake,
  Sun,
  Moon,
  Clock
} from 'lucide-react';
import { PageType, SchoolPhoto } from '../types';
import { SCHOOL_INFO, SCHOOL_PHOTOS, CLUBS_DATA, ORIGAMI_DATA } from '../data/schoolData';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onSelectPhoto: (photo: SchoolPhoto) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectPhoto }) => {
  // Highlight photos
  const heroPhoto = SCHOOL_PHOTOS.find(p => p.id === 'civic-plaza-day') || SCHOOL_PHOTOS[6];
  const arcotechoPhoto = SCHOOL_PHOTOS.find(p => p.id === 'arcotecho-gardens') || SCHOOL_PHOTOS[3];
  const basquetPhoto = SCHOOL_PHOTOS.find(p => p.id === 'basketball-action') || SCHOOL_PHOTOS[2];
  const sunsetPhoto = SCHOOL_PHOTOS.find(p => p.id === 'sunset-dramatic') || SCHOOL_PHOTOS[14];
  const nightPhoto = SCHOOL_PHOTOS.find(p => p.id === 'night-illumination') || SCHOOL_PHOTOS[12];
  const civicPhoto = SCHOOL_PHOTOS.find(p => p.id === 'civic-honors') || SCHOOL_PHOTOS[10];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-900 to-red-950 text-white overflow-hidden rounded-b-3xl sm:rounded-b-[2.5rem] shadow-xl">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-25 mix-blend-overlay">
          <img 
            src="/assets/aistudio/IMG-20261016-WA0014_ff6cef22.jpg" 
            alt="Fondo EPO 44 Atardecer" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/80 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Institutional pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-amber-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>Bachillerato General • CCT {SCHOOL_INFO.cct}</span>
                <span className="opacity-40">|</span>
                <span className="text-white">{SCHOOL_INFO.city}</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                Escuela Preparatoria Oficial{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-amber-400">
                  Núm. 44
                </span>
              </h1>

              <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Educación media superior de calidad en Temoaya, Estado de México. Formando bachilleres comprometidos con el <strong className="text-white font-semibold">Trabajo</strong>, la <strong className="text-white font-semibold">Excelencia</strong> y la <strong className="text-white font-semibold">Honestidad</strong>.
              </p>

              {/* Mini card: Equipo A & Escudo */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-2xl">
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-white p-0.5">
                    <img 
                      src="/assets/aistudio/IMG-20261016-WA0005_9c8b8385.jpg" 
                      alt="Escudo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-stone-300 font-semibold uppercase tracking-wider">Insignia Oficial</p>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-amber-300 uppercase">equipo a</span>
                      <div className="w-4 h-4 rounded-full bg-red-600 text-white text-[9px] font-black flex items-center justify-center">
                        A
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-stone-300 bg-black/30 px-3.5 py-2 rounded-xl border border-white/10">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Turnos: Matutino y Vespertino</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
                <button
                  onClick={() => onNavigate('infraestructura')}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-bold shadow-lg shadow-red-900/30 flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  <Building2 className="w-4 h-4" />
                  Conocer Infraestructura
                </button>

                <button
                  onClick={() => onNavigate('proyectos')}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold backdrop-blur-sm flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  PAEC Origami
                </button>

                <button
                  onClick={() => onNavigate('clubs')}
                  className="px-5 py-3 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-200 border border-stone-700 text-sm font-semibold flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  <Users className="w-4 h-4 text-red-400" />
                  Clubs Escolares
                </button>
              </div>

            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                
                {/* Background glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 to-amber-500 rounded-3xl blur-lg opacity-30"></div>

                <div className="relative bg-stone-900/90 border border-stone-700/80 rounded-2xl overflow-hidden shadow-2xl p-2.5 sm:p-3">
                  
                  {/* Photo frame */}
                  <div 
                    onClick={() => onSelectPhoto(heroPhoto)}
                    className="relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer group"
                  >
                    <img 
                      src={heroPhoto.src} 
                      alt="Patio y Edificios EPO 44" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80"></div>
                    
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-white font-medium flex items-center gap-1 border border-white/20">
                      <Eye className="w-3 h-3 text-amber-400" />
                      <span>Ver foto</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-left">
                      <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-600/40">
                        Campus Temoaya
                      </span>
                      <h2 className="text-white font-bold text-sm sm:text-base mt-1 drop-shadow-md">
                        Instalaciones Educativas y Explanada Cívica
                      </h2>
                    </div>
                  </div>

                  {/* Micro stats under photo */}
                  <div className="grid grid-cols-3 gap-2 mt-2.5 pt-2 border-t border-stone-800 text-center">
                    <div className="p-2 rounded-lg bg-stone-800/60">
                      <p className="text-xs font-bold text-red-400">2 Plantas</p>
                      <p className="text-[10px] text-stone-400">Aulas Modernas</p>
                    </div>
                    <div className="p-2 rounded-lg bg-stone-800/60">
                      <p className="text-xs font-bold text-amber-400">Arcotecho</p>
                      <p className="text-[10px] text-stone-400">Cancha Techada</p>
                    </div>
                    <div className="p-2 rounded-lg bg-stone-800/60">
                      <p className="text-xs font-bold text-emerald-400">Áreas Verdes</p>
                      <p className="text-[10px] text-stone-400">Jardines Cuidados</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Quick Access Badges Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 -mt-8 relative z-20">
          <div 
            onClick={() => onNavigate('infraestructura')}
            className="bg-white p-4 rounded-2xl shadow-md border border-stone-200/80 hover:shadow-lg hover:border-red-300 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold text-stone-900 group-hover:text-red-700 transition-colors">Infraestructura</h2>
            <p className="text-xs text-stone-500 mt-0.5">Aulas, arcotecho y canchas</p>
          </div>

          <div 
            onClick={() => onNavigate('proyectos')}
            className="bg-white p-4 rounded-2xl shadow-md border border-stone-200/80 hover:shadow-lg hover:border-amber-300 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold text-stone-900 group-hover:text-amber-700 transition-colors">PAEC Origami</h2>
            <p className="text-xs text-stone-500 mt-0.5">Proyecto de plegado y arte</p>
          </div>

          <div 
            onClick={() => onNavigate('clubs')}
            className="bg-white p-4 rounded-2xl shadow-md border border-stone-200/80 hover:shadow-lg hover:border-red-300 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold text-stone-900 group-hover:text-red-700 transition-colors">4 Clubs Activos</h2>
            <p className="text-xs text-stone-500 mt-0.5">Artes, danzas, básquet, música</p>
          </div>

          <div 
            onClick={() => onNavigate('ubicacion')}
            className="bg-white p-4 rounded-2xl shadow-md border border-stone-200/80 hover:shadow-lg hover:border-emerald-300 transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">Ubicación</h2>
            <p className="text-xs text-stone-500 mt-0.5">Temoaya, Estado de México</p>
          </div>
        </div>

        {/* SECCIÓN 1: INFRAESTRUCTURA PREVIEW */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Nuestras Instalaciones</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                Infraestructura de la Escuela Preparatoria 44
              </h2>
              <p className="text-stone-600 text-sm mt-1 max-w-2xl">
                Espacios planeados para el óptimo desarrollo formativo, deportivo, cívico y cultural de los alumnos en Temoaya.
              </p>
            </div>
            <button
              onClick={() => onNavigate('infraestructura')}
              className="inline-flex items-center gap-2 text-sm font-bold text-red-700 hover:text-red-800 transition-colors shrink-0 group cursor-pointer"
            >
              <span>Ver toda la infraestructura</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Grid de Fotos de Infraestructura */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tarjeta 1: Arcotecho y Cancha */}
            <div 
              onClick={() => onSelectPhoto(arcotechoPhoto)}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img 
                  src={arcotechoPhoto.src} 
                  alt={arcotechoPhoto.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-red-700/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                  Cancha y Arcotecho
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-stone-900 group-hover:text-red-700 transition-colors">
                    {arcotechoPhoto.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                    {arcotechoPhoto.description}
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="font-medium text-red-600">Espacio deportivo techado</span>
                  <span className="flex items-center gap-1 group-hover:text-red-700">
                    <Eye className="w-3.5 h-3.5" /> Ver detalle
                  </span>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Aulas y Jardines */}
            <div 
              onClick={() => onSelectPhoto(SCHOOL_PHOTOS.find(p => p.id === 'front-gardens-classrooms') || SCHOOL_PHOTOS[5])}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img 
                  src="/assets/aistudio/IMG-20261016-WA0015_1464fa30.jpg" 
                  alt="Aulas y Jardines"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-emerald-700/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                  Aulas y Áreas Verdes
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                    Edificios Académicos y Jardines
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                    Salones con cancelería moderna, iluminación natural, rampas de acceso y setos cuidados.
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="font-medium text-emerald-600">Ambiente pedagógico</span>
                  <span className="flex items-center gap-1 group-hover:text-emerald-700">
                    <Eye className="w-3.5 h-3.5" /> Ver detalle
                  </span>
                </div>
              </div>
            </div>

            {/* Tarjeta 3: Pasillos y Vistas */}
            <div 
              onClick={() => onSelectPhoto(SCHOOL_PHOTOS.find(p => p.id === 'corridor-classrooms') || SCHOOL_PHOTOS[4])}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col sm:col-span-2 lg:col-span-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img 
                  src="/assets/aistudio/IMG-20261016-WA0009_2ee20a3c.jpg" 
                  alt="Pasillos escolares"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-amber-700/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                  Pasillos y Andadores
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                    Pasillos y Seguridad Escolar
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                    Andadores protegidos con barandales, pisos de loseta y ventilación cruzada en todas las plantas.
                  </p>
                </div>
                <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="font-medium text-amber-700">Tránsito seguro</span>
                  <span className="flex items-center gap-1 group-hover:text-amber-700">
                    <Eye className="w-3.5 h-3.5" /> Ver detalle
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN 2: PROYECTO PAEC - ELABORACIÓN DE ORIGAMI */}
        <section className="bg-gradient-to-r from-amber-50 via-red-50 to-orange-50 rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Programa Aula, Escuela y Comunidad (PAEC)</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                Proyecto Central: <span className="text-red-700">Elaboración de Origami</span>
              </h2>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                En la EPO 44 impulsamos el arte tradicional del plegado de papel como estrategia pedagógica integral. El origami combina la geometría euclidiana, la destreza manual y la paciencia, vinculando a los bachilleres con su comunidad escolar a través de esculturas de papel reciclado y exposiciones culturales.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-amber-200/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-xs font-bold text-stone-900">Geometría Aplicada</h3>
                    <p className="text-[11px] text-stone-600">Simetrías, ángulos y desarrollo de visión espacial.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-amber-200/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-xs font-bold text-stone-900">Paciencia y Bienestar</h3>
                    <p className="text-[11px] text-stone-600">Reducción del estrés escolar y concentración activa.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('proyectos')}
                  className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-md flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Explorar Guías de Origami y Figuras</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Box PAEC Origami */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-amber-200 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🕊️</span>
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">Figuras Destacadas PAEC</h4>
                      <p className="text-[11px] text-stone-500">Talleres impartidos por alumnos y docentes</p>
                    </div>
                  </div>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">
                    PAEC 2026
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs">
                        1
                      </span>
                      <div>
                        <p className="font-bold text-stone-900">Grulla de la Paz (Tsuru)</p>
                        <p className="text-[11px] text-stone-500">Símbolo de esperanza escolar</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-amber-800 bg-amber-100 px-2 py-0.5 rounded font-medium">Intermedio</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-red-100 text-red-800 font-bold flex items-center justify-center text-xs">
                        2
                      </span>
                      <div>
                        <p className="font-bold text-stone-900">Flor de Loto Tradicional</p>
                        <p className="text-[11px] text-stone-500">Plegado blintz y pétalos</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-medium">Fácil</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-orange-100 text-orange-800 font-bold flex items-center justify-center text-xs">
                        3
                      </span>
                      <div>
                        <p className="font-bold text-stone-900">Mariposa Monarca</p>
                        <p className="text-[11px] text-stone-500">Alusiva a los santuarios mexiquenses</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-medium">Fácil</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('proyectos')}
                  className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold text-center transition-colors cursor-pointer"
                >
                  Ver paso a paso interactivo
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN 3: CLUBS ESCOLARES (Artes, Danzas, Básquetbol, Música) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Formación Integral Extracurricular</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
                Clubs de la EPO 44 Temoaya
              </h2>
              <p className="text-stone-600 text-sm mt-1 max-w-2xl">
                Espacios formativos para canalizar la energía, creatividad y disciplina de nuestros estudiantes.
              </p>
            </div>
            <button
              onClick={() => onNavigate('clubs')}
              className="inline-flex items-center gap-2 text-sm font-bold text-red-700 hover:text-red-800 transition-colors shrink-0 group cursor-pointer"
            >
              <span>Ver todos los clubs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Club 1: Artes */}
            <div 
              onClick={() => onNavigate('clubs')}
              className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                  🎨
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  Creatividad Plástica
                </span>
                <h3 className="text-lg font-bold text-stone-900 mt-2 group-hover:text-amber-700 transition-colors">
                  Club de Artes
                </h3>
                <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                  Pintura, dibujo a carboncillo, acuarela, cartonería y murales colectivos para embellecer la preparatoria.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>Martes y Jueves</span>
                <span className="text-amber-700 font-bold group-hover:translate-x-0.5 transition-transform">Ver más →</span>
              </div>
            </div>

            {/* Club 2: Danzas */}
            <div 
              onClick={() => onNavigate('clubs')}
              className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-lg hover:border-rose-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                  💃
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full">
                  Folclor y Expresión
                </span>
                <h3 className="text-lg font-bold text-stone-900 mt-2 group-hover:text-rose-700 transition-colors">
                  Club de Danzas
                </h3>
                <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                  Bailes tradicionales mexiquenses, estampas folclóricas de la República y coreografías modernas.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>Lunes y Miércoles</span>
                <span className="text-rose-700 font-bold group-hover:translate-x-0.5 transition-transform">Ver más →</span>
              </div>
            </div>

            {/* Club 3: Básquetbol (con foto real) */}
            <div 
              onClick={() => onNavigate('clubs')}
              className="bg-white rounded-2xl p-5 border-2 border-red-200 shadow-md hover:shadow-xl hover:border-red-400 transition-all cursor-pointer group flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-red-100 rounded-full opacity-50 pointer-events-none"></div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                  🏀
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-100 px-2.5 py-0.5 rounded-full">
                  Deporte y Competencia
                </span>
                <h3 className="text-lg font-bold text-stone-900 mt-2 group-hover:text-red-700 transition-colors">
                  Club de Básquet
                </h3>
                <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                  Entrenamiento en la cancha techada con arcotecho. Técnica de tiro, drible, defensa y torneos intercolegiales.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="font-semibold text-red-700">En cancha techada</span>
                <span className="text-red-700 font-bold group-hover:translate-x-0.5 transition-transform">Ver más →</span>
              </div>
            </div>

            {/* Club 4: Música */}
            <div 
              onClick={() => onNavigate('clubs')}
              className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-lg hover:border-purple-300 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                  🎸
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full">
                  Ensamble y Canto
                </span>
                <h3 className="text-lg font-bold text-stone-900 mt-2 group-hover:text-purple-700 transition-colors">
                  Club de Música
                </h3>
                <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                  Guitarra, teclado, percusiones y ensamble coral para festivales cívicos y eventos culturales.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>Viernes</span>
                <span className="text-purple-700 font-bold group-hover:translate-x-0.5 transition-transform">Ver más →</span>
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN 4: GALERÍA VISUAL DE NUESTRA PREPA (DÍA Y NOCHE / ATARDECER) */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
              Galería Fotográfica Oficial
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">
              La EPO 44 en Imágenes
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              Imágenes del plantel: ceremonias patrias, clases, actividades deportivas y los majestuosos atardeceres sobre Temoaya.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Foto 1: Alumnos Básquetbol */}
            <div 
              onClick={() => onSelectPhoto(basquetPhoto)}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-stone-900 cursor-pointer shadow-sm hover:shadow-md"
            >
              <img 
                src={basquetPhoto.src} 
                alt={basquetPhoto.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                <p className="text-xs font-bold">{basquetPhoto.title}</p>
                <p className="text-[10px] text-stone-300">Cancha deportiva</p>
              </div>
            </div>

            {/* Foto 2: Ceremonia Cívica Escolta */}
            <div 
              onClick={() => onSelectPhoto(civicPhoto)}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-stone-900 cursor-pointer shadow-sm hover:shadow-md"
            >
              <img 
                src={civicPhoto.src} 
                alt={civicPhoto.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                <p className="text-xs font-bold">{civicPhoto.title}</p>
                <p className="text-[10px] text-stone-300">Honores a la Bandera</p>
              </div>
            </div>

            {/* Foto 3: Atardecer Rojo Fuego */}
            <div 
              onClick={() => onSelectPhoto(sunsetPhoto)}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-stone-900 cursor-pointer shadow-sm hover:shadow-md"
            >
              <img 
                src={sunsetPhoto.src} 
                alt={sunsetPhoto.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                <p className="text-xs font-bold">{sunsetPhoto.title}</p>
                <p className="text-[10px] text-amber-300">Puesta de sol en Temoaya</p>
              </div>
            </div>

            {/* Foto 4: Campus Nocturno */}
            <div 
              onClick={() => onSelectPhoto(nightPhoto)}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-stone-900 cursor-pointer shadow-sm hover:shadow-md"
            >
              <img 
                src={nightPhoto.src} 
                alt={nightPhoto.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                <p className="text-xs font-bold">{nightPhoto.title}</p>
                <p className="text-[10px] text-sky-300">Turno vespertino</p>
              </div>
            </div>

          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('infraestructura')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold transition-colors cursor-pointer"
            >
              <span>Ver las 16 fotografías en la galería completa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* SECCIÓN 5: SUBPÁGINAS REQUERIDAS (DIAGNÓSTICO, PRESENTACIÓN, EXCEL) */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Módulos Institucionales del Equipo A
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Documentos, Diagnóstico y Hoja de Cálculo
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm">
              Accede a las subpáginas interactivas preparadas especialmente con el diagnóstico del plantel, la presentación formal y el libro de datos Excel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card Diagnóstico */}
            <div 
              onClick={() => onNavigate('diagnostico')}
              className="bg-stone-800/80 hover:bg-stone-800 border border-stone-700 rounded-2xl p-6 transition-all hover:border-red-500 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                  Diagnóstico Escolar
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Evaluación integral institucional: Matriz FODA, indicadores de matrícula, eficiencia terminal del 88.4% y metas estratégicas del ciclo escolar.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-700/60 flex items-center justify-between text-xs text-red-400 font-semibold">
                <span>Abrir Diagnóstico</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card Presentación */}
            <div 
              onClick={() => onNavigate('presentacion')}
              className="bg-stone-800/80 hover:bg-stone-800 border border-stone-700 rounded-2xl p-6 transition-all hover:border-amber-500 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Presentation className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                  Presentación Oficial
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Visor de diapositivas interactivas con la historia, identidad del Equipo A, oferta educativa y proyectos destacados de la EPO 44.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-700/60 flex items-center justify-between text-xs text-amber-400 font-semibold">
                <span>Ver Diapositivas</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card Excel */}
            <div 
              onClick={() => onNavigate('excel')}
              className="bg-stone-800/80 hover:bg-stone-800 border border-stone-700 rounded-2xl p-6 transition-all hover:border-emerald-500 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                  Libro de Excel Escolar
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Planilla interactiva de registro: calificaciones, padrón de clubs, avance del PAEC Origami, búsqueda en vivo y opción para cargar tu archivo.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-700/60 flex items-center justify-between text-xs text-emerald-400 font-semibold">
                <span>Abrir Hoja de Cálculo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </section>

        {/* SECCIÓN 6: CONÓCENOS & UBICACIÓN SUMMARY */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Conócenos Mini Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-wider">
                <PhoneCall className="w-4 h-4" />
                <span>Contacto Directo</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                Conoce Nuestra Comunidad
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                Estamos a tu disposición en nuestras redes sociales oficiales y líneas telefónicas para informes de inscripciones, trámites y eventos del plantel.
              </p>

              <div className="mt-4 space-y-2 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-stone-900">Facebook:</span>
                  <a href={SCHOOL_INFO.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {SCHOOL_INFO.facebookDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-stone-900">Teléfono:</span>
                  <span>{SCHOOL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-stone-900">Correo:</span>
                  <span>{SCHOOL_INFO.email}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('conocenos')}
              className="w-full py-3 rounded-xl bg-stone-100 hover:bg-red-50 text-stone-800 hover:text-red-700 text-xs font-bold text-center transition-colors border border-stone-200 cursor-pointer"
            >
              Ver información de contacto completa
            </button>
          </div>

          {/* Ubicación Mini Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Localización</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1">
                Ubicación en Temoaya, México
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                La Preparatoria 44 está ubicada estratégicamente en el municipio de Temoaya, Estado de México, con accesos seguros y vista privilegiada al valle.
              </p>

              <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-900">
                <p className="font-semibold">{SCHOOL_INFO.address}</p>
                <p className="text-[11px] text-emerald-700 mt-0.5">A pocos minutos del centro histórico de Temoaya.</p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('ubicacion')}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold text-center transition-colors shadow-sm cursor-pointer"
            >
              Ver mapa interactivo y cómo llegar
            </button>
          </div>

        </section>

      </div>
    </div>
  );
};

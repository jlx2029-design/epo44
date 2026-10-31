import React, { useState, useEffect } from 'react';
import { 
  Presentation, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Maximize2, 
  Minimize2, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles,
  Info
} from 'lucide-react';
import { PRESENTACION_SLIDES } from '../data/schoolData';

export const PresentacionPage: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slide = PRESENTACION_SLIDES[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % PRESENTACION_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + PRESENTACION_SLIDES.length) % PRESENTACION_SLIDES.length);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentSlideIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 ${isFullscreen ? 'fixed inset-0 z-50 bg-stone-950 p-4 sm:p-8 max-w-none' : ''}`}>
      
      {/* Header Banner if not fullscreen */}
      {!isFullscreen && (
        <div className="bg-gradient-to-r from-red-950 via-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 border border-white/20 text-xs font-bold">
              <Presentation className="w-3.5 h-3.5" />
              <span>Subpágina Institucional • Diapositivas Oficiales</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Presentación de la <span className="text-red-400">EPO 44</span> Temoaya
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Visor interactivo de diapositivas que sintetiza la identidad institucional, infraestructura, proyecto PAEC Origami, clubs formativos y la visión del <strong className="text-white">Equipo A</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-amber-300">
              <span>📊 6 Diapositivas Clave</span>
              <span>•</span>
              <span>🎮 Usa las flechas de tu teclado ← →</span>
            </div>
          </div>
        </div>
      )}

      {/* CONTENEDOR PRINCIPAL DE LA DIAPOSITIVA */}
      <div className="bg-stone-900 text-white rounded-3xl border border-stone-800 shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Control Bar */}
        <div className="p-4 bg-stone-950/80 border-b border-stone-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span className="font-bold text-white">
              Diapositiva {currentSlideIndex + 1} de {PRESENTACION_SLIDES.length}
            </span>
            <span className="text-stone-500 hidden sm:inline">• {slide.badge}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                isPlaying ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pausar' : 'Reproducir'}</span>
            </button>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-xl bg-stone-800 text-stone-300 hover:text-white transition-colors cursor-pointer"
              title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Slide Stage */}
        <div className="p-6 sm:p-10 lg:p-12 flex-1 min-h-[420px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
            
            {/* Texto y Puntos */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-950/60 px-3 py-1 rounded-full border border-amber-700/40">
                {slide.badge}
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {slide.title}
              </h2>

              <p className="text-base sm:text-lg text-amber-200/90 font-medium">
                {slide.subtitle}
              </p>

              <div className="space-y-3 pt-2">
                {slide.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                    <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen de la Diapositiva */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-950 border border-stone-700 shadow-2xl">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider bg-black/70 px-2 py-0.5 rounded backdrop-blur-xs">
                    Fotografía EPO 44 Temoaya
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Navigation Controls */}
        <div className="p-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between">
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {PRESENTACION_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`transition-all cursor-pointer rounded-full ${
                  currentSlideIndex === idx 
                    ? 'w-7 h-2.5 bg-red-500' 
                    : 'w-2.5 h-2.5 bg-stone-700 hover:bg-stone-500'
                }`}
                aria-label={`Ir a diapositiva ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Siguiente</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Miniaturas de todas las Diapositivas */}
      {!isFullscreen && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-stone-800 uppercase tracking-wider">
            Índice de Diapositivas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {PRESENTACION_SLIDES.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`p-2 rounded-2xl border text-left transition-all cursor-pointer overflow-hidden flex flex-col justify-between ${
                  currentSlideIndex === idx 
                    ? 'bg-red-50 border-red-500 ring-2 ring-red-400/30' 
                    : 'bg-white border-stone-200 hover:bg-stone-50'
                }`}
              >
                <div className="aspect-[16/10] rounded-lg overflow-hidden bg-stone-900 mb-1.5">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <div className="text-[11px]">
                  <span className="font-bold text-red-700 block">#{idx + 1}</span>
                  <p className="font-semibold text-stone-900 truncate">{s.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

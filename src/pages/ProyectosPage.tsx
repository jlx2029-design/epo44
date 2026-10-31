import React, { useState } from 'react';
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  Smile, 
  Recycle, 
  Compass, 
  Lightbulb, 
  Clock, 
  Award,
  Scissors
} from 'lucide-react';
import { ORIGAMI_DATA } from '../data/schoolData';
import { OrigamiProject } from '../types';

export const ProyectosPage: React.FC = () => {
  const [selectedFigureId, setSelectedFigureId] = useState<string>('grulla');
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentFigure = ORIGAMI_DATA.figures.find(f => f.id === selectedFigureId) || ORIGAMI_DATA.figures[0];

  const handleSelectFigure = (id: string) => {
    setSelectedFigureId(id);
    setActiveStep(0);
  };

  const nextStep = () => {
    if (activeStep < currentFigure.steps.length - 1) {
      setActiveStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner PAEC */}
      <div className="bg-gradient-to-r from-amber-700 via-orange-800 to-red-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-amber-200 border border-white/20 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>PAEC • Programa Aula, Escuela y Comunidad</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Proyecto: <span className="text-amber-300">Elaboración de Origami</span>
          </h1>

          <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
            Iniciativa formativa de la Escuela Preparatoria Oficial Núm. 44 Temoaya en la que se fusionan las matemáticas, la geometría espacial, el arte plástico y el compromiso socioemocional a través del plegado de papel.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-white/90">
            <span className="bg-white/10 px-3 py-1 rounded-lg backdrop-blur-xs">
              🏫 Vinculación con Temoaya
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-lg backdrop-blur-xs">
              📐 Geometría y Razonamiento
            </span>
            <span className="bg-white/10 px-3 py-1 rounded-lg backdrop-blur-xs">
              ♻️ Papel Reciclado y Ecología
            </span>
          </div>
        </div>
      </div>

      {/* Qué es el PAEC en la EPO 44 */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
        <div className="border-b border-stone-200 pb-4">
          <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
            Marco Pedagógico Nueva Escuela Mexicana
          </span>
          <h2 className="text-2xl font-extrabold text-stone-900 mt-1">
            ¿Qué es el PAEC y por qué el Origami en la Preparatoria 44?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              El <strong>Programa Aula, Escuela y Comunidad (PAEC)</strong> es una estrategia transversal donde los saberes teóricos adquiridos en el aula trascienden las cuatro paredes escolares y se proyectan hacia el beneficio de la comunidad de Temoaya.
            </p>
            <p>
              A través del proyecto <strong>"Elaboración de Origami"</strong>, los estudiantes de diferentes semestres y turnos exploran conceptos matemáticos complejos como la simetría axial, los ángulos bisectores, la teselación y la tridimensionalidad, mientras desarrollan la motricidad fina y la paciencia.
            </p>
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-950 font-medium flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <span>
                "El papel no se corta ni se pega: se transforma mediante la inteligencia y la paciencia de las manos del bachiller."
              </span>
            </div>
          </div>

          {/* Beneficios 4-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ORIGAMI_DATA.benefits.map((b, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-stone-900 text-xs sm:text-sm">{b.title}</h3>
                <p className="text-[11px] text-stone-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULO INTERACTIVO DE FIGURAS DE ORIGAMI PASO A PASO */}
      <section className="space-y-6">
        <div className="text-left border-b border-stone-200 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider">
            <Scissors className="w-4 h-4" />
            <span>Taller Interactivo de Plegado</span>
          </div>
          <h2 className="text-2xl font-extrabold text-stone-900 mt-1">
            Figuras del Taller Escolar de Origami
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Selecciona una figura para explorar su simbolismo, requerimientos y seguir la guía interactiva paso a paso.
          </p>
        </div>

        {/* Selector de Figuras Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {ORIGAMI_DATA.figures.map((fig) => {
            const isSelected = fig.id === selectedFigureId;
            return (
              <button
                key={fig.id}
                onClick={() => handleSelectFigure(fig.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-50 border-amber-500 shadow-md ring-2 ring-amber-400/30'
                    : 'bg-white border-stone-200 hover:border-amber-300 hover:bg-stone-50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl">
                      {fig.id === 'grulla' ? '🕊️' : fig.id === 'loto' ? '🪷' : fig.id === 'mariposa' ? '🦋' : '📦'}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      fig.difficulty === 'Fácil' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {fig.difficulty}
                    </span>
                  </div>
                  <h3 className={`font-bold text-xs sm:text-sm mt-2 ${isSelected ? 'text-amber-900' : 'text-stone-900'}`}>
                    {fig.name}
                  </h3>
                  <p className="text-[11px] text-stone-500 mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {fig.estimatedTime}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-stone-100 text-[11px] font-semibold text-amber-700">
                  {isSelected ? '● Seleccionado' : 'Ver pasos →'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Visor Interactivo de Pasos de la Figura Seleccionada */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-lg overflow-hidden">
          
          {/* Header de la figura */}
          <div className="p-6 bg-gradient-to-r from-stone-900 to-stone-800 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wider">
                Proyecto PAEC • Guía de Elaboración
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-0.5 flex items-center gap-2">
                <span>{currentFigure.name}</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {currentFigure.difficulty}
                </span>
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                {currentFigure.symbolism}
              </p>
            </div>

            <div className="bg-stone-800 px-4 py-2 rounded-xl border border-stone-700 text-xs text-stone-300 shrink-0">
              <span className="text-stone-400 block text-[10px] uppercase font-bold">Material sugerido:</span>
              <span className="font-semibold text-white">{currentFigure.paperType}</span>
            </div>
          </div>

          {/* Stepper progress */}
          <div className="bg-amber-50/70 border-b border-amber-100 px-6 py-3 flex items-center justify-between text-xs">
            <span className="font-bold text-amber-900">
              Paso {activeStep + 1} de {currentFigure.steps.length}: {currentFigure.steps[activeStep].title}
            </span>
            <div className="flex gap-1">
              {currentFigure.steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-5 h-5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                    activeStep === idx 
                      ? 'bg-amber-600 text-white shadow-xs' 
                      : idx < activeStep 
                        ? 'bg-emerald-600 text-white' 
                        : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Contenido del Paso Activo */}
          <div className="p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Instrucción */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold">
                  <span>Instrucción Didáctica #{activeStep + 1}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-stone-900">
                  {currentFigure.steps[activeStep].title}
                </h4>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed bg-stone-50 p-4 rounded-2xl border border-stone-200">
                  {currentFigure.steps[activeStep].instruction}
                </p>

                {/* Consejos didácticos del Equipo A */}
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <p className="font-bold flex items-center gap-1.5 text-amber-950">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    Recomendación del Equipo A:
                  </p>
                  <p>
                    Usa una regla o el dorso de tu uña para marcar bien cada pliegue. La precisión en los primeros dobleces asegura que la figura termine con una simetría perfecta.
                  </p>
                </div>
              </div>

              {/* Diagrama Simbólico / Card Visual */}
              <div className="lg:col-span-4 bg-gradient-to-b from-stone-50 to-stone-100 rounded-2xl p-6 border border-stone-200 text-center space-y-3">
                <div className="w-24 h-24 mx-auto rounded-2xl bg-white shadow-sm border border-stone-200 flex items-center justify-center text-4xl">
                  {currentFigure.id === 'grulla' ? '🕊️' : currentFigure.id === 'loto' ? '🪷' : currentFigure.id === 'mariposa' ? '🦋' : '📦'}
                </div>
                <span className="text-xs font-bold text-stone-800 block">
                  {currentFigure.name}
                </span>
                <p className="text-[11px] text-stone-500">
                  Progreso: {Math.round(((activeStep + 1) / currentFigure.steps.length) * 100)}% completado
                </p>
                <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-amber-500 h-full transition-all duration-300"
                    style={{ width: `${((activeStep + 1) / currentFigure.steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer de navegación de pasos */}
          <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
            <button
              onClick={prevStep}
              disabled={activeStep === 0}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeStep === 0 
                  ? 'opacity-40 cursor-not-allowed text-stone-400' 
                  : 'bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 shadow-2xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Paso Anterior
            </button>

            <span className="text-xs font-medium text-stone-500">
              Paso {activeStep + 1} de {currentFigure.steps.length}
            </span>

            <button
              onClick={nextStep}
              disabled={activeStep === currentFigure.steps.length - 1}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeStep === currentFigure.steps.length - 1
                  ? 'bg-emerald-600 text-white cursor-default'
                  : 'bg-red-700 hover:bg-red-600 text-white shadow-xs'
              }`}
            >
              {activeStep === currentFigure.steps.length - 1 ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  ¡Figura Terminada!
                </>
              ) : (
                <>
                  Siguiente Paso
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

        </div>
      </section>

      {/* Impacto Comunitario en Temoaya */}
      <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-stone-800">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Compromiso Social del PAEC
          </span>
          <h3 className="text-xl sm:text-2xl font-bold mt-1">
            Impacto del Proyecto Origami en la Comunidad de Temoaya
          </h3>
          <p className="text-stone-400 text-xs sm:text-sm mt-1">
            Las obras creadas por los estudiantes de la EPO 44 no se quedan en el salón: se donan y se exhiben en espacios públicos locales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700 space-y-1.5">
            <span className="text-amber-400 font-bold block text-sm">Exposición en Plaza Cívica</span>
            <p className="text-stone-300">
              Muestra anual de esculturas geométricas y figuras tradicionales para los habitantes y familias de Temoaya.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700 space-y-1.5">
            <span className="text-emerald-400 font-bold block text-sm">Campaña 1000 Grullas por la Paz</span>
            <p className="text-stone-300">
              Iniciativa para crear guirnaldas de grullas que adornan las instituciones comunitarias como símbolo de armonía.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700 space-y-1.5">
            <span className="text-red-400 font-bold block text-sm">Talleres para Primarias y Secundarias</span>
            <p className="text-stone-300">
              Alumnos de la EPO 44 imparten sesiones de iniciación en origami a niños de escuelas secundarias de la región.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

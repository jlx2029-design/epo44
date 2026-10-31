import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle, 
  AlertCircle, 
  Target, 
  FileText, 
  Printer, 
  Download,
  Filter,
  Sparkles
} from 'lucide-react';
import { DIAGNOSTICO_DATA, SCHOOL_INFO } from '../data/schoolData';

export const DiagnosticoPage: React.FC = () => {
  const [selectedTurno, setSelectedTurno] = useState<'Todos' | 'Matutino' | 'Vespertino'>('Todos');
  const [activeFodaTab, setActiveFodaTab] = useState<'todas' | 'fortalezas' | 'oportunidades' | 'debilidades' | 'amenazas'>('todas');

  const printReport = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Banner Diagnóstico */}
      <div className="bg-gradient-to-r from-stone-900 via-red-950 to-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/30 text-red-300 border border-red-500/30 text-xs font-bold">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Subpágina Institucional • Evaluación Continua</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Diagnóstico Integral de la <span className="text-red-400">EPO 44</span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Instrumento de análisis institucional y académico del ciclo escolar. Refleja las condiciones pedagógicas, infraestructura, matrícula, áreas de mejora y metas estratégicas del <strong className="text-white">Equipo A</strong> y la comunidad docente.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-amber-300">
            <span>📅 Periodo: {DIAGNOSTICO_DATA.periodo}</span>
            <span>•</span>
            <span>👥 Matrícula Evaluada: {DIAGNOSTICO_DATA.totalAlumnos} Estudiantes</span>
          </div>
        </div>
      </div>

      {/* Acciones Rápidas de Diagnóstico */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-stone-200 shadow-xs">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-stone-500" />
          <span className="text-xs font-bold text-stone-700">Filtrar Turno:</span>
          <div className="flex gap-1">
            {(['Todos', 'Matutino', 'Vespertino'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTurno(t)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedTurno === t ? 'bg-red-700 text-white shadow-2xs' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={printReport}
            className="px-3.5 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir Diagnóstico</span>
          </button>
        </div>
      </div>

      {/* Métricas e Indicadores Clave */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-1">
          <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Matrícula Total</span>
          <p className="text-2xl sm:text-3xl font-black text-stone-900">480</p>
          <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +4.5% vs ciclo anterior
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-1">
          <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Eficiencia Terminal</span>
          <p className="text-2xl sm:text-3xl font-black text-red-700">{DIAGNOSTICO_DATA.eficienciaTerminal}</p>
          <p className="text-[11px] text-stone-500">Alumnos que concluyen el bachillerato</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-1">
          <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Asistencia Promedio</span>
          <p className="text-2xl sm:text-3xl font-black text-emerald-700">{DIAGNOSTICO_DATA.asistenciaPromedio}</p>
          <p className="text-[11px] text-stone-500">Registro diario en ambos turnos</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm space-y-1">
          <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Participación PAEC</span>
          <p className="text-2xl sm:text-3xl font-black text-amber-600">96.8%</p>
          <p className="text-[11px] text-stone-500">Alumnos integrados al taller de Origami</p>
        </div>
      </section>

      {/* MATRIZ FODA INTERACTIVA */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-4">
          <div>
            <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
              Análisis Estratégico Institucional
            </span>
            <h2 className="text-2xl font-extrabold text-stone-900 mt-0.5">
              Matriz FODA de la Preparatoria 44
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Evaluación de factores internos y externos que inciden en el desempeño de la institución.
            </p>
          </div>

          <div className="flex flex-wrap gap-1 bg-stone-100 p-1 rounded-xl">
            {(['todas', 'fortalezas', 'oportunidades', 'debilidades', 'amenazas'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFodaTab(tab)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                  activeFodaTab === tab ? 'bg-white text-stone-900 shadow-2xs font-bold' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Fortalezas */}
          {(activeFodaTab === 'todas' || activeFodaTab === 'fortalezas') && (
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Fortalezas Institucionales (Internas)</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                {DIAGNOSTICO_DATA.foda.fortalezas.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Oportunidades */}
          {(activeFodaTab === 'todas' || activeFodaTab === 'oportunidades') && (
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>Oportunidades de Crecimiento (Externas)</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                {DIAGNOSTICO_DATA.foda.oportunidades.map((o, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Debilidades */}
          {(activeFodaTab === 'todas' || activeFodaTab === 'debilidades') && (
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                <span>Debilidades a Subsanar (Internas)</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                {DIAGNOSTICO_DATA.foda.debilidades.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0"></span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Amenazas */}
          {(activeFodaTab === 'todas' || activeFodaTab === 'amenazas') && (
            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                <AlertCircle className="w-5 h-5 text-rose-600" />
                <span>Amenazas del Contexto (Externas)</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-700">
                {DIAGNOSTICO_DATA.foda.amenazas.map((a, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0"></span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </section>

      {/* METAS ESTRATÉGICAS Y PLAN DE MEJORA */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-wider">
            <Target className="w-4 h-4" />
            <span>Plan de Mejora Continua</span>
          </div>
          <h2 className="text-2xl font-extrabold text-stone-900 mt-0.5">
            Metas y Avance Institucional
          </h2>
        </div>

        <div className="space-y-4">
          {DIAGNOSTICO_DATA.metasEstrategicas.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-stone-900">{m.meta}</span>
                <span className="font-extrabold text-red-700">{m.avance}%</span>
              </div>
              <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-red-600 to-amber-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${m.avance}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

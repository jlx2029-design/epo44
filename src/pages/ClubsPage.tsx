import React, { useState } from 'react';
import { 
  Users, 
  Palette, 
  Sparkles, 
  Trophy, 
  Music, 
  Clock, 
  MapPin, 
  UserCheck, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Calendar,
  Send
} from 'lucide-react';
import { CLUBS_DATA, SCHOOL_PHOTOS } from '../data/schoolData';
import { ClubInfo, SchoolPhoto } from '../types';

interface ClubsPageProps {
  onSelectPhoto: (photo: SchoolPhoto) => void;
}

export const ClubsPage: React.FC<ClubsPageProps> = ({ onSelectPhoto }) => {
  const [selectedClub, setSelectedClub] = useState<string>('club-basquet');
  const [registered, setRegistered] = useState(false);
  const [studentForm, setStudentForm] = useState({
    nombre: '',
    grupo: '101',
    club: 'Club de Básquet',
    turno: 'Matutino',
    motivo: ''
  });

  const basquetPhoto = SCHOOL_PHOTOS.find(p => p.id === 'basketball-action') || SCHOOL_PHOTOS[2];
  const arcotechoPhoto = SCHOOL_PHOTOS.find(p => p.id === 'arcotecho-gardens') || SCHOOL_PHOTOS[3];

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentForm.nombre.trim()) return;
    setRegistered(true);
    setTimeout(() => {
      setRegistered(false);
      setStudentForm({ nombre: '', grupo: '101', club: 'Club de Básquet', turno: 'Matutino', motivo: '' });
    }, 4000);
  };

  const getClubIcon = (id: string) => {
    switch(id) {
      case 'club-artes': return <Palette className="w-5 h-5" />;
      case 'club-danzas': return <Sparkles className="w-5 h-5" />;
      case 'club-basquet': return <Trophy className="w-5 h-5" />;
      case 'club-musica': return <Music className="w-5 h-5" />;
      default: return <Users className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-900 via-stone-900 to-red-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/40 text-red-200 border border-red-500/30 text-xs font-bold">
            <Users className="w-3.5 h-3.5 text-red-300" />
            <span>Formación Extracurricular y Deportiva</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Clubs Escolares de la <span className="text-red-400">EPO 44</span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Descubre los 4 clubs oficiales que impulsan el talento, la disciplina y la convivencia de nuestros estudiantes: <strong className="text-white">Club de Artes</strong>, <strong className="text-white">Club de Danzas</strong>, <strong className="text-white">Club de Básquet</strong> y <strong className="text-white">Club de Música</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-amber-300">
            <span className="bg-white/10 px-3 py-1 rounded-full">🎨 Club de Artes</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">💃 Club de Danzas</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🏀 Club de Básquet</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">🎸 Club de Música</span>
          </div>
        </div>
      </div>

      {/* Grid de los 4 Clubs con Descripción Breve y Detallada */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {CLUBS_DATA.map((club) => {
          const isSelected = selectedClub === club.id;
          const isBasquet = club.id === 'club-basquet';

          return (
            <div 
              key={club.id}
              className={`bg-white rounded-3xl border transition-all overflow-hidden shadow-sm flex flex-col justify-between ${
                isBasquet ? 'border-red-300 ring-2 ring-red-100' : 'border-stone-200 hover:border-stone-300'
              }`}
            >
              <div>
                {/* Photo or Banner */}
                {isBasquet ? (
                  <div 
                    onClick={() => onSelectPhoto(basquetPhoto)}
                    className="relative aspect-[16/9] overflow-hidden bg-stone-900 cursor-pointer group"
                  >
                    <img 
                      src={basquetPhoto.src} 
                      alt="Alumnos jugando básquetbol en EPO 44"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <span className="absolute top-3 left-3 bg-red-700 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      Fotografía Real en Cancha EPO 44
                    </span>
                    <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                      <span className="text-xs font-bold drop-shadow">Encuentro Deportivo Estudiantil</span>
                      <span className="text-[10px] bg-black/60 px-2 py-0.5 rounded-full text-amber-300 flex items-center gap-1">
                        <Eye className="w-3 h-3" /> Ampliar
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className={`p-6 bg-gradient-to-r ${
                    club.id === 'club-artes' ? 'from-amber-600 to-orange-700' :
                    club.id === 'club-danzas' ? 'from-rose-600 to-pink-700' :
                    'from-purple-700 to-indigo-800'
                  } text-white flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-xl">
                        {getClubIcon(club.id)}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">
                          {club.badge}
                        </span>
                        <h3 className="text-xl font-black text-white">{club.name}</h3>
                      </div>
                    </div>
                  </div>
                )}

                {/* Club Content */}
                <div className="p-6 space-y-4">
                  {isBasquet && (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center">
                        <Trophy className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-red-700 uppercase tracking-wide">
                          {club.badge}
                        </span>
                        <h3 className="text-xl font-bold text-stone-900 leading-tight">{club.name}</h3>
                      </div>
                    </div>
                  )}

                  {/* Descripción Breve Requerida */}
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80">
                    <p className="text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-1">
                      Descripción breve:
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-stone-800 leading-relaxed">
                      {club.shortDesc}
                    </p>
                  </div>

                  {/* Descripción Completa */}
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {club.fullDesc}
                  </p>

                  {/* Ficha de Horario y Lugar */}
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-100 flex items-start gap-2">
                      <Clock className="w-3.5 h-3.5 text-stone-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-[10px] text-stone-400 font-bold block uppercase">Horario</span>
                        <span className="font-semibold text-stone-800">{club.schedule}</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-stone-50 border border-stone-100 flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-stone-500 mt-0.5 shrink-0" />
                      <div>
                        <span className="text-[10px] text-stone-400 font-bold block uppercase">Ubicación</span>
                        <span className="font-semibold text-stone-800">{club.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actividades del Club */}
                  <div className="space-y-1.5 pt-2 border-t border-stone-100">
                    <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wide">
                      Actividades formativas:
                    </span>
                    <ul className="space-y-1">
                      {club.activities.map((act, actIdx) => (
                        <li key={actIdx} className="flex items-center gap-2 text-xs text-stone-600">
                          <CheckCircle className="w-3.5 h-3.5 text-red-600 shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Botón de inscripción rápida */}
              <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500">Instructor: <strong>{club.instructor}</strong></span>
                <button
                  onClick={() => {
                    setStudentForm(prev => ({ ...prev, club: club.name }));
                    document.getElementById('registro-club-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-1.5 rounded-xl bg-red-700 hover:bg-red-600 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  Unirse a este Club
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* FORMULARIO DE REGISTRO E INSCRIPCIÓN A CLUBS */}
      <section id="registro-club-form" className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl space-y-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold mb-2">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Convocatoria Escolar 2026</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Pre-registro Estudiantil a Clubs EPO 44
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm mt-1">
            Si eres estudiante de la Preparatoria 44 Temoaya, selecciona tu club de interés para que el orientador educativo reserve tu lugar.
          </p>
        </div>

        {registered ? (
          <div className="p-6 rounded-2xl bg-emerald-950/80 border border-emerald-600/50 text-center space-y-2 animate-in fade-in duration-300">
            <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">¡Pre-registro Enviado Exitosamente!</h3>
            <p className="text-xs text-emerald-200">
              Tu solicitud para <strong>{studentForm.club}</strong> ha sido registrada. Preséntate en el horario correspondiente con tu credencial escolar.
            </p>
          </div>
        ) : (
          <form onSubmit={handleRegisterSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            
            <div className="space-y-1">
              <label className="text-stone-300 font-semibold">Nombre Completo del Alumno:</label>
              <input 
                type="text" 
                required
                placeholder="Ej. Juan Pérez Becerril"
                value={studentForm.nombre}
                onChange={(e) => setStudentForm({ ...studentForm, nombre: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-red-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-stone-300 font-semibold">Grupo / Semestre:</label>
              <select
                value={studentForm.grupo}
                onChange={(e) => setStudentForm({ ...studentForm, grupo: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-white focus:outline-none focus:border-red-500"
              >
                <option value="101">101 - Primer Semestre</option>
                <option value="102">102 - Primer Semestre</option>
                <option value="201">201 - Tercer Semestre</option>
                <option value="202">202 - Tercer Semestre</option>
                <option value="301">301 - Quinto Semestre</option>
                <option value="302">302 - Quinto Semestre</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-stone-300 font-semibold">Club a Seleccionar:</label>
              <select
                value={studentForm.club}
                onChange={(e) => setStudentForm({ ...studentForm, club: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-800 border border-stone-700 text-white focus:outline-none focus:border-red-500 font-bold text-amber-300"
              >
                <option value="Club de Artes">🎨 Club de Artes</option>
                <option value="Club de Danzas">💃 Club de Danzas</option>
                <option value="Club de Básquet">🏀 Club de Básquet</option>
                <option value="Club de Música">🎸 Club de Música</option>
              </select>
            </div>

            <div className="space-y-1 flex flex-col justify-end">
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-red-950 transition-all cursor-pointer h-[38px]"
              >
                <Send className="w-3.5 h-3.5" />
                Registrar Mi Interés
              </button>
            </div>

          </form>
        )}
      </section>

    </div>
  );
};

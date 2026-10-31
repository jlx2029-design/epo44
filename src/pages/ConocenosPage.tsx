import React, { useState } from 'react';
import { 
  PhoneCall, 
  Facebook, 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  Award, 
  CheckCircle, 
  Send, 
  MessageSquare,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { SCHOOL_INFO, SCHOOL_PHOTOS } from '../data/schoolData';
import { SchoolPhoto } from '../types';

interface ConocenosPageProps {
  onSelectPhoto: (photo: SchoolPhoto) => void;
}

export const ConocenosPage: React.FC<ConocenosPageProps> = ({ onSelectPhoto }) => {
  const [msgSent, setMsgSent] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    asunto: 'Informes de Inscripción',
    mensaje: ''
  });

  const crestOfficial = SCHOOL_PHOTOS.find(p => p.id === 'crest-official') || SCHOOL_PHOTOS[0];
  const ceremonyPhoto = SCHOOL_PHOTOS.find(p => p.id === 'official-ceremony') || SCHOOL_PHOTOS[11];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre.trim() || !formData.mensaje.trim()) return;
    setMsgSent(true);
    setTimeout(() => {
      setMsgSent(false);
      setFormData({ nombre: '', telefono: '', correo: '', asunto: 'Informes de Inscripción', mensaje: '' });
    }, 4500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Banner Superior */}
      <div className="bg-gradient-to-r from-red-950 via-stone-900 to-red-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-red-300 border border-white/20 text-xs font-bold">
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Contacto y Comunidad Institucional</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Conoce la <span className="text-red-400">EPO 44 Temoaya</span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Una institución formadora de bachilleres con identidad mexiquense, valores cívicos sólidos y un compromiso indeclinable con la excelencia educativa y la comunidad de Temoaya.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-amber-300">
            <span>🛡️ Lema: Trabajo • Excelencia • Honestidad</span>
            <span>•</span>
            <span>🎓 Clave C.C.T.: {SCHOOL_INFO.cct}</span>
          </div>
        </div>
      </div>

      {/* Redes Sociales y Canales de Comunicación Directa */}
      <section className="space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <span className="text-xs font-bold text-red-700 uppercase tracking-wider">
            Canales Oficiales
          </span>
          <h2 className="text-2xl font-extrabold text-stone-900 mt-1">
            Redes Sociales y Teléfonos de Atención
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Comunícate con la dirección escolar, control escolar y el personal docente a través de nuestras vías oficiales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tarjeta 1: Facebook */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Facebook className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                  Red Social Principal
                </span>
                <h3 className="text-lg font-bold text-stone-900 mt-0.5">
                  Facebook Oficial
                </h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Avisos de convocatorias, calendarios de exámenes, actividades culturales, ceremonias cívicas y fotos de los eventos escolares.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-xs font-semibold text-blue-900 break-all">
                {SCHOOL_INFO.facebookDisplay}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <a 
                href={SCHOOL_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
                <span>Visitar Facebook EPO 44</span>
              </a>
            </div>
          </div>

          {/* Tarjeta 2: Teléfonos Oficiales */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                  Atención Telefónica
                </span>
                <h3 className="text-lg font-bold text-stone-900 mt-0.5">
                  Líneas Escolares
                </h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Comunícate para dudas sobre constancias de estudio, boletas de calificaciones, admisiones y citas de orientación escolar.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-medium">Línea Principal:</span>
                  <strong className="text-emerald-900 font-bold">{SCHOOL_INFO.phone}</strong>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-medium">Línea Secundaria:</span>
                  <strong className="text-stone-800 font-bold">{SCHOOL_INFO.secondaryPhone}</strong>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <a 
                href={`tel:${SCHOOL_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Llamar a la Escuela</span>
              </a>
            </div>
          </div>

          {/* Tarjeta 3: Correo Institucional */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider">
                  Trámites y Consultas
                </span>
                <h3 className="text-lg font-bold text-stone-900 mt-0.5">
                  Correo Electrónico
                </h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  Envío oficial de documentos, convenios interinstitucionales y solicitudes formales dirigidas a la Dirección Escolar.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-red-50/70 border border-red-100 text-xs font-semibold text-red-950 break-all">
                {SCHOOL_INFO.email}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100">
              <a 
                href={`mailto:${SCHOOL_INFO.email}`}
                className="w-full py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Redactar Correo</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Identidad Institucional y Escudo */}
      <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 text-center">
            <div 
              onClick={() => onSelectPhoto(crestOfficial)}
              className="inline-block relative cursor-pointer group p-3 bg-stone-800 rounded-3xl border border-stone-700 shadow-xl"
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-2xl overflow-hidden bg-white p-2">
                <img 
                  src={crestOfficial.src} 
                  alt="Escudo Oficial EPO 44" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                />
              </div>
              <p className="text-[11px] text-amber-400 font-bold mt-2 uppercase tracking-wider">
                Escudo Oficial EPO 44 • Clic para ampliar
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              Nuestros Principios Rectores
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Lema: "Trabajo, Excelencia, Honestidad"
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
              El escudo de la EPO 44 refleja la antorcha del conocimiento que ilumina los pasos de la juventud mexiquense, rodeada de laureles de triunfo y cimentada sobre los tres pilares éticos de nuestra comunidad:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3.5 rounded-2xl bg-stone-800/90 border border-stone-700 space-y-1">
                <span className="text-red-400 font-bold block text-sm">Trabajo</span>
                <p className="text-stone-300">Esfuerzo constante, estudio disciplinado y perseverancia en las metas cotidianas.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-800/90 border border-stone-700 space-y-1">
                <span className="text-amber-400 font-bold block text-sm">Excelencia</span>
                <p className="text-stone-300">Búsqueda continua de la calidad académica, el arte, el deporte y el carácter.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-stone-800/90 border border-stone-700 space-y-1">
                <span className="text-emerald-400 font-bold block text-sm">Honestidad</span>
                <p className="text-stone-300">Integridad, veracidad y respeto recíproco dentro y fuera del aula escolar.</p>
              </div>
            </div>

            {/* Ficha Equipo A */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-950/60 to-amber-950/40 border border-red-800/40 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Representación Estudiantil</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-sm font-black text-amber-300 uppercase">equipo a</span>
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-[10px] font-black text-white shadow-xs">
                    A
                  </div>
                  <span className="text-xs text-stone-400">| Generadores de este sitio web institucional</span>
                </div>
              </div>
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>

          </div>

        </div>
      </section>

      {/* Formulario de Contacto Directo */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Buzón Escolar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
            Envíanos un Mensaje
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            ¿Tienes dudas sobre el proceso de ingreso a la EPO 44 o requieres apoyo institucional? Completa el siguiente formulario.
          </p>
        </div>

        {msgSent ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-2 animate-in fade-in duration-300">
            <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="text-lg font-bold text-stone-900">¡Mensaje Enviado con Éxito!</h3>
            <p className="text-xs text-stone-600">
              Gracias por comunicarte con la Escuela Preparatoria Oficial Núm. 44. El personal de atención revisará tu mensaje.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="font-semibold text-stone-700">Nombre Completo:</label>
                <input 
                  type="text" 
                  required
                  placeholder="Tu nombre y apellidos"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-red-600"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-stone-700">Número de Teléfono:</label>
                <input 
                  type="tel" 
                  placeholder="Ej. 719 123 4567"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-red-600"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-stone-700">Asunto:</label>
                <select
                  value={formData.asunto}
                  onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-red-600 font-medium"
                >
                  <option value="Informes de Inscripción">Informes de Inscripción y Admisión</option>
                  <option value="Constancias y Boletas">Control Escolar: Constancias y Boletas</option>
                  <option value="Clubs Escolares">Inscripción a Clubs Extracurriculares</option>
                  <option value="Proyecto PAEC">Información sobre Proyecto PAEC Origami</option>
                  <option value="Otro">Otro asunto institucional</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-stone-700">Mensaje o Consulta:</label>
              <textarea 
                rows={4}
                required
                placeholder="Escribe aquí tu duda o mensaje detallado..."
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-red-600"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-red-700 hover:bg-red-600 text-white font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Consulta a la Preparatoria</span>
              </button>
            </div>
          </form>
        )}
      </section>

    </div>
  );
};

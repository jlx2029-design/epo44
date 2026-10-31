import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Bus, 
  Car, 
  ExternalLink, 
  Copy, 
  Check, 
  Building, 
  Compass, 
  Info,
  Eye
} from 'lucide-react';
import { SCHOOL_INFO, SCHOOL_PHOTOS } from '../data/schoolData';
import { SchoolPhoto } from '../types';

interface UbicacionPageProps {
  onSelectPhoto: (photo: SchoolPhoto) => void;
}

export const UbicacionPage: React.FC<UbicacionPageProps> = ({ onSelectPhoto }) => {
  const [copied, setCopied] = useState(false);

  const mainEntryPhoto = SCHOOL_PHOTOS.find(p => p.id === 'main-entry') || SCHOOL_PHOTOS[9];
  const panoramicPhoto = SCHOOL_PHOTOS.find(p => p.id === 'panoramic-campus') || SCHOOL_PHOTOS[7];

  const coordinates = '19.4678, -99.5939';
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Escuela+Preparatoria+Oficial+44+Temoaya+Mexico';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(`${SCHOOL_INFO.name}, ${SCHOOL_INFO.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Banner de Ubicación */}
      <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-red-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localización Geográfica</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Ubicación de la <span className="text-emerald-400">EPO 44</span> Temoaya
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Situada en el hermoso y tradicional municipio de <strong className="text-white">Temoaya, Estado de México</strong>, cuna de la cultura otomí. Conoce cómo llegar a nuestras instalaciones de forma rápida y segura.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-amber-300">
            <span>📍 Municipio: Temoaya, Edo. de México</span>
            <span>•</span>
            <span>🏔️ Región Valle de Toluca</span>
            <span>•</span>
            <span>📮 C.P. 50850</span>
          </div>
        </div>
      </div>

      {/* Grid: Información de Dirección + Mapa Interactivo */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Columna Izquierda: Ficha de Dirección y Rutas */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Dirección Oficial</span>
            </div>

            <h3 className="text-lg font-bold text-stone-900 leading-snug">
              Escuela Preparatoria Oficial Número 44
            </h3>

            <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-100 text-xs space-y-1.5 text-stone-800">
              <p className="font-semibold text-emerald-950">
                {SCHOOL_INFO.address}
              </p>
              <p className="text-[11px] text-stone-600">
                Referencias: Ubicada sobre la loma con vista panorámica a la cabecera municipal de Temoaya.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <button
                onClick={handleCopyAddress}
                className="flex-1 py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? '¡Dirección Copiada!' : 'Copiar Dirección'}</span>
              </button>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Abrir en Google Maps</span>
              </a>
            </div>
          </div>

          {/* Rutas de Llegada */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
            <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wider flex items-center gap-2">
              <Navigation className="w-4 h-4 text-red-600" />
              ¿Cómo Llegar al Plantel?
            </h4>

            {/* En Transporte Público */}
            <div className="flex items-start gap-3 p-3 rounded-2xl bg-stone-50 border border-stone-100 text-xs">
              <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                <Bus className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-stone-900 block font-bold">En Transporte Público (Autobús / Combi):</strong>
                <p className="text-stone-600 mt-0.5 leading-relaxed">
                  Desde la Terminal de Autobuses de Toluca o Plaza Sendero, tomar la línea de autobuses <em>"Autotransportes Temoayenses"</em> o <em>"Flecha Blanca"</em> con destino al centro de Temoaya. En la base o centro, tomar la combi local que sube hacia la Escuela Preparatoria Oficial Núm. 44.
                </p>
              </div>
            </div>

            {/* En Vehículo Particular */}
            <div className="flex items-start gap-3 p-3 rounded-2xl bg-stone-50 border border-stone-100 text-xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Car className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-stone-900 block font-bold">En Automóvil Particular:</strong>
                <p className="text-stone-600 mt-0.5 leading-relaxed">
                  Tomar la Carretera Federal Toluca - Palmillas / Desviación a Temoaya. Continuar por la Avenida Principal hacia la cabecera municipal y seguir la señalización escolar hacia la EPO 44. El plantel cuenta con rampa de acceso vehicular y peatonal.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Horario de Acceso al Plantel:</strong> Puertas abiertas para la comunidad escolar desde las 6:45 hrs en turno matutino y hasta las 19:30 hrs en turno vespertino.
              </span>
            </div>

          </div>

        </div>

        {/* Columna Derecha: Mapa Interactivo y Fotos de Acceso */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Iframe Mapa Interactivo */}
          <div className="bg-white rounded-3xl border border-stone-200 shadow-md overflow-hidden">
            <div className="p-4 bg-stone-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <span className="text-xs font-bold">Mapa Satelital de Temoaya, Estado de México</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-emerald-300 hover:text-white flex items-center gap-1 font-semibold"
              >
                <span>Ver pantalla completa</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Mapa Interactivo Embed (OpenStreetMap / Google Maps) */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-stone-100">
              <iframe
                title="Mapa Ubicación EPO 44 Temoaya"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-99.6150%2C19.4550%2C-99.5750%2C19.4850&amp;layer=mapnik&amp;marker=19.4678%2C-99.5939"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>

              {/* Pin flotante informativo */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-stone-200 text-xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-700 text-white flex items-center justify-center shrink-0 font-bold">
                  44
                </div>
                <div>
                  <p className="font-extrabold text-stone-900">EPO 44 Temoaya, México</p>
                  <p className="text-[11px] text-stone-500">C.P. 50850 • Estado de México</p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-stone-50 border-t border-stone-100 text-center text-xs text-stone-600">
              Coordenadas de referencia: <span className="font-mono font-bold text-stone-800">{coordinates}</span>
            </div>
          </div>

          {/* Fotos de Acceso y Fachada Subidas por el Usuario */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div 
              onClick={() => onSelectPhoto(mainEntryPhoto)}
              className="group bg-white rounded-2xl border border-stone-200 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <img 
                  src={mainEntryPhoto.src} 
                  alt={mainEntryPhoto.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute top-2.5 left-2.5 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Acceso y Rampa
                </span>
              </div>
              <div className="p-3 text-xs">
                <p className="font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">
                  {mainEntryPhoto.title}
                </p>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  Andador de acceso peatonal y rampa vehicular que comunica con la entrada al plantel.
                </p>
              </div>
            </div>

            <div 
              onClick={() => onSelectPhoto(panoramicPhoto)}
              className="group bg-white rounded-2xl border border-stone-200 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <img 
                  src={panoramicPhoto.src} 
                  alt={panoramicPhoto.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute top-2.5 left-2.5 bg-red-700 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Vista Panorámica
                </span>
              </div>
              <div className="p-3 text-xs">
                <p className="font-bold text-stone-900 group-hover:text-red-700 transition-colors">
                  {panoramicPhoto.title}
                </p>
                <p className="text-[11px] text-stone-500 mt-0.5">
                  Perspectiva del campus elevado sobre las colinas de Temoaya y el valle.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

import React from 'react';
import { X, ZoomIn, Info, Tag } from 'lucide-react';
import { SchoolPhoto } from '../types';

interface PhotoModalProps {
  photo: SchoolPhoto | null;
  onClose: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-stone-800 bg-stone-900/90 text-white">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-600/30 text-red-400 border border-red-500/30 flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {photo.tag}
            </span>
            <h3 className="text-sm sm:text-base font-bold truncate max-w-md">
              {photo.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            aria-label="Cerrar vista"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px]">
          <img 
            src={photo.src} 
            alt={photo.title}
            className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>

        {/* Footer with Details */}
        <div className="p-4 bg-stone-900 border-t border-stone-800 text-stone-300 flex items-start gap-3">
          <Info className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {photo.description}
            </p>
            <p className="text-[11px] text-stone-500 mt-1 font-medium">
              Fotografía oficial del plantel • Escuela Preparatoria Oficial Núm. 44 Temoaya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

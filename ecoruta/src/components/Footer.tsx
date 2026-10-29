import React from 'react';
import { Leaf, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white text-lg font-bold">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-600 text-white">
                <Leaf className="w-4 h-4" />
              </span>
              <span>EcoRuta</span>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Iniciativa digital de movilidad sostenible, cálculo de emisiones de CO₂ y optimización multimodal para ciudades más humanas.
            </p>
          </div>

          {/* Navigation Links Mirror */}
          <div className="flex flex-wrap items-center gap-5 text-slate-300 font-medium">
            <a href="#que-es" className="hover:text-emerald-400 transition-colors">¿Qué es?</a>
            <a href="#como-funciona" className="hover:text-emerald-400 transition-colors">¿Cómo funciona?</a>
            <a href="#problema" className="hover:text-emerald-400 transition-colors">Problema</a>
            <a href="#ingenieria" className="hover:text-emerald-400 transition-colors">Ingeniería de Sistemas</a>
            <a href="#emprendimiento" className="hover:text-emerald-400 transition-colors">Emprendimiento</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors font-medium shrink-0"
            aria-label="Volver arriba"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Academic & Intellectual Context */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>
            © {new Date().getFullYear()} EcoRuta · Prototipo conceptual e interactivo de Ingeniería de Sistemas.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Datos basados en factores IPCC</span>
            <span aria-hidden="true">·</span>
            <span>Enfoque ODS 11 & ODS 13</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

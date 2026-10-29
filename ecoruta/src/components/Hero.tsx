import React from 'react';
import { ArrowRight, Footprints, Bike, Bus, Car, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onScrollToSimulator: () => void;
  onSelectPreset: (presetId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSimulator, onSelectPreset }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-slate-50 pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-md border border-emerald-200/80">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Proyecto de Movilidad Sostenible e Ingeniería de Sistemas</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] text-balance">
              EcoRuta: <span className="text-emerald-700">Muévete de forma sostenible</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl text-balance">
              Aplicación digital para comparar rutas ecológicas, calcular emisiones de CO₂ y optimizar tus viajes diarios.
            </p>

            {/* Quick Transport Icons Strip */}
            <div className="flex flex-wrap items-center gap-4 py-2">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-xs text-xs font-medium text-slate-700">
                <Footprints className="w-4 h-4 text-emerald-600" />
                <span>Caminar</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-xs text-xs font-medium text-slate-700">
                <Bike className="w-4 h-4 text-emerald-600" />
                <span>Bicicleta</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-xs text-xs font-medium text-slate-700">
                <Bus className="w-4 h-4 text-emerald-600" />
                <span>Transporte público</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-slate-200 shadow-xs text-xs font-medium text-slate-700">
                <Car className="w-4 h-4 text-slate-500" />
                <span>Automóvil</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onScrollToSimulator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <span>Explorar comparador de rutas</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
              <a
                href="#que-es"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-700 bg-white hover:bg-slate-50 active:bg-slate-100 rounded-lg border border-slate-300 transition-colors"
              >
                Conocer la iniciativa
              </a>
            </div>

            {/* Unboxed Metadata Discipline */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> Prototipo Funcional v1.0
              </span>
              <span aria-hidden="true">·</span>
              <span>Tiempo, Costo y CO₂ en tiempo real</span>
              <span aria-hidden="true">·</span>
              <span>Datos estandarizados IPCC</span>
              <span aria-hidden="true">·</span>
              <span>Algoritmos de optimización</span>
            </div>
          </div>

          {/* Right Column: Visual Hero Asset & Live Teaser */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl">
              {/* Main Photo with safe fallback */}
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                <img
                  src="/src/assets/images/hero_sustainable_transit_1793236893194.jpg"
                  alt="Ciudad sostenible con transporte público y ciclovías"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Overlay Floating Capsule on the photo */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-slate-800">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Ruta sugerida de hoy</span>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Ahorro: 100% CO₂</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-900">Casa ➔ Universidad en Bicicleta</div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1 font-mono">
                    <span>20 min</span>
                    <span aria-hidden="true">·</span>
                    <span>S/ 0.00 gasto</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-700 font-bold">0 g CO₂</span>
                  </div>
                </div>
              </div>

              {/* Quick route selector strip at bottom of card */}
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <p className="text-xs font-semibold text-slate-500 mb-2">Simular trayectos rápidos:</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      onSelectPreset('casa-universidad');
                      onScrollToSimulator();
                    }}
                    className="text-left px-3 py-2 text-xs bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 rounded-lg font-medium text-slate-700 transition-colors"
                  >
                    🏠 Casa ➔ Universidad
                  </button>
                  <button
                    onClick={() => {
                      onSelectPreset('centro-parque');
                      onScrollToSimulator();
                    }}
                    className="text-left px-3 py-2 text-xs bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 rounded-lg font-medium text-slate-700 transition-colors"
                  >
                    🏢 Centro ➔ Tecnológico
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

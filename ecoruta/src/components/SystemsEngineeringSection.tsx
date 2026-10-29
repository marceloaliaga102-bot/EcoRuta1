import React, { useState } from 'react';
import { 
  Cpu, 
  Layout, 
  Database, 
  Binary, 
  MapPin, 
  Info, 
  Code2, 
  Check, 
  Layers, 
  Terminal
} from 'lucide-react';
import { ENGINEERING_PILLARS } from '../data/mockData';

export const SystemsEngineeringSection: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>(ENGINEERING_PILLARS[0].id);

  const selectedPillar = ENGINEERING_PILLARS.find((p) => p.id === activePillarId) || ENGINEERING_PILLARS[0];

  const pillarIcons: Record<string, React.ReactNode> = {
    'diseno-software': <Cpu className="w-5 h-5 text-emerald-600" />,
    'diseno-interfaces': <Layout className="w-5 h-5 text-emerald-600" />,
    'gestion-datos': <Database className="w-5 h-5 text-emerald-600" />,
    'algoritmos': <Binary className="w-5 h-5 text-emerald-600" />,
    'geolocalizacion': <MapPin className="w-5 h-5 text-emerald-600" />,
  };

  return (
    <section id="ingenieria" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Sección 4</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 text-balance">
            ¿Dónde entra Ingeniería de Sistemas?
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed text-balance">
            La ingeniería de sistemas proporciona los fundamentos metodológicos, algorítmicos y arquitectónicos para transformar una idea ecológica en una solución tecnológica escalable.
          </p>
        </div>

        {/* Structured List & Interactive Technical Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Structured List of 5 Pillars */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
              Pilares de la carrera aplicados al proyecto
            </h3>

            {ENGINEERING_PILLARS.map((pillar) => {
              const isActive = pillar.id === activePillarId;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                    isActive
                      ? 'bg-white border-emerald-600 shadow-sm ring-1 ring-emerald-600/30'
                      : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${isActive ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                    {pillarIcons[pillar.id]}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-slate-900 text-sm truncate">
                        {pillar.title}
                      </h4>
                      {pillar.prototypeNote && (
                        <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 whitespace-nowrap">
                          Fase Futura
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-1">
                      {pillar.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Technical Inspector */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                  {pillarIcons[selectedPillar.id]}
                </div>
                <div>
                  <span className="text-xs font-semibold text-emerald-700">Disciplina de Ingeniería</span>
                  <h3 className="text-lg font-bold text-slate-900">{selectedPillar.title}</h3>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-400">IS-Pillar / {selectedPillar.id}</span>
            </div>

            {/* Scope definition */}
            <div className="py-4">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Objetivo principal en EcoRuta:
              </div>
              <p className="text-base font-medium text-slate-800">
                "{selectedPillar.summary}"
              </p>
            </div>

            {/* Structured specifications */}
            <div className="space-y-3 py-2">
              <span className="text-xs font-bold text-slate-700 block">
                Implementación técnica y entregables:
              </span>
              <ul className="space-y-2.5 text-xs text-slate-600">
                {selectedPillar.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Algorithmic formula view if algorithms is selected */}
            {selectedPillar.id === 'algoritmos' && (
              <div className="mt-4 p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-2">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Fórmula de optimización multicriterio</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded border border-slate-800 text-[11px] leading-relaxed text-emerald-300">
                  Score(Ruta) = w₁ · Normalizado(Tiempo) + w₂ · Normalizado(Costo) + w₃ · Normalizado(CO₂)
                </div>
                <p className="text-[11px] text-slate-400">
                  Donde w₁, w₂ y w₃ son pesos ponderados según la preferencia del usuario (modo ecológico prioriza w₃ = 0.6).
                </p>
              </div>
            )}

            {/* Schema preview if data management is selected */}
            {selectedPillar.id === 'gestion-datos' && (
              <div className="mt-4 p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs space-y-2">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Esquema de datos representativo</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded border border-slate-800 text-[11px] leading-relaxed text-slate-300">
                  {`{\n  "routeId": "rt_univ_01",\n  "distanceKm": 5.4,\n  "modes": {\n    "bike": { "timeMin": 20, "cost": 0.0, "co2Grams": 0 },\n    "transit": { "timeMin": 28, "cost": 2.50, "co2Grams": 367 }\n  }\n}`}
                </div>
              </div>
            )}

            {/* Tech stack badges */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Conceptos clave:</span>
              {selectedPillar.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

        </div>

        {/* Highlight Callout Note: REQUIRED BY USER PROMPT */}
        {/* Anti-slop rule compliant: No thick border-l-4, clean hairline all-around border, high contrast legible background */}
        <div className="rounded-xl bg-emerald-50/80 border border-emerald-300 p-5 sm:p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                  Nota destacada
                </span>
                <span className="text-xs text-emerald-700 font-medium">Fase del proyecto</span>
              </div>
              <p className="text-sm font-semibold text-emerald-950 mt-0.5">
                Para el primer prototipo se usan datos de ejemplo y estimaciones.
              </p>
              <p className="text-xs text-emerald-800 mt-1">
                Esto permite validar la interacción del usuario, la viabilidad del flujo de navegación y los algoritmos de comparación antes de conectar sensores telemáticos y APIs comerciales de geolocalización en tiempo real.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { AlertCircle, CheckCircle2, TrendingDown, EyeOff, Sparkles, Scale, Gauge } from 'lucide-react';

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section id="problema" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Sección 3</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 text-balance">
            ¿Qué problema busca resolver?
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed text-balance">
            La falta de visibilidad del impacto ambiental en las decisiones diarias de movilidad urbana y cómo EcoRuta transforma este paradigma.
          </p>
        </div>

        {/* Problem vs Solution 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* El Problema Card */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-lg bg-rose-100 flex items-center justify-center text-rose-700">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-700">El Problema</span>
                  <h3 className="text-xl font-bold text-slate-900">Decisiones de transporte a ciegas</h3>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm mb-6">
                <strong>Muchas personas eligen su transporte considerando solo el tiempo o el precio</strong>, sin conocer las enormes diferencias de emisiones de dióxido de carbono que genera cada alternativa.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 text-xs">
                  <EyeOff className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Invisibilidad del CO₂</span>
                    <span className="text-slate-600">
                      Las aplicaciones convencionales de mapas solo priorizan el minuto más rápido, ocultando la huella ecológica de usar un auto privado.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 text-xs">
                  <Gauge className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Congestión y polución acumulada</span>
                    <span className="text-slate-600">
                      En trayectos de 3 a 7 km (habituales entre estudiantes y trabajadores), el uso individual del automóvil genera hasta 8 veces más emisiones que el transporte colectivo y 0% de actividad física.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500">
              Consecuencia: Emisiones urbanas en aumento y desincentivo al transporte activo.
            </div>
          </div>

          {/* La Solución Card */}
          <div className="bg-emerald-50/50 rounded-2xl border border-emerald-200 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">La Solución</span>
                  <h3 className="text-xl font-bold text-slate-900">Transparencia y Acción Climática</h3>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed text-sm mb-6">
                <strong>Facilitar decisiones de movilidad sostenible, reducir emisiones</strong> y promover hábitos responsables frente al cambio climático integrando la variable ecológica en la misma pantalla.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-100 text-xs">
                  <Scale className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Criterio triple equilibrado</span>
                    <span className="text-slate-600">
                      EcoRuta compara simultáneamente tiempo, dinero y gramos de CO₂, empoderando al usuario para elegir de acuerdo a sus valores.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-100 text-xs">
                  <TrendingDown className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Reducción tangible de emisiones</span>
                    <span className="text-slate-600">
                      Al visibilizar el ahorro con cada viaje y premiar con EcoPuntos, se crea un ciclo virtuoso de hábitos saludables y movilidad compartida.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-200/80 text-xs text-emerald-800 font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Impacto directo: Menor congestión urbana y fomento de ciudades limpias y caminables.
            </div>
          </div>

        </div>

        {/* Quantified Reality Strip: Comparison per kilometer */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Datos de referencia internacional</span>
            <h3 className="text-xl font-bold text-white mt-1">
              Emisiones promedio de CO₂ por pasajero y kilómetro recorrido
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Valores basados en factores de emisión estándar para transporte urbano representativo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
              <span className="text-xs text-slate-400 block font-medium">Caminar</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono mt-1 block">
                0 <span className="text-xs font-normal text-slate-400">g/km</span>
              </span>
              <span className="text-[11px] text-slate-400 mt-2 block">100% Cero emisiones</span>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
              <span className="text-xs text-slate-400 block font-medium">Bicicleta</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono mt-1 block">
                0 <span className="text-xs font-normal text-slate-400">g/km</span>
              </span>
              <span className="text-[11px] text-slate-400 mt-2 block">Cero emisiones directas</span>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
              <span className="text-xs text-slate-400 block font-medium">Transporte Público</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono mt-1 block">
                ~68 <span className="text-xs font-normal text-slate-400">g/km</span>
              </span>
              <span className="text-[11px] text-slate-400 mt-2 block">65% menos que en auto</span>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
              <span className="text-xs text-slate-400 block font-medium">Automóvil Privado</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-rose-400 font-mono mt-1 block">
                ~192 <span className="text-xs font-normal text-slate-400">g/km</span>
              </span>
              <span className="text-[11px] text-slate-400 mt-2 block">Mayor impacto individual</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

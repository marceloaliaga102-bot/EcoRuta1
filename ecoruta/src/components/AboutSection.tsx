import React, { useState } from 'react';
import { 
  Footprints, 
  Bike, 
  Bus, 
  Car, 
  Clock, 
  Coins, 
  CloudFog, 
  CheckCircle2, 
  ArrowRightLeft,
  Flame,
  Award,
  Info
} from 'lucide-react';
import { ROUTE_PRESETS } from '../data/mockData';
import { TransportMode } from '../types';

interface AboutSectionProps {
  selectedPresetId: string;
  onSelectPresetId: (id: string) => void;
  onTripLogged: (mode: TransportMode, co2SavedGrams: number, points: number) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  selectedPresetId,
  onSelectPresetId,
  onTripLogged,
}) => {
  const currentPreset = ROUTE_PRESETS.find((p) => p.id === selectedPresetId) || ROUTE_PRESETS[0];

  const [activeMode, setActiveMode] = useState<TransportMode>('bike');
  const [logSuccess, setLogSuccess] = useState<string | null>(null);

  // Automobile emissions as baseline for savings calculation
  const carEmission = currentPreset.options.car.co2Grams;
  const currentOption = currentPreset.options[activeMode];
  const savedCo2 = Math.max(0, carEmission - currentOption.co2Grams);
  const percentSaved = carEmission > 0 ? Math.round((savedCo2 / carEmission) * 100) : 0;

  const transportMetadata: Record<TransportMode, { name: string; icon: React.ReactNode; color: string; desc: string }> = {
    walk: {
      name: 'Caminar',
      icon: <Footprints className="w-5 h-5 text-emerald-600" />,
      color: 'border-emerald-200 bg-emerald-50/50',
      desc: 'Cero emisiones, cero gasto monetario y máxima actividad física cardiovascular.',
    },
    bike: {
      name: 'Bicicleta',
      icon: <Bike className="w-5 h-5 text-emerald-600" />,
      color: 'border-emerald-200 bg-emerald-50/50',
      desc: 'Ágil en el tráfico urbano, 100% libre de emisiones y costo nulo o mínimo.',
    },
    transit: {
      name: 'Transporte público',
      icon: <Bus className="w-5 h-5 text-blue-600" />,
      color: 'border-blue-200 bg-blue-50/50',
      desc: 'Huella de carbono compartida eficiente y tarifa económica y predecible.',
    },
    car: {
      name: 'Automóvil',
      icon: <Car className="w-5 h-5 text-rose-500" />,
      color: 'border-rose-200 bg-rose-50/30',
      desc: 'Mayor gasto en combustible y parqueo, y la mayor huella de carbono por persona.',
    },
  };

  const handleLogTrip = () => {
    let points = 0;
    if (activeMode === 'walk' || activeMode === 'bike') {
      points = 50;
    } else if (activeMode === 'transit') {
      points = 25;
    } else {
      points = 5;
    }
    onTripLogged(activeMode, savedCo2, points);
    setLogSuccess(`¡Viaje registrado! Sumaste +${points} EcoPuntos por elegir movilidad consciente.`);
    setTimeout(() => {
      setLogSuccess(null);
    }, 4500);
  };

  return (
    <section id="que-es" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Sección 1</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 text-balance">
            ¿Qué es EcoRuta?
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed text-balance">
            Es una <strong>aplicación digital que ayuda a las personas a encontrar rutas más sostenibles</strong> para llegar a su destino, comparando medios de transporte como <strong>caminar, bicicleta, transporte público y automóvil</strong>. Muestra el tiempo aproximado de viaje, costo estimado y emisiones de CO₂ de cada alternativa para reducir el impacto ambiental.
          </p>
        </div>

        {/* Interactive Comparison Simulator */}
        <div id="simulador" className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Simulador Interactivo
                </span>
                <span className="text-xs text-slate-500">Estimaciones basadas en factores estándar</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                Comparador Multimodal de Rutas
              </h3>
            </div>

            {/* Route Preset Selector */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-slate-500">Rutas de prueba:</span>
              {ROUTE_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => onSelectPresetId(preset.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                    preset.id === currentPreset.id
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* Current Journey Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 p-4 rounded-xl bg-white border border-slate-200">
            <div>
              <span className="text-xs text-slate-500 font-medium block">Punto de partida (Origen)</span>
              <span className="text-sm font-semibold text-slate-900 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {currentPreset.origin}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium block">Destino</span>
              <span className="text-sm font-semibold text-slate-900 flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-slate-800" />
                {currentPreset.destination}
              </span>
            </div>
            <div className="sm:text-right">
              <span className="text-xs text-slate-500 font-medium block">Distancia estimada</span>
              <span className="text-base font-bold text-slate-900 font-mono">
                {currentPreset.distanceKm.toFixed(1)} km
              </span>
            </div>
          </div>

          {/* 4 Transport Modes Comparison Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {(['walk', 'bike', 'transit', 'car'] as TransportMode[]).map((mode) => {
              const opt = currentPreset.options[mode];
              const isSelected = activeMode === mode;
              const meta = transportMetadata[mode];

              return (
                <button
                  key={mode}
                  onClick={() => setActiveMode(mode)}
                  className={`text-left p-5 rounded-xl border transition-all relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-600/20'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  {isSelected && (
                    <span className="absolute top-3 right-3 text-emerald-600">
                      <CheckCircle2 className="w-5 h-5 fill-emerald-50" />
                    </span>
                  )}

                  <div>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="p-2 rounded-lg bg-slate-100">{meta.icon}</div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{meta.name}</h4>
                        <span className="text-xs text-slate-500 font-medium">
                          {mode === 'car' ? 'Convencional' : 'Opción Sostenible'}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 mb-4 line-clamp-2">
                      {meta.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                    {/* Time */}
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Clock className="w-3.5 h-3.5" /> Tiempo
                      </span>
                      <span className="font-semibold font-mono text-slate-900">{opt.timeMinutes} min</span>
                    </div>

                    {/* Cost */}
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Coins className="w-3.5 h-3.5" /> Costo
                      </span>
                      <span className="font-semibold font-mono text-slate-900">
                        {opt.cost === 0 ? 'Gratis' : `S/ ${opt.cost.toFixed(2)}`}
                      </span>
                    </div>

                    {/* CO2 Emissions */}
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <CloudFog className="w-3.5 h-3.5" /> Emisiones CO₂
                      </span>
                      <span className={`font-bold font-mono ${opt.co2Grams === 0 ? 'text-emerald-700' : opt.co2Grams > 800 ? 'text-rose-600' : 'text-amber-700'}`}>
                        {opt.co2Grams} g
                      </span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Flame className="w-3.5 h-3.5" /> Actividad
                      </span>
                      <span className="font-semibold font-mono text-slate-600">{opt.calories} kcal</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Environmental Impact Analysis Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded">
                    Impacto ambiental calculado
                  </span>
                  <span className="text-xs text-slate-500">
                    Modo seleccionado: <strong>{transportMetadata[activeMode].name}</strong>
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {activeMode === 'car' ? (
                    <span className="text-rose-600">
                      Generas {currentOption.co2Grams} g de CO₂ en este trayecto
                    </span>
                  ) : (
                    <span className="text-emerald-700">
                      Ahorras {savedCo2} g de CO₂ ({percentSaved}% menos que en auto)
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-600">
                  {activeMode === 'car'
                    ? 'El uso del automóvil particular es la opción más contaminante y costosa. Cambiar a bicicleta, caminata o transporte público reduce drásticamente la huella de carbono urbana.'
                    : `Al preferir ${transportMetadata[activeMode].name.toLowerCase()} en lugar de un vehículo motorizado particular, evitas la emisión de gases de efecto invernadero y contribuyes a una ciudad más limpia.`}
                </p>

                {/* Progress bar comparison */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs font-medium text-slate-600">
                    <span>Huella de carbono comparativa</span>
                    <span className="font-mono">{currentOption.co2Grams} g vs {carEmission} g (Auto)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden flex">
                    <div
                      className={`h-full transition-all duration-500 ${
                        activeMode === 'car' ? 'bg-rose-500' : activeMode === 'transit' ? 'bg-blue-500' : 'bg-emerald-500'
                      }`}
                      style={{
                        width: `${Math.max(4, Math.round((currentOption.co2Grams / (carEmission || 1)) * 100))}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Button & Gamification Trigger */}
              <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end space-y-3 md:pl-4 md:border-l md:border-slate-200">
                <div className="text-left md:text-right">
                  <div className="text-xs text-slate-500 font-medium">Recompensa estimada</div>
                  <div className="text-xl font-bold text-emerald-700 flex items-center md:justify-end gap-1 font-mono">
                    <Award className="w-5 h-5 text-emerald-600" />
                    +{activeMode === 'walk' || activeMode === 'bike' ? 50 : activeMode === 'transit' ? 25 : 5} EcoPuntos
                  </div>
                </div>

                <button
                  onClick={handleLogTrip}
                  className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 rounded-lg transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                >
                  Registrar este viaje
                </button>
              </div>

            </div>

            {/* Notification message */}
            {logSuccess && (
              <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{logSuccess}</span>
              </div>
            )}
          </div>

          {/* Prototype note */}
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <Info className="w-4 h-4 text-slate-400 shrink-0" />
            <span>
              Nota metodológica: Los cálculos de tiempo y emisiones son estimaciones didácticas basadas en promedios de movilidad urbana y factores del Panel Intergubernamental de Cambio Climático (IPCC).
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

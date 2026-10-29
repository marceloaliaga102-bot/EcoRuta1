import React, { useState } from 'react';
import { 
  MapPin, 
  BarChart3, 
  CheckCircle, 
  Coins, 
  Trophy, 
  Flame, 
  ChevronRight, 
  Sparkles,
  Zap
} from 'lucide-react';

interface HowItWorksProps {
  ecoPoints: number;
  totalCo2SavedGrams: number;
  tripsCount: number;
  onSimulateTripAction: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({
  ecoPoints,
  totalCo2SavedGrams,
  tripsCount,
  onSimulateTripAction,
}) => {
  const [activeStepTab, setActiveStepTab] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'Paso 1. Ingresar el destino',
      subtitle: 'Define el origen y la meta de tu trayecto',
      description: 'El usuario escribe desde dónde sale y adónde quiere llegar (ej. de su casa a la universidad o centro de trabajo), estableciendo los puntos de partida de su recorrido.',
      icon: <MapPin className="w-5 h-5 text-emerald-600" />,
      highlight: 'Soporte para direcciones habituales, campus universitarios y centros urbanos.',
    },
    {
      number: '02',
      title: 'Paso 2. Comparar opciones',
      subtitle: 'Evaluación simultánea de 4 medios de transporte',
      description: 'EcoRuta presenta alternativas de transporte (caminar, bicicleta, transporte público, automóvil) y compara tiempo aproximado, costo en pasajes/combustible y emisiones estimadas de CO₂.',
      icon: <BarChart3 className="w-5 h-5 text-emerald-600" />,
      highlight: 'Visualización clara en paralelo para que el usuario conozca la huella ambiental de cada elección.',
    },
    {
      number: '03',
      title: 'Paso 3. Elegir la ruta',
      subtitle: 'Toma de decisión informada y consciente',
      description: 'El usuario selecciona la alternativa más conveniente y consulta el CO₂ ahorrado frente a otras opciones (principalmente frente a desplazarse en automóvil privado).',
      icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
      highlight: 'Cálculo automático de gramos de dióxido de carbono que dejas de emitir a la atmósfera.',
    },
    {
      number: '04',
      title: 'Paso 4. Acumular EcoPuntos (opcional)',
      subtitle: 'Gamificación de hábitos sostenibles',
      description: 'Registro de viajes sostenibles para acumular puntos, completar retos semanales y revisar avances en el perfil del usuario.',
      icon: <Coins className="w-5 h-5 text-emerald-600" />,
      highlight: 'Los puntos pueden canjearse por beneficios, convenios de movilidad y reconocimientos académicos.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Sección 2</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 text-balance">
            ¿Cómo funcionaría EcoRuta?
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed text-balance">
            Un flujo paso a paso diseñado con simplicidad para transformar la toma de decisiones cotidiana de transporte en un acto de responsabilidad ambiental.
          </p>
        </div>

        {/* 4 Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => setActiveStepTab(idx)}
              className={`cursor-pointer bg-white rounded-xl border p-6 flex flex-col justify-between transition-all duration-200 ${
                activeStepTab === idx
                  ? 'border-emerald-600 shadow-md ring-1 ring-emerald-500/20'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 font-mono">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center border border-emerald-100">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mb-3">
                  {step.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <span className="text-[11px] text-slate-500 font-medium block">
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive & EcoPuntos Gamification Interactive Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Tablet Graphic Showcase */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm flex-1 flex flex-col">
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                <img
                  src="/src/assets/images/ecoruta_app_concept_1793236893027.jpg"
                  alt="Prototipo de EcoRuta en tablet con cálculo de emisiones"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-xs font-medium text-emerald-300">Interfaz de Usuario Móvil</div>
                  <div className="text-sm font-bold">Monitoreo continuo de emisiones y rutas</div>
                </div>
              </div>
              <div className="p-5 bg-white space-y-2 flex-1">
                <h4 className="text-sm font-bold text-slate-900">
                  Visualización Clara y Datos Transparentes
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  La interfaz está pensada para que en menos de 5 segundos el usuario identifique el medio más eficiente y su impacto en carbono antes de salir de casa.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Interactive Step 4 "EcoPuntos" Gamification Hub */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
                    <Trophy className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">
                      Módulo de EcoPuntos y Retos
                    </h4>
                    <span className="text-xs text-slate-500">
                      Simulación en vivo del sistema de incentivos
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-500 block font-medium">Balance actual</span>
                  <span className="text-2xl font-black text-emerald-700 font-mono">
                    {ecoPoints} <span className="text-xs font-semibold">pts</span>
                  </span>
                </div>
              </div>

              {/* Progress and Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium block">Viajes registrados</span>
                  <span className="text-lg font-bold text-slate-900 font-mono mt-0.5 block">
                    {tripsCount} viajes
                  </span>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium block">CO₂ evitado acumulado</span>
                  <span className="text-lg font-bold text-emerald-700 font-mono mt-0.5 block">
                    {(totalCo2SavedGrams / 1000).toFixed(2)} kg
                  </span>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="text-xs text-slate-500 font-medium block">Nivel ambiental</span>
                  <span className="text-lg font-bold text-slate-900 mt-0.5 block flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    {ecoPoints >= 150 ? 'Pionero Verde' : ecoPoints >= 50 ? 'Viajero Activo' : 'Explorador'}
                  </span>
                </div>
              </div>

              {/* Weekly Challenge Card */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-700" /> Reto de la semana
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 font-mono">
                    {Math.min(5, tripsCount)} / 5 completados
                  </span>
                </div>
                <p className="text-xs text-emerald-950 font-medium">
                  "Semana Cero Emisiones": Realiza 5 trayectos en bicicleta o a pie durante la semana universitaria.
                </p>
                <div className="w-full bg-emerald-200/60 rounded-full h-2 mt-3 overflow-hidden">
                  <div
                    className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (tripsCount / 5) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Available Rewards / Badges */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-700">Beneficios desbloqueables con EcoPuntos:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className={`p-2.5 rounded-lg border flex items-center justify-between ${ecoPoints >= 50 ? 'bg-white border-emerald-300 text-slate-800' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                    <span>🚲 15% Descuento en taller de bicis</span>
                    <span className="font-mono text-[11px] font-semibold">{ecoPoints >= 50 ? '¡Disponible!' : '50 pts'}</span>
                  </div>
                  <div className={`p-2.5 rounded-lg border flex items-center justify-between ${ecoPoints >= 120 ? 'bg-white border-emerald-300 text-slate-800' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                    <span>☕ Café orgánico en cafetería campus</span>
                    <span className="font-mono text-[11px] font-semibold">{ecoPoints >= 120 ? '¡Disponible!' : '120 pts'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick simulation button */}
            <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Prueba interactiva del registro de viajes:
              </span>
              <button
                onClick={onSimulateTripAction}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                <span>Simular viaje en bicicleta (+50 pts)</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

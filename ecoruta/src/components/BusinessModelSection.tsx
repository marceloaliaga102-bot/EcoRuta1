import React, { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  Building2, 
  Briefcase, 
  Receipt, 
  Handshake, 
  BarChart, 
  ArrowUpRight,
  Calculator,
  Send,
  CheckCircle2
} from 'lucide-react';
import { CLIENT_SEGMENTS, REVENUE_STREAMS } from '../data/mockData';

export const BusinessModelSection: React.FC = () => {
  // Interactive community impact simulator for institutions
  const [communitySize, setCommunitySize] = useState<number>(1200);
  const [activeCommuteDays, setActiveCommuteDays] = useState<number>(3);
  const [partnerInterestSent, setPartnerInterestSent] = useState<boolean>(false);
  const [partnerEmail, setPartnerEmail] = useState<string>('');
  const [partnerType, setPartnerType] = useState<string>('universidad');

  // Calculation: average 5km commute roundtrip = 10km/day
  // In car: 10km * 192g = 1920g = 1.92kg CO2/day
  // 15% adoption of bike/transit saves ~1.4kg CO2 per person per day
  const dailyCommutersShifted = Math.round(communitySize * 0.18);
  const yearlyCo2TonsSaved = ((dailyCommutersShifted * 1.4 * activeCommuteDays * 40) / 1000).toFixed(1);
  const annualEcoPointsGenerated = (dailyCommutersShifted * activeCommuteDays * 40 * 50).toLocaleString();

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerEmail.trim()) return;
    setPartnerInterestSent(true);
    setTimeout(() => {
      setPartnerInterestSent(false);
      setPartnerEmail('');
    }, 5000);
  };

  return (
    <section id="emprendimiento" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Sección 5</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1 text-balance">
            ¿Cómo se convertiría en un emprendimiento?
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed text-balance">
            Modelo de negocio y sostenibilidad económica para escalar EcoRuta desde un prototipo académico hasta un emprendimiento con impacto social, ambiental y corporativo.
          </p>
        </div>

        {/* Part A: Clientes Potenciales Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
              1
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Clientes potenciales (Mercado Objetivo)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_SEGMENTS.map((segment) => (
              <div
                key={segment.id}
                className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-300 hover:shadow-xs transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-2xs">
                    {segment.id === 'estudiantes' && <GraduationCap className="w-6 h-6 text-emerald-600" />}
                    {segment.id === 'instituciones' && <Building2 className="w-6 h-6 text-blue-600" />}
                    {segment.id === 'empresas' && <Briefcase className="w-6 h-6 text-purple-600" />}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    {segment.title}
                  </h4>
                  <span className="text-xs font-semibold text-emerald-700 block mb-3">
                    {segment.subtitle}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {segment.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-700 block mb-2 uppercase tracking-wider">
                    Propuesta de valor:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {segment.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part B: Forma de generar ingresos Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold">
              2
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Forma de generar ingresos (Estrategia de Monetización)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVENUE_STREAMS.map((stream) => (
              <div
                key={stream.id}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                      {stream.id === 'suscripciones' && <Receipt className="w-6 h-6" />}
                      {stream.id === 'convenios' && <Handshake className="w-6 h-6" />}
                      {stream.id === 'planes-empresas' && <BarChart className="w-6 h-6" />}
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {stream.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    {stream.title}
                  </h4>
                  <span className="text-xs font-semibold text-slate-500 block mb-3">
                    {stream.subtitle}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {stream.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Segmento clave:</span>
                  <span className="font-semibold text-slate-800">{stream.target}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive B2B Community Carbon Savings Calculator */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Calculator Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Simulador de impacto para instituciones y empresas</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                Calcula el impacto ambiental de tu comunidad
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Descubre cómo la adopción de EcoRuta en una universidad o centro de trabajo reduce la huella de carbono Scope 3 anual y genera métricas listas para reportes ESG.
              </p>

              {/* Sliders */}
              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Tamaño de la comunidad (estudiantes o colaboradores):</span>
                    <span className="font-mono font-bold text-emerald-400">{communitySize.toLocaleString()} personas</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={communitySize}
                    onChange={(e) => setCommunitySize(Number(e.target.value))}
                    className="w-full accent-emerald-500 bg-slate-800 cursor-pointer h-2 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-0.5">
                    <span>100</span>
                    <span>5,000</span>
                    <span>10,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Días promedio de movilidad activa por semana:</span>
                    <span className="font-mono font-bold text-emerald-400">{activeCommuteDays} días/sem</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={activeCommuteDays}
                    onChange={(e) => setActiveCommuteDays(Number(e.target.value))}
                    className="w-full accent-emerald-500 bg-slate-800 cursor-pointer h-2 rounded-lg"
                  />
                </div>
              </div>

              {/* Interactive Contact Form for Partnerships */}
              <form onSubmit={handlePartnerSubmit} className="pt-4 border-t border-slate-800">
                <span className="text-xs font-semibold text-slate-300 block mb-2">
                  Solicitar dossier de alianzas institucionales:
                </span>
                <div className="flex flex-col sm:flex-row gap-2">
                  <select
                    value={partnerType}
                    onChange={(e) => setPartnerType(e.target.value)}
                    className="px-3 py-2 text-xs bg-slate-800 text-slate-200 border border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="universidad">Universidad / Instituto</option>
                    <option value="empresa">Empresa Corporativa</option>
                    <option value="negocio-bici">Negocio de Bicicletas</option>
                  </select>
                  <input
                    type="email"
                    placeholder="correo@institucion.edu"
                    value={partnerEmail}
                    onChange={(e) => setPartnerEmail(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs bg-slate-800 text-slate-200 placeholder-slate-500 border border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap flex items-center justify-center gap-1.5"
                  >
                    <span>Enviar</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {partnerInterestSent && (
                  <div className="mt-2 text-xs text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>¡Solicitud enviada! En breve te compartiremos el dossier de EcoRuta.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Results Output KPI Box */}
            <div className="lg:col-span-5 bg-slate-800/90 rounded-xl border border-slate-700 p-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Impacto estimado por año académico
              </span>

              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono block">
                  {yearlyCo2TonsSaved} <span className="text-lg font-normal text-slate-300">toneladas</span>
                </span>
                <span className="text-xs text-slate-400 mt-1 block">
                  De CO₂ reducidas anualmente en la ciudad
                </span>
              </div>

              <div className="pt-3 border-t border-slate-700/80">
                <span className="text-2xl font-bold text-white font-mono block">
                  {annualEcoPointsGenerated} <span className="text-xs font-normal text-slate-400">pts</span>
                </span>
                <span className="text-xs text-slate-400 mt-0.5 block">
                  EcoPuntos generados para canje en comercios asociados
                </span>
              </div>

              <div className="pt-3 border-t border-slate-700/80">
                <span className="text-lg font-semibold text-slate-200 block">
                  {dailyCommutersShifted} personas activas diarias
                </span>
                <span className="text-xs text-slate-400 mt-0.5 block">
                  Optimizando su tiempo, presupuesto y salud
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

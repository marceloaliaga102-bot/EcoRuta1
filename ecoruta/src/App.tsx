import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { SystemsEngineeringSection } from './components/SystemsEngineeringSection';
import { BusinessModelSection } from './components/BusinessModelSection';
import { Footer } from './components/Footer';
import { TransportMode } from './types';

export default function App() {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('casa-universidad');
  const [ecoPoints, setEcoPoints] = useState<number>(75);
  const [totalCo2SavedGrams, setTotalCo2SavedGrams] = useState<number>(3150);
  const [tripsCount, setTripsCount] = useState<number>(3);

  const handleScrollToSimulator = () => {
    const el = document.getElementById('simulador') || document.getElementById('que-es');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTripLogged = (_mode: TransportMode, co2SavedGrams: number, points: number) => {
    setEcoPoints((prev) => prev + points);
    setTotalCo2SavedGrams((prev) => prev + co2SavedGrams);
    setTripsCount((prev) => prev + 1);
  };

  const handleSimulateQuickTrip = () => {
    // Simulates an eco bike trip
    handleTripLogged('bike', 1036, 50);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navigation Bar with strict 3-zone Top Bar Contract */}
      <Navbar onOpenSimulator={handleScrollToSimulator} />

      <main className="flex-1">
        {/* Header / Hero Section (Section A) */}
        <Hero
          onScrollToSimulator={handleScrollToSimulator}
          onSelectPreset={(id) => setSelectedPresetId(id)}
        />

        {/* Sección 1: ¿Qué es EcoRuta? + Live Route Simulator (Section B) */}
        <AboutSection
          selectedPresetId={selectedPresetId}
          onSelectPresetId={setSelectedPresetId}
          onTripLogged={handleTripLogged}
        />

        {/* Sección 2: ¿Cómo funcionaría? + EcoPuntos Gamification (Section C) */}
        <HowItWorksSection
          ecoPoints={ecoPoints}
          totalCo2SavedGrams={totalCo2SavedGrams}
          tripsCount={tripsCount}
          onSimulateTripAction={handleSimulateQuickTrip}
        />

        {/* Sección 3: ¿Qué problema busca resolver? (Section D) */}
        <ProblemSolutionSection />

        {/* Sección 4: ¿Dónde entra Ingeniería de Sistemas? (Section E) */}
        <SystemsEngineeringSection />

        {/* Sección 5: ¿Cómo se convertiría en un emprendimiento? (Section F) */}
        <BusinessModelSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

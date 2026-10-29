import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface NavbarProps {
  onOpenSimulator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSimulator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '¿Qué es?', href: '#que-es' },
    { label: '¿Cómo funciona?', href: '#como-funciona' },
    { label: 'Problema', href: '#problema' },
    { label: 'Ingeniería de Sistemas', href: '#ingenieria' },
    { label: 'Emprendimiento', href: '#emprendimiento' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-md"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600 text-white shadow-sm">
              <Leaf className="w-4.5 h-4.5 text-white" />
            </span>
            <span>EcoRuta</span>
          </a>

          {/* Zone 2: 5 clean single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded px-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenSimulator}
              className="px-4.5 py-2 text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 active:bg-emerald-800 transition-colors whitespace-nowrap shrink-0 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              Probar simulador
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-md"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSimulator();
              }}
              className="mt-3 w-full py-2.5 px-4 text-center text-sm font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Probar simulador
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

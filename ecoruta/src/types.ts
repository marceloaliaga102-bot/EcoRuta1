export type TransportMode = 'walk' | 'bike' | 'transit' | 'car';

export interface TransportOption {
  id: TransportMode;
  name: string;
  tagline: string;
  icon: string;
  timeMinutes: number;
  costSoles: number;
  co2Grams: number;
  caloriesKcal: number;
  ecoScore: number; // 0 to 100
  pros: string;
  cons: string;
}

export interface RoutePreset {
  id: string;
  name: string;
  origin: string;
  destination: string;
  distanceKm: number;
  options: Record<TransportMode, {
    timeMinutes: number;
    cost: number;
    co2Grams: number;
    calories: number;
  }>;
}

export interface EngineeringPillar {
  id: string;
  title: string;
  summary: string;
  details: string[];
  techStack: string[];
  prototypeNote?: string;
}

export interface BusinessSegment {
  title: string;
  type: 'client' | 'revenue';
  target: string;
  valueProp: string;
  details: string;
}

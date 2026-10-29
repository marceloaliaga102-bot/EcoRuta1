import { RoutePreset, EngineeringPillar } from '../types';

export const ROUTE_PRESETS: RoutePreset[] = [
  {
    id: 'casa-universidad',
    name: 'Casa a la Universidad',
    origin: 'Residencia Estudiantil / Hogar',
    destination: 'Campus Universitario Central',
    distanceKm: 5.4,
    options: {
      walk: {
        timeMinutes: 65,
        cost: 0,
        co2Grams: 0,
        calories: 245,
      },
      bike: {
        timeMinutes: 20,
        cost: 0,
        co2Grams: 0,
        calories: 140,
      },
      transit: {
        timeMinutes: 28,
        cost: 2.5,
        co2Grams: 367, // ~68g per km * 5.4km
        calories: 45,
      },
      car: {
        timeMinutes: 22,
        cost: 14.0, // Gasolina + parqueo estimado
        co2Grams: 1036, // ~192g per km * 5.4km
        calories: 10,
      },
    },
  },
  {
    id: 'centro-parque',
    name: 'Centro Histórico a Parque Tecnológico',
    origin: 'Plaza Mayor / Centro',
    destination: 'Parque Tecnológico Empresarial',
    distanceKm: 8.2,
    options: {
      walk: {
        timeMinutes: 100,
        cost: 0,
        co2Grams: 0,
        calories: 380,
      },
      bike: {
        timeMinutes: 32,
        cost: 0,
        co2Grams: 0,
        calories: 215,
      },
      transit: {
        timeMinutes: 35,
        cost: 3.0,
        co2Grams: 557,
        calories: 50,
      },
      car: {
        timeMinutes: 28,
        cost: 19.5,
        co2Grams: 1574,
        calories: 12,
      },
    },
  },
  {
    id: 'distrito-biblioteca',
    name: 'Barrio Residencial a Biblioteca Central',
    origin: 'Av. Primavera (Residencial)',
    destination: 'Biblioteca Pública / Cultural',
    distanceKm: 3.1,
    options: {
      walk: {
        timeMinutes: 38,
        cost: 0,
        co2Grams: 0,
        calories: 145,
      },
      bike: {
        timeMinutes: 12,
        cost: 0,
        co2Grams: 0,
        calories: 82,
      },
      transit: {
        timeMinutes: 20,
        cost: 1.8,
        co2Grams: 210,
        calories: 35,
      },
      car: {
        timeMinutes: 16,
        cost: 11.0,
        co2Grams: 595,
        calories: 8,
      },
    },
  },
];

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    id: 'diseno-software',
    title: 'Diseño de software',
    summary: 'Definir cómo funcionaría la aplicación',
    details: [
      'Modelado de arquitectura del sistema basada en servicios cliente-servidor.',
      'Definición de requerimientos funcionales: ingreso de coordenadas, motor de comparación, asignación de puntajes ecológicos.',
      'Diseño de flujo de navegación y máquina de estados para la selección de rutas.',
    ],
    techStack: ['Arquitectura de Software', 'UML / Diagramas de Flujo', 'Clean Code'],
  },
  {
    id: 'diseno-interfaces',
    title: 'Diseño de interfaces',
    summary: 'Crear las pantallas y los botones',
    details: [
      'Prototipado UI/UX centrado en la usabilidad y accesibilidad móvil y web.',
      'Diseño visual de componentes interactivos: selectores de ruta, tarjetas de comparación y barras de progreso de emisiones.',
      'Jerarquía tipográfica y retroalimentación inmediata al usuario para facilitar decisiones rápidas.',
    ],
    techStack: ['Diseño UI/UX', 'Componentes Modulares', 'Responsive Design'],
  },
  {
    id: 'gestion-datos',
    title: 'Gestión de datos',
    summary: 'Organizar rutas, tarifas y factores de emisión',
    details: [
      'Estructuración del modelo de datos para paradas, distancias, frecuencias y modos de transporte.',
      'Catálogo de factores de emisión de CO₂ normalizados por kilómetro y tipo de combustible.',
      'Gestión de tablas tarifarias de transporte público vs. costo de combustible vehicular.',
    ],
    techStack: ['Modelado Relacional / NoSQL', 'Factores IPCC de Emisión', 'Esquemas JSON'],
  },
  {
    id: 'algoritmos',
    title: 'Algoritmos',
    summary: 'Establecer reglas para comparar las alternativas',
    details: [
      'Algoritmo multicriterio que pondera tiempo, costo económico e impacto ambiental (CO₂).',
      'Cálculo dinámico del ahorro de huella de carbono comparando con el viaje en automóvil.',
      'Lógica de gamificación para la asignación y validación de EcoPuntos.',
    ],
    techStack: ['Optimización Multicriterio', 'Cálculo de Rutas', 'Lógica de Ponderación'],
  },
  {
    id: 'geolocalizacion',
    title: 'Geolocalización',
    summary: 'Mostrar puntos de partida, destinos y recorridos en una versión futura',
    details: [
      'Planificación de integración con APIs de mapas y servicios de posicionamiento global (GPS).',
      'Trazado de trayectorias vectoriales y cálculo de matrices de distancias en tiempo real.',
      'Detección de puntos de interés sostenibles (estaciones de bici pública, paradas de bus).',
    ],
    techStack: ['APIs de Mapas / GIS', 'Coordenadas GPS', 'Trazado de Recorridos'],
    prototypeNote: 'Proyectado para la fase de producción completa.',
  },
];

export const CLIENT_SEGMENTS = [
  {
    id: 'estudiantes',
    title: 'Estudiantes universitarios',
    subtitle: 'Movilidad diaria, económica y activa',
    description: 'Jóvenes que realizan trayectos diarios hacia facultades e institutos, buscando ahorrar dinero en pasajes y reducir su huella de carbono mientras acumulan beneficios.',
    benefits: ['Rutas con menor costo', 'Retos ecológicos y badges', 'Comunidad y recompensas locales'],
  },
  {
    id: 'instituciones',
    title: 'Instituciones educativas',
    subtitle: 'Campus sostenibles y acreditaciones ambientales',
    description: 'Universidades y colegios interesados en disminuir la congestión vehicular alrededor de sus sedes, fomentar estilos de vida saludables y obtener métricas verificables de sostenibilidad.',
    benefits: ['Dashboard de movilidad estudiantil', 'Reportes de emisiones de la comunidad', 'Incentivos institucionales'],
  },
  {
    id: 'empresas',
    title: 'Empresas comprometidas',
    subtitle: 'Planes corporativos ESG y bienestar laboral',
    description: 'Organizaciones que buscan impulsar la movilidad sostenible entre sus colaboradores, cumplir metas de responsabilidad ambiental corporativa y medir el impacto Scope 3.',
    benefits: ['Planes corporativos de transporte', 'Medición de emisiones laborales', 'Fomento de hábitos saludables'],
  },
];

export const REVENUE_STREAMS = [
  {
    id: 'suscripciones',
    title: 'Suscripciones institucionales',
    subtitle: 'Consultoría y métricas de movilidad',
    description: 'Acceso a un panel analítico integral para universidades e instituciones que deseen consultar estadísticas agregadas sobre cómo se desplaza su comunidad y su impacto ecológico.',
    target: 'Universidades e Institutos',
    badge: 'Modelo B2B / B2G',
  },
  {
    id: 'convenios',
    title: 'Convenios con negocios de movilidad',
    subtitle: 'Ecosistema de bicicletas y transporte sostenible',
    description: 'Alianzas comerciales con tiendas de bicicletas, talleres de reparación, servicios de scooters y comercios ecológicos que ofrezcan descuentos a usuarios con EcoPuntos.',
    target: 'Comercios & Negocios de Bicis',
    badge: 'Monetización por Alianza',
  },
  {
    id: 'planes-empresas',
    title: 'Planes para empresas',
    subtitle: 'Medición de iniciativas ambientales y ESG',
    description: 'Plataforma empresarial para registrar desplazamientos del personal, recompensar a trabajadores que usen transporte público o bicicleta y emitir reportes de reducción de emisiones.',
    target: 'Empresas Corporativas',
    badge: 'Planes Corporativos',
  },
];

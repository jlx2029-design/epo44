import { ClubInfo, OrigamiProject, SchoolPhoto } from '../types';

export const SCHOOL_INFO = {
  name: 'Escuela Preparatoria Oficial Núm. 44',
  shortName: 'EPO 44',
  motto: 'Trabajo, Excelencia, Honestidad',
  city: 'Temoaya, Estado de México',
  address: 'Calle de las Rosas s/n, Barrio de Pothé, Temoaya, Estado de México, C.P. 50850',
  phone: '719 265 0244',
  secondaryPhone: '719 265 1044',
  email: 'epo44.temoaya@edugem.gob.mx',
  altEmail: 'prepa44temoaya@gmail.com',
  schedule: 'Lunes a Viernes de 7:00 hrs a 16:00 hrs',
  cct: '15EBH0144T',
  facebook: 'https://facebook.com/EPO44OficialTemoaya',
  facebookDisplay: 'facebook.com/EPO44OficialTemoaya',
  whatsapp: '+52 719 265 0244',
  teamName: 'Equipo A',
};

// All uploaded images mapped properly
export const SCHOOL_PHOTOS: SchoolPhoto[] = [
  {
    id: 'crest-official',
    src: '/assets/aistudio/IMG-20261016-WA0005_9c8b8385.jpg',
    title: 'Escudo Oficial EPO 44',
    category: 'civico',
    description: 'Emblema institucional de la Escuela Preparatoria Oficial Núm. 44 con los valores Trabajo, Excelencia y Honestidad.',
    tag: 'Identidad Institucional'
  },
  {
    id: 'crest-badge',
    src: '/assets/aistudio/IMG-20261016-WA0000_f82fbe80.jpg',
    title: 'Escudo Escolar Digitalizado',
    category: 'civico',
    description: 'Insignia oficial con laureles y la antorcha del saber representativa del plantel Temoaya.',
    tag: 'Símbolo Oficial'
  },
  {
    id: 'basketball-action',
    src: '/assets/aistudio/IMG-20261016-WA0007_4f40d188.jpg',
    title: 'Práctica del Club de Básquetbol',
    category: 'deportes',
    description: 'Estudiantes de la EPO 44 disputando un encuentro deportivo en la cancha multiusos del plantel.',
    tag: 'Cancha y Deporte'
  },
  {
    id: 'arcotecho-gardens',
    src: '/assets/aistudio/IMG-20261016-WA0004_e4c98a11.jpg',
    title: 'Arcotecho y Jardinería',
    category: 'infraestructura',
    description: 'Vista superior de la cancha techada bajo el arcotecho monumental y los jardines ornamentales de la escuela.',
    tag: 'Arcotecho'
  },
  {
    id: 'corridor-classrooms',
    src: '/assets/aistudio/IMG-20261016-WA0009_2ee20a3c.jpg',
    title: 'Pasillos y Aulas Escolares',
    category: 'aulas',
    description: 'Andadores y cancelería moderna en el edificio de aulas de la Preparatoria 44.',
    tag: 'Aulas'
  },
  {
    id: 'front-gardens-classrooms',
    src: '/assets/aistudio/IMG-20261016-WA0015_1464fa30.jpg',
    title: 'Edificio B y Jardines Frontales',
    category: 'infraestructura',
    description: 'Fachada de aulas con setos podados, cipreses y rampas de acceso peatonal seguro.',
    tag: 'Áreas Verdes'
  },
  {
    id: 'civic-plaza-day',
    src: '/assets/aistudio/IMG-20261016-WA0010_0ad88276.jpg',
    title: 'Plaza Cívica y Módulos de Clases',
    category: 'infraestructura',
    description: 'Patio central de la escuela con canchas pintadas, jardines y vista completa de los edificios de 2 niveles.',
    tag: 'Patio Central'
  },
  {
    id: 'panoramic-campus',
    src: '/assets/aistudio/IMG-20261016-WA0011_55a31b7c.jpg',
    title: 'Vista Panorámica de la EPO 44',
    category: 'paisaje',
    description: 'Perspectiva aérea de la preparatoria con vista hacia el municipio de Temoaya y las colinas circundantes.',
    tag: 'Campus General'
  },
  {
    id: 'stairs-ramp',
    src: '/assets/aistudio/IMG-20261016-WA0003_b3a22795.jpg',
    title: 'Escaleras, Rampas y Arcotecho',
    category: 'infraestructura',
    description: 'Infraestructura de comunicación entre terrazas del plantel, árboles frondosos y cubierta deportiva.',
    tag: 'Accesibilidad'
  },
  {
    id: 'main-entry',
    src: '/assets/aistudio/IMG-20261016-WA0006_859d878d.jpg',
    title: 'Acceso Principal y Rampas',
    category: 'infraestructura',
    description: 'Entrada vehicular y andador peatonal con escalinatas que comunican a la entrada del plantel.',
    tag: 'Acceso Principal'
  },
  {
    id: 'civic-honors',
    src: '/assets/aistudio/IMG-20261016-WA0012_d9f21590.jpg',
    title: 'Honores a la Bandera Nacional',
    category: 'civico',
    description: 'Ceremonia cívica con la escolta y comunidad estudiantil portando el uniforme escolar rojo en la explanada.',
    tag: 'Acto Cívico'
  },
  {
    id: 'official-ceremony',
    src: '/assets/aistudio/IMG-20261016-WA0001_cc6d45c4.jpg',
    title: 'Ceremonia Institucional con Lona Oficial',
    category: 'civico',
    description: 'Presídium y acto de entrega con lona oficial de la Escuela Preparatoria Oficial No. 44 y lábaro patrio.',
    tag: 'Protocolo'
  },
  {
    id: 'night-illumination',
    src: '/assets/aistudio/IMG-20261016-WA0002_56131a6e.jpg',
    title: 'Campus Nocturno Iluminado',
    category: 'paisaje',
    description: 'Instalaciones nocturnas con iluminación LED en aulas, pasillos y canchas para turno vespertino.',
    tag: 'Turno Vespertino'
  },
  {
    id: 'dusk-valley-view',
    src: '/assets/aistudio/IMG-20261016-WA0016_adc8e219.jpg',
    title: 'Crepúsculo con Vista al Valle',
    category: 'paisaje',
    description: 'Hermosa vista crepuscular de la escuela donde se aprecian las luces de Temoaya y el valle al anochecer.',
    tag: 'Paisaje Nocturno'
  },
  {
    id: 'sunset-dramatic',
    src: '/assets/aistudio/IMG-20261016-WA0014_ff6cef22.jpg',
    title: 'Atardecer Carmesí sobre la EPO 44',
    category: 'paisaje',
    description: 'Fotografía capturada desde el segundo piso con el horizonte teñido de rojo fuego y nubes dramáticas.',
    tag: 'Atardecer Espectacular'
  },
  {
    id: 'golden-sunset-arcotecho',
    src: '/assets/aistudio/IMG-20261016-WA0008_917f4310.jpg',
    title: 'Puesta de Sol en el Arcotecho',
    category: 'paisaje',
    description: 'Cielo dorado de atardecer enmarcando el arcotecho, las aulas y el patio deportivo de la preparatoria.',
    tag: 'Puesta de Sol'
  }
];

export const CLUBS_DATA: ClubInfo[] = [
  {
    id: 'club-artes',
    name: 'Club de Artes',
    category: 'Artes',
    icon: 'Palette',
    badge: 'Expresión Plástica y Visual',
    shortDesc: 'Espacio de creación plástica donde los estudiantes experimentan con pintura acrílica, acuarelas, dibujo a grafito, cartonería tradicional y murales escolares.',
    fullDesc: 'El Club de Artes de la EPO 44 fomenta la sensibilidad estética, el pensamiento crítico y la autoexpresión de los jóvenes bachilleres. Mediante técnicas tradicionales y contemporáneas, los alumnos desarrollan proyectos artísticos que decoran las instalaciones escolares y participan en exposiciones locales de Temoaya.',
    schedule: 'Martes y Jueves, 14:00 - 15:30 hrs',
    location: 'Taller Multidisciplinario / Aula de Artes',
    instructor: 'Prof. de Artes Visuales',
    activities: [
      'Técnicas de dibujo a lápiz, carboncillo y tinta china',
      'Pintura en óleo y acrílico sobre lienzo y madera',
      'Cartonería mexicana (alebrijes y calaveras monumentales)',
      'Diseño y realización de murales conmemorativos escolares',
      'Montaje de galerías y exposiciones para la comunidad'
    ]
  },
  {
    id: 'club-danzas',
    name: 'Club de Danzas',
    category: 'Danzas',
    icon: 'Sparkles',
    badge: 'Tradición Folclórica y Ritmo',
    shortDesc: 'Preservación de las tradiciones dancísticas del Estado de México y de nuestro país, combinadas con ensambles de danza moderna y coreografías rítmicas.',
    fullDesc: 'En el Club de Danzas los alumnos aprenden la riqueza cultural mexicana a través del zapateado, el ritmo y la expresión corporal. Se trabaja tanto el folclor tradicional mexiquense (danzas otomíes y mazahuas de la región) como cuadros de Veracruz, Jalisco y coreografías contemporáneas presentadas en ceremonias cívicas y certámenes.',
    schedule: 'Lunes y Miércoles, 14:00 - 15:30 hrs',
    location: 'Plaza Cívica / Explanada con Arcotecho',
    instructor: 'Profa. de Expresión Corporal y Folclor',
    activities: [
      'Técnica de zapateado folclórico y postura escénica',
      'Repertorio de danzas típicas del Estado de México y regiones',
      'Montajes de baile folclórico con vestuarios tradicionales',
      'Talleres de danza moderna, ritmos latinos y expresión corporal',
      'Participación destacada en desfiles y homenajes cívicos'
    ]
  },
  {
    id: 'club-basquet',
    name: 'Club de Básquetbol',
    category: 'Básquetbol',
    icon: 'Trophy',
    badge: 'Disciplina Deportiva y Trabajo en Equipo',
    shortDesc: 'Entrenamiento formativo y competitivo de básquetbol en las canchas de la escuela, enfocado en condición física, táctica y torneos intramuros.',
    fullDesc: 'El Club de Básquetbol de la EPO 44 es un pilar de la actividad física y el espíritu deportivo en el plantel. Aprovechando las canchas y el arcotecho, los alumnos perfeccionan fundamentos de bote, pase, tiro en suspensión, defensa zonal y jugadas en equipo, preparándose para torneos regionales de educación media superior.',
    schedule: 'Lunes a Jueves, 14:15 - 16:00 hrs',
    location: 'Cancha Polideportiva Techada (Arcotecho)',
    instructor: 'Entrenador Deportivo EPO 44',
    photoId: 'basketball-action',
    activities: [
      'Acondicionamiento físico específico y resistencia aeróbica',
      'Fundamentos técnicos: drible, tiro de media distancia y triples',
      'Estrategias defensivas hombre a hombre y defensas zonales',
      'Torneo Intramuros "Halcones EPO 44" por semestres',
      'Representación en la Liga Interpreparatorias del Valle de Toluca'
    ]
  },
  {
    id: 'club-musica',
    name: 'Club de Música',
    category: 'Música',
    icon: 'Music',
    badge: 'Ensamble e Interpretación Instrumental',
    shortDesc: 'Aprende guitarra, bajo, percusiones, teclado y canto coral. Ensamble de piezas cívicas, baladas y géneros populares para deleitar a la comunidad.',
    fullDesc: 'El Club de Música brinda las herramientas teóricas y prácticas para que los alumnos descubran su talento musical. Desde la lectura básica de partituras y tablaturas hasta la sincronización en ensamble acústico y eléctrico, los integrantes componen e interpretan melodías para eventos cívicos, graduaciones y festivales culturales.',
    schedule: 'Viernes, 13:30 - 16:00 hrs',
    location: 'Sala de Música y Medios Audiovisuales',
    instructor: 'Prof. de Educación Artística y Musical',
    activities: [
      'Clases de guitarra acústica y clásica para principiantes y avanzados',
      'Técnica de entonación vocal, afinación y respiración diafragmática',
      'Ensamble rítmico: percusiones, cajón peruano y batería',
      'Música cívica e himnos institucionales para actos protocolarios',
      'Concierto acústico de fin de semestre para padres de familia'
    ]
  }
];

export const ORIGAMI_DATA = {
  title: 'Proyecto PAEC: Elaboración de Origami',
  subtitle: 'Programa Aula, Escuela y Comunidad (PAEC) en la EPO 44 Temoaya',
  objective: 'Desarrollar habilidades cognitivas, concentración, visión espacial y motricidad fina en los estudiantes mediante el arte milenario del plegado de papel, vinculando las matemáticas (geometría), la ecología (reutilización de hojas y papel reciclado) y la armonía comunitaria.',
  schoolContext: 'En el marco de la Nueva Escuela Mexicana, la Preparatoria Oficial Núm. 44 promueve proyectos donde el aula trasciende hacia la escuela y el entorno de Temoaya. El taller de origami fomenta la paciencia, la disminución del estrés escolar y la creación de esculturas de papel que son expuestas y donadas en eventos comunitarios.',
  benefits: [
    { title: 'Desarrollo Geométrico', desc: 'Comprensión práctica de simetrías, ángulos, diagonales, bisectrices y figuras tridimensionales.' },
    { title: 'Paciencia y Concentración', desc: 'Ejercita la memoria secuencial y fomenta la calma mental alejando el uso excesivo de pantallas.' },
    { title: 'Coordinación Visomotriz', desc: 'Refuerza la precisión dactilar, motricidad fina y coordinación ojo-mano en los jóvenes.' },
    { title: 'Sustentabilidad Ecológica', desc: 'Uso de papel reciclado escolar y periódico para crear figuras ornamentales sin generar residuos.' }
  ],
  figures: [
    {
      id: 'grulla',
      name: 'Grulla de la Paz (Tsuru)',
      difficulty: 'Intermedio' as const,
      estimatedTime: '15 minutos',
      paperType: 'Cuadrado de 15 x 15 cm (papel bond o lustre)',
      symbolism: 'Símbolo ancestral de longevidad, paz y esperanza en la comunidad escolar.',
      steps: [
        { stepNumber: 1, title: 'Base preliminar', instruction: 'Dobla el cuadrado por ambas diagonales y por la mitad horizontal y vertical para marcar los pliegues.' },
        { stepNumber: 2, title: 'Colapso en cuadrado', instruction: 'Junta los cuatro extremos llevando las esquinas hacia el centro para formar un cuadrado más pequeño.' },
        { stepNumber: 3, title: 'Pliegues de pétalo', instruction: 'Dobla los bordes laterales hacia la línea central formando una cometa, tanto en el anverso como reverso.' },
        { stepNumber: 4, title: 'Estirado de alas', instruction: 'Abre cuidadosamente la solapa superior hacia arriba doblando los costados hacia el interior.' },
        { stepNumber: 5, title: 'Cuello y cola', instruction: 'Invierte los pliegues de las dos puntas inferiores hacia arriba para crear el cuello y la cola.' },
        { stepNumber: 6, title: 'Cabeza y despliegue', instruction: 'Haz un pliegue inverso en la punta del cuello para la cabeza y jala suavemente las alas hacia los costados.' }
      ]
    },
    {
      id: 'loto',
      name: 'Flor de Loto Tradicional',
      difficulty: 'Fácil' as const,
      estimatedTime: '10 minutos',
      paperType: 'Cuadrado de 20 x 20 cm (colores vivos)',
      symbolism: 'Representa la pureza, resiliencia y el florecimiento del talento de los estudiantes.',
      steps: [
        { stepNumber: 1, title: 'Centro marcado', instruction: 'Marca el centro del cuadrado doblando en cruz.' },
        { stepNumber: 2, title: 'Doblez blintz', instruction: 'Lleva las 4 esquinas exactamente al centro.' },
        { stepNumber: 3, title: 'Segundo doblez al centro', instruction: 'Vuelve a doblar las nuevas 4 esquinas hacia el punto central.' },
        { stepNumber: 4, title: 'Giro y tercer doblez', instruction: 'Voltea la figura boca abajo y dobla nuevamente las 4 esquinas al centro.' },
        { stepNumber: 5, title: 'Despliegue de pétalos', instruction: 'Por la parte trasera, levanta las esquinas empujándolas suavemente hacia adelante para abrir cada pétalo.' }
      ]
    },
    {
      id: 'mariposa',
      name: 'Mariposa Monarca Escolar',
      difficulty: 'Fácil' as const,
      estimatedTime: '8 minutos',
      paperType: 'Cuadrado de 15 x 15 cm (naranja o café)',
      symbolism: 'Alusiva a los santuarios de mariposas del Estado de México y a la metamorfosis del bachiller.',
      steps: [
        { stepNumber: 1, title: 'Pliegues base', instruction: 'Dobla horizontal y diagonalmente para marcar una estrella de 8 rayos.' },
        { stepNumber: 2, title: 'Triángulo de agua', instruction: 'Empuja los laterales hacia adentro formando un triángulo con dos capas.' },
        { stepNumber: 3, title: 'Alas delanteras', instruction: 'Dobla las puntas frontales hacia la cúspide del triángulo.' },
        { stepNumber: 4, title: 'Inversión de la punta', instruction: 'Gira la figura y levanta la punta inferior hacia arriba, sobrepasando ligeramente el borde superior.' },
        { stepNumber: 5, title: 'Enganche y bloqueo', instruction: 'Dobla la pequeña punta sobrante sobre el borde y pliega la mariposa por el centro para darle tridimensionalidad.' }
      ]
    },
    {
      id: 'caja-masu',
      name: 'Caja Organizadora Masu',
      difficulty: 'Fácil' as const,
      estimatedTime: '12 minutos',
      paperType: 'Cuadrado resistente de 21 x 21 cm',
      symbolism: 'Útil para guardar clips, borradores y material didáctico en el aula escolar.',
      steps: [
        { stepNumber: 1, title: 'Cuadrícula de pliegues', instruction: 'Dobla las esquinas al centro (blintz) y luego divide la figura en tercios horizontales y verticales.' },
        { stepNumber: 2, title: 'Apertura de solapas', instruction: 'Desdobla dos esquinas opuestas dejando las otras dos dobladas hacia adentro.' },
        { stepNumber: 3, title: 'Levantamiento de muros', instruction: 'Levanta los dos lados laterales a 90 grados.' },
        { stepNumber: 4, title: 'Esquinas diagonales', instruction: 'Pliega las diagonales para formar las paredes restantes y dobla las solapas sobrantes hacia el fondo.' }
      ]
    }
  ]
};

export const DIAGNOSTICO_DATA = {
  periodo: 'Ciclo Escolar 2024-2025 / 2025-2026',
  totalAlumnos: 480,
  turnos: ['Matutino', 'Vespertino'],
  eficienciaTerminal: '88.4%',
  asistenciaPromedio: '94.2%',
  foda: {
    fortalezas: [
      'Instalaciones amplias con arcotecho, canchas deportivas y explanada cívica.',
      'Personal docente con alta preparación y compromiso pedagógico.',
      'Comunidad estudiantil entusiasta y activa en proyectos como el PAEC Origami.',
      'Clubs extracurriculares formativos en arte, danza, básquetbol y música.'
    ],
    oportunidades: [
      'Alianzas con la comunidad de Temoaya y municipios vecinos.',
      'Uso de herramientas digitales y tecnologías interactivas de aprendizaje.',
      'Participación en encuentros deportivos y culturales del subsistema de preparatorias oficiales.',
      'Ampliación de áreas ecológicas y huerto escolar.'
    ],
    debilidades: [
      'Necesidad de mayor equipamiento informático para el laboratorio de computación.',
      'Mantenimiento continuo de pintura e impermeabilización debido al clima de montaña.',
      'Optimización de tiempos de traslado para estudiantes de comunidades lejanas.'
    ],
    amenazas: [
      'Condiciones meteorológicas de lluvias intensas en la sierra de Temoaya.',
      'Distractores digitales externos que afectan la concentración escolar.',
      'Fluctuaciones económicas en el entorno familiar de la zona.'
    ]
  },
  metasEstrategicas: [
    { meta: 'Incrementar la eficiencia terminal al 92% mediante asesorías preventivas.', avance: 85 },
    { meta: 'Consolidar el 100% de participación de grupos en el PAEC Origami y Sustentabilidad.', avance: 95 },
    { meta: 'Equipamiento y mantenimiento preventivo de canchas y luminarias nocturnas.', avance: 90 },
    { meta: 'Fortalecer la vinculación con padres de familia a través de talleres y muestras artísticas.', avance: 80 }
  ]
};

export const PRESENTACION_SLIDES = [
  {
    slideNumber: 1,
    title: 'Bienvenidos a la EPO 44 Temoaya',
    subtitle: 'Formando líderes con Trabajo, Excelencia y Honestidad',
    image: '/assets/aistudio/IMG-20261016-WA0010_0ad88276.jpg',
    badge: 'Presentación Institucional',
    points: [
      'Institución pública de Educación Media Superior en el Estado de México.',
      'Comprometida con la formación integral humanista y científica.',
      'Espacio seguro, inclusivo y orientado a la superación de cada bachiller.'
    ]
  },
  {
    slideNumber: 2,
    title: 'Identidad y Valores Escolares',
    subtitle: 'El Escudo que nos une y nos llena de orgullo',
    image: '/assets/aistudio/IMG-20261016-WA0005_9c8b8385.jpg',
    badge: 'Identidad',
    points: [
      'Trabajo: La disciplina constante para alcanzar las metas individuales y colectivas.',
      'Excelencia: La búsqueda incansable de la calidad académica y humana.',
      'Honestidad: La transparencia, el respeto mutuo y la rectitud en cada acción escolar.'
    ]
  },
  {
    slideNumber: 3,
    title: 'Infraestructura de Primer Nivel',
    subtitle: 'Espacios dignos para el aprendizaje y la recreación',
    image: '/assets/aistudio/IMG-20261016-WA0004_e4c98a11.jpg',
    badge: 'Instalaciones',
    points: [
      'Canchas deportivas techadas con arcotecho de estructura curva monumental.',
      'Aulas iluminadas con cancelería moderna y vistas naturales.',
      'Explanada cívica para ceremonias, desfiles y honores patrios.',
      'Jardines podados y senderos rodeados de árboles de la región.'
    ]
  },
  {
    slideNumber: 4,
    title: 'Proyecto PAEC: Elaboración de Origami',
    subtitle: 'Innovación en el Programa Aula, Escuela y Comunidad',
    image: '/assets/aistudio/IMG-20261016-WA0009_2ee20a3c.jpg',
    badge: 'Proyectos Escolares',
    points: [
      'Integración del plegado de papel con geometría, ecología y bienestar emocional.',
      'Talleres colaborativos entre semestres matutinos y vespertinos.',
      'Exposición comunitaria de figuras geométricas y artísticas en Temoaya.'
    ]
  },
  {
    slideNumber: 5,
    title: 'Clubs Estudiantiles: Pasión y Disciplina',
    subtitle: 'Artes, Danzas, Básquetbol y Música',
    image: '/assets/aistudio/IMG-20261016-WA0007_4f40d188.jpg',
    badge: 'Vida Estudiantil',
    points: [
      'Club de Básquetbol: Competitividad sana y fomento a la salud en nuestras canchas.',
      'Club de Danzas: Orgullo folclórico mexiquense y expresión corporal.',
      'Club de Artes: Creación visual, pintura y muralismo colectivo.',
      'Club de Música: Interpretación de melodías y ensamble instrumental.'
    ]
  },
  {
    slideNumber: 6,
    title: 'Nuestra Escuela al Atardecer y la Noche',
    subtitle: 'Un faro de conocimiento con vista al Valle de Temoaya',
    image: '/assets/aistudio/IMG-20261016-WA0014_ff6cef22.jpg',
    badge: 'Comunidad Viva',
    points: [
      'Turno vespertino con iluminación adecuada y seguridad integral.',
      'Postales inolvidables del atardecer que inspiran a nuestra comunidad.',
      'El "Equipo A" orgulloso de construir el futuro de nuestra juventud.'
    ]
  }
];

export const INITIAL_EXCEL_DATA = [
  { id: 1, matricula: '2024-001', nombre: 'González Pérez Carlos', grupo: '101', club: 'Básquetbol', paecOrigami: 'Entregado (10)', promedio: 9.6, estatus: 'Regular' },
  { id: 2, matricula: '2024-002', nombre: 'Martínez López Ximena', grupo: '101', club: 'Artes', paecOrigami: 'Entregado (10)', promedio: 9.8, estatus: 'Regular' },
  { id: 3, matricula: '2024-003', nombre: 'Hernández Becerril Juan', grupo: '102', club: 'Básquetbol', paecOrigami: 'Entregado (9)', promedio: 8.9, estatus: 'Regular' },
  { id: 4, matricula: '2024-004', nombre: 'Cruz Morales Diana', grupo: '102', club: 'Danzas', paecOrigami: 'Entregado (10)', promedio: 9.4, estatus: 'Regular' },
  { id: 5, matricula: '2024-005', nombre: 'Sánchez García Miguel', grupo: '201', club: 'Música', paecOrigami: 'Entregado (9.5)', promedio: 9.1, estatus: 'Regular' },
  { id: 6, matricula: '2024-006', nombre: 'Reyes Mendoza Fernanda', grupo: '201', club: 'Artes', paecOrigami: 'Entregado (10)', promedio: 9.7, estatus: 'Regular' },
  { id: 7, matricula: '2024-007', nombre: 'Díaz Romero Eduardo', grupo: '202', club: 'Básquetbol', paecOrigami: 'Entregado (8.5)', promedio: 8.7, estatus: 'Regular' },
  { id: 8, matricula: '2024-008', nombre: 'Álvarez Nava Mariana', grupo: '301', club: 'Danzas', paecOrigami: 'Entregado (10)', promedio: 9.9, estatus: 'Excelencia' },
  { id: 9, matricula: '2024-009', nombre: 'Torres Flores Alejandro', grupo: '301', club: 'Música', paecOrigami: 'Entregado (9.0)', promedio: 9.0, estatus: 'Regular' },
  { id: 10, matricula: '2024-010', nombre: 'Vargas Silva Andrea', grupo: '302', club: 'Artes', paecOrigami: 'Entregado (10)', promedio: 9.5, estatus: 'Regular' },
  { id: 11, matricula: '2024-011', nombre: 'Castro Becerril Fernando', grupo: '101', club: 'Básquetbol', paecOrigami: 'Entregado (9.5)', promedio: 9.2, estatus: 'Regular' },
  { id: 12, matricula: '2024-012', nombre: 'Romero Solís Paulina', grupo: '102', club: 'Danzas', paecOrigami: 'Entregado (10)', promedio: 9.8, estatus: 'Excelencia' }
];

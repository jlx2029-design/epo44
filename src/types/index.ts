export type PageType = 
  | 'inicio' 
  | 'infraestructura' 
  | 'proyectos' 
  | 'clubs' 
  | 'conocenos' 
  | 'ubicacion' 
  | 'diagnostico' 
  | 'presentacion' 
  | 'excel';

export interface SchoolPhoto {
  id: string;
  src: string;
  title: string;
  category: 'infraestructura' | 'deportes' | 'civico' | 'paisaje' | 'aulas';
  description: string;
  tag: string;
}

export interface ClubInfo {
  id: string;
  name: string;
  category: 'Artes' | 'Danzas' | 'Básquetbol' | 'Música';
  icon: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  schedule: string;
  location: string;
  instructor: string;
  activities: string[];
  photoId?: string;
}

export interface OrigamiProject {
  id: string;
  name: string;
  difficulty: 'Fácil' | 'Intermedio' | 'Avanzado';
  estimatedTime: string;
  paperType: string;
  symbolism: string;
  steps: {
    stepNumber: number;
    title: string;
    instruction: string;
  }[];
}

export interface ExcelRow {
  id: number;
  [key: string]: string | number;
}

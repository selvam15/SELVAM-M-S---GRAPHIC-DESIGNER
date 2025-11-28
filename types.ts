// FIX: Import React to resolve "Cannot find namespace 'React'" error.
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: number; // Percentage from 0 to 100
}

export enum ProjectCategory {
  LOGOS = 'Logos',
  POSTERS = 'Posters',
  WEB = 'Web Designs',
  MOBILE = 'Mobile App Designs',
  BROCHURES = 'Brochures',
  CARDS = 'Visiting Cards',
  PORTFOLIOS = 'Portfolios',
  WEDDING = 'Wedding Cards',
  CERTIFICATES = 'Certificates',
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
  description: string;
}

export interface Feedback {
  id: number;
  clientInitials: string;
  feedback: string;
  rating: number; // 1 to 5
}

export type Stage =
  | 'group'
  | 'round-of-32'
  | 'round-of-16'
  | 'quarter-final'
  | 'semi-final'
  | 'third-place'
  | 'final';

export interface Venue {
  id: string;
  name: string;
  city: string;
  country: 'USA' | 'Canada' | 'Mexico';
  timezone: string;
  lat: number;
  lon: number;
}

export interface Team {
  code: string;
  name: string;
  group: string;
  flagEmoji: string;
}

export interface Match {
  id: string;
  matchNumber: number;
  stage: Stage;
  group?: string;
  matchday?: 1 | 2 | 3;
  homeTeam: string | null;
  awayTeam: string | null;
  homeLabel: string;
  awayLabel: string;
  startUtc: string;
  durationMinutes: number;
  venueId: string;
}

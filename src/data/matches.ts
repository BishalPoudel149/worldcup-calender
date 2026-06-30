import type { Match } from '../lib/types';

export const MATCHES: Match[] = [
  // ── GROUP STAGE ────────────────────────────────────────────────────────────

  // Group A - Matchday 1
  { id: 'WC2026-001', matchNumber: 1, stage: 'group', group: 'A', matchday: 1, homeTeam: 'MEX', awayTeam: 'RSA', homeLabel: 'Mexico', awayLabel: 'South Africa', startUtc: '2026-06-11T19:00:00Z', durationMinutes: 105, venueId: 'azteca' },
  { id: 'WC2026-002', matchNumber: 2, stage: 'group', group: 'A', matchday: 1, homeTeam: 'KOR', awayTeam: 'CZE', homeLabel: 'South Korea', awayLabel: 'Czech Republic', startUtc: '2026-06-12T02:00:00Z', durationMinutes: 105, venueId: 'akron' },

  // Group B - Matchday 1
  { id: 'WC2026-003', matchNumber: 3, stage: 'group', group: 'B', matchday: 1, homeTeam: 'CAN', awayTeam: 'BIH', homeLabel: 'Canada', awayLabel: 'Bosnia and Herzegovina', startUtc: '2026-06-12T19:00:00Z', durationMinutes: 105, venueId: 'bmo' },
  { id: 'WC2026-008', matchNumber: 8, stage: 'group', group: 'B', matchday: 1, homeTeam: 'QAT', awayTeam: 'SUI', homeLabel: 'Qatar', awayLabel: 'Switzerland', startUtc: '2026-06-13T19:00:00Z', durationMinutes: 105, venueId: 'levis' },

  // Group D - Matchday 1
  { id: 'WC2026-004', matchNumber: 4, stage: 'group', group: 'D', matchday: 1, homeTeam: 'USA', awayTeam: 'PAR', homeLabel: 'United States', awayLabel: 'Paraguay', startUtc: '2026-06-13T01:00:00Z', durationMinutes: 105, venueId: 'sofi' },
  { id: 'WC2026-006', matchNumber: 6, stage: 'group', group: 'D', matchday: 1, homeTeam: 'AUS', awayTeam: 'TUR', homeLabel: 'Australia', awayLabel: 'Turkey', startUtc: '2026-06-14T04:00:00Z', durationMinutes: 105, venueId: 'bcplace' },

  // Group C - Matchday 1
  { id: 'WC2026-005', matchNumber: 5, stage: 'group', group: 'C', matchday: 1, homeTeam: 'HAI', awayTeam: 'SCO', homeLabel: 'Haiti', awayLabel: 'Scotland', startUtc: '2026-06-14T01:00:00Z', durationMinutes: 105, venueId: 'gillette' },
  { id: 'WC2026-007', matchNumber: 7, stage: 'group', group: 'C', matchday: 1, homeTeam: 'BRA', awayTeam: 'MAR', homeLabel: 'Brazil', awayLabel: 'Morocco', startUtc: '2026-06-13T22:00:00Z', durationMinutes: 105, venueId: 'metlife' },

  // Group E - Matchday 1
  { id: 'WC2026-009', matchNumber: 9, stage: 'group', group: 'E', matchday: 1, homeTeam: 'GER', awayTeam: 'CUW', homeLabel: 'Germany', awayLabel: 'Curaçao', startUtc: '2026-06-14T17:00:00Z', durationMinutes: 105, venueId: 'nrg' },
  { id: 'WC2026-010', matchNumber: 10, stage: 'group', group: 'E', matchday: 1, homeTeam: 'CIV', awayTeam: 'ECU', homeLabel: 'Ivory Coast', awayLabel: 'Ecuador', startUtc: '2026-06-14T23:00:00Z', durationMinutes: 105, venueId: 'lincoln' },

  // Group F - Matchday 1
  { id: 'WC2026-011', matchNumber: 11, stage: 'group', group: 'F', matchday: 1, homeTeam: 'NED', awayTeam: 'JPN', homeLabel: 'Netherlands', awayLabel: 'Japan', startUtc: '2026-06-14T20:00:00Z', durationMinutes: 105, venueId: 'att' },
  { id: 'WC2026-012', matchNumber: 12, stage: 'group', group: 'F', matchday: 1, homeTeam: 'SWE', awayTeam: 'TUN', homeLabel: 'Sweden', awayLabel: 'Tunisia', startUtc: '2026-06-15T02:00:00Z', durationMinutes: 105, venueId: 'bbva' },

  // Group H - Matchday 1
  { id: 'WC2026-013', matchNumber: 13, stage: 'group', group: 'H', matchday: 1, homeTeam: 'KSA', awayTeam: 'URU', homeLabel: 'Saudi Arabia', awayLabel: 'Uruguay', startUtc: '2026-06-15T22:00:00Z', durationMinutes: 105, venueId: 'hardrock' },
  { id: 'WC2026-014', matchNumber: 14, stage: 'group', group: 'H', matchday: 1, homeTeam: 'ESP', awayTeam: 'CPV', homeLabel: 'Spain', awayLabel: 'Cabo Verde', startUtc: '2026-06-15T16:00:00Z', durationMinutes: 105, venueId: 'mercedesbenz' },

  // Group G - Matchday 1
  { id: 'WC2026-015', matchNumber: 15, stage: 'group', group: 'G', matchday: 1, homeTeam: 'IRN', awayTeam: 'NZL', homeLabel: 'Iran', awayLabel: 'New Zealand', startUtc: '2026-06-16T01:00:00Z', durationMinutes: 105, venueId: 'sofi' },
  { id: 'WC2026-016', matchNumber: 16, stage: 'group', group: 'G', matchday: 1, homeTeam: 'BEL', awayTeam: 'EGY', homeLabel: 'Belgium', awayLabel: 'Egypt', startUtc: '2026-06-15T19:00:00Z', durationMinutes: 105, venueId: 'lumen' },

  // Group I - Matchday 1
  { id: 'WC2026-017', matchNumber: 17, stage: 'group', group: 'I', matchday: 1, homeTeam: 'FRA', awayTeam: 'SEN', homeLabel: 'France', awayLabel: 'Senegal', startUtc: '2026-06-16T19:00:00Z', durationMinutes: 105, venueId: 'metlife' },
  { id: 'WC2026-018', matchNumber: 18, stage: 'group', group: 'I', matchday: 1, homeTeam: 'IRQ', awayTeam: 'NOR', homeLabel: 'Iraq', awayLabel: 'Norway', startUtc: '2026-06-16T22:00:00Z', durationMinutes: 105, venueId: 'gillette' },

  // Group J - Matchday 1
  { id: 'WC2026-019', matchNumber: 19, stage: 'group', group: 'J', matchday: 1, homeTeam: 'ARG', awayTeam: 'ALG', homeLabel: 'Argentina', awayLabel: 'Algeria', startUtc: '2026-06-17T01:00:00Z', durationMinutes: 105, venueId: 'arrowhead' },
  { id: 'WC2026-020', matchNumber: 20, stage: 'group', group: 'J', matchday: 1, homeTeam: 'AUT', awayTeam: 'JOR', homeLabel: 'Austria', awayLabel: 'Jordan', startUtc: '2026-06-17T04:00:00Z', durationMinutes: 105, venueId: 'levis' },

  // Group L - Matchday 1
  { id: 'WC2026-021', matchNumber: 21, stage: 'group', group: 'L', matchday: 1, homeTeam: 'GHA', awayTeam: 'PAN', homeLabel: 'Ghana', awayLabel: 'Panama', startUtc: '2026-06-17T23:00:00Z', durationMinutes: 105, venueId: 'bmo' },
  { id: 'WC2026-022', matchNumber: 22, stage: 'group', group: 'L', matchday: 1, homeTeam: 'ENG', awayTeam: 'CRO', homeLabel: 'England', awayLabel: 'Croatia', startUtc: '2026-06-17T20:00:00Z', durationMinutes: 105, venueId: 'att' },

  // Group K - Matchday 1
  { id: 'WC2026-023', matchNumber: 23, stage: 'group', group: 'K', matchday: 1, homeTeam: 'POR', awayTeam: 'COD', homeLabel: 'Portugal', awayLabel: 'DR Congo', startUtc: '2026-06-17T17:00:00Z', durationMinutes: 105, venueId: 'nrg' },
  { id: 'WC2026-024', matchNumber: 24, stage: 'group', group: 'K', matchday: 1, homeTeam: 'UZB', awayTeam: 'COL', homeLabel: 'Uzbekistan', awayLabel: 'Colombia', startUtc: '2026-06-18T02:00:00Z', durationMinutes: 105, venueId: 'azteca' },

  // Group A - Matchday 2
  { id: 'WC2026-025', matchNumber: 25, stage: 'group', group: 'A', matchday: 2, homeTeam: 'CZE', awayTeam: 'RSA', homeLabel: 'Czech Republic', awayLabel: 'South Africa', startUtc: '2026-06-18T16:00:00Z', durationMinutes: 105, venueId: 'mercedesbenz' },
  { id: 'WC2026-028', matchNumber: 28, stage: 'group', group: 'A', matchday: 2, homeTeam: 'MEX', awayTeam: 'KOR', homeLabel: 'Mexico', awayLabel: 'South Korea', startUtc: '2026-06-19T01:00:00Z', durationMinutes: 105, venueId: 'akron' },

  // Group B - Matchday 2
  { id: 'WC2026-026', matchNumber: 26, stage: 'group', group: 'B', matchday: 2, homeTeam: 'SUI', awayTeam: 'BIH', homeLabel: 'Switzerland', awayLabel: 'Bosnia and Herzegovina', startUtc: '2026-06-18T19:00:00Z', durationMinutes: 105, venueId: 'sofi' },
  { id: 'WC2026-027', matchNumber: 27, stage: 'group', group: 'B', matchday: 2, homeTeam: 'CAN', awayTeam: 'QAT', homeLabel: 'Canada', awayLabel: 'Qatar', startUtc: '2026-06-18T22:00:00Z', durationMinutes: 105, venueId: 'bcplace' },

  // Group C - Matchday 2
  { id: 'WC2026-029', matchNumber: 29, stage: 'group', group: 'C', matchday: 2, homeTeam: 'BRA', awayTeam: 'HAI', homeLabel: 'Brazil', awayLabel: 'Haiti', startUtc: '2026-06-20T00:30:00Z', durationMinutes: 105, venueId: 'lincoln' },
  { id: 'WC2026-030', matchNumber: 30, stage: 'group', group: 'C', matchday: 2, homeTeam: 'SCO', awayTeam: 'MAR', homeLabel: 'Scotland', awayLabel: 'Morocco', startUtc: '2026-06-19T22:00:00Z', durationMinutes: 105, venueId: 'gillette' },

  // Group D - Matchday 2
  { id: 'WC2026-031', matchNumber: 31, stage: 'group', group: 'D', matchday: 2, homeTeam: 'TUR', awayTeam: 'PAR', homeLabel: 'Turkey', awayLabel: 'Paraguay', startUtc: '2026-06-20T03:00:00Z', durationMinutes: 105, venueId: 'levis' },
  { id: 'WC2026-032', matchNumber: 32, stage: 'group', group: 'D', matchday: 2, homeTeam: 'USA', awayTeam: 'AUS', homeLabel: 'United States', awayLabel: 'Australia', startUtc: '2026-06-19T19:00:00Z', durationMinutes: 105, venueId: 'lumen' },

  // Group E - Matchday 2
  { id: 'WC2026-033', matchNumber: 33, stage: 'group', group: 'E', matchday: 2, homeTeam: 'GER', awayTeam: 'CIV', homeLabel: 'Germany', awayLabel: 'Ivory Coast', startUtc: '2026-06-20T20:00:00Z', durationMinutes: 105, venueId: 'bmo' },
  { id: 'WC2026-034', matchNumber: 34, stage: 'group', group: 'E', matchday: 2, homeTeam: 'ECU', awayTeam: 'CUW', homeLabel: 'Ecuador', awayLabel: 'Curaçao', startUtc: '2026-06-21T00:00:00Z', durationMinutes: 105, venueId: 'arrowhead' },

  // Group F - Matchday 2
  { id: 'WC2026-035', matchNumber: 35, stage: 'group', group: 'F', matchday: 2, homeTeam: 'NED', awayTeam: 'SWE', homeLabel: 'Netherlands', awayLabel: 'Sweden', startUtc: '2026-06-20T17:00:00Z', durationMinutes: 105, venueId: 'nrg' },
  { id: 'WC2026-036', matchNumber: 36, stage: 'group', group: 'F', matchday: 2, homeTeam: 'TUN', awayTeam: 'JPN', homeLabel: 'Tunisia', awayLabel: 'Japan', startUtc: '2026-06-21T04:00:00Z', durationMinutes: 105, venueId: 'bbva' },

  // Group H - Matchday 2
  { id: 'WC2026-037', matchNumber: 37, stage: 'group', group: 'H', matchday: 2, homeTeam: 'URU', awayTeam: 'CPV', homeLabel: 'Uruguay', awayLabel: 'Cabo Verde', startUtc: '2026-06-21T22:00:00Z', durationMinutes: 105, venueId: 'hardrock' },
  { id: 'WC2026-038', matchNumber: 38, stage: 'group', group: 'H', matchday: 2, homeTeam: 'ESP', awayTeam: 'KSA', homeLabel: 'Spain', awayLabel: 'Saudi Arabia', startUtc: '2026-06-21T16:00:00Z', durationMinutes: 105, venueId: 'mercedesbenz' },

  // Group G - Matchday 2
  { id: 'WC2026-039', matchNumber: 39, stage: 'group', group: 'G', matchday: 2, homeTeam: 'BEL', awayTeam: 'IRN', homeLabel: 'Belgium', awayLabel: 'Iran', startUtc: '2026-06-21T19:00:00Z', durationMinutes: 105, venueId: 'sofi' },
  { id: 'WC2026-040', matchNumber: 40, stage: 'group', group: 'G', matchday: 2, homeTeam: 'NZL', awayTeam: 'EGY', homeLabel: 'New Zealand', awayLabel: 'Egypt', startUtc: '2026-06-22T01:00:00Z', durationMinutes: 105, venueId: 'bcplace' },

  // Group I - Matchday 2
  { id: 'WC2026-041', matchNumber: 41, stage: 'group', group: 'I', matchday: 2, homeTeam: 'NOR', awayTeam: 'SEN', homeLabel: 'Norway', awayLabel: 'Senegal', startUtc: '2026-06-23T00:00:00Z', durationMinutes: 105, venueId: 'metlife' },
  { id: 'WC2026-042', matchNumber: 42, stage: 'group', group: 'I', matchday: 2, homeTeam: 'FRA', awayTeam: 'IRQ', homeLabel: 'France', awayLabel: 'Iraq', startUtc: '2026-06-22T21:00:00Z', durationMinutes: 105, venueId: 'lincoln' },

  // Group J - Matchday 2
  { id: 'WC2026-043', matchNumber: 43, stage: 'group', group: 'J', matchday: 2, homeTeam: 'ARG', awayTeam: 'AUT', homeLabel: 'Argentina', awayLabel: 'Austria', startUtc: '2026-06-22T17:00:00Z', durationMinutes: 105, venueId: 'att' },
  { id: 'WC2026-044', matchNumber: 44, stage: 'group', group: 'J', matchday: 2, homeTeam: 'JOR', awayTeam: 'ALG', homeLabel: 'Jordan', awayLabel: 'Algeria', startUtc: '2026-06-23T03:00:00Z', durationMinutes: 105, venueId: 'levis' },

  // Group L - Matchday 2
  { id: 'WC2026-045', matchNumber: 45, stage: 'group', group: 'L', matchday: 2, homeTeam: 'ENG', awayTeam: 'GHA', homeLabel: 'England', awayLabel: 'Ghana', startUtc: '2026-06-23T20:00:00Z', durationMinutes: 105, venueId: 'gillette' },
  { id: 'WC2026-046', matchNumber: 46, stage: 'group', group: 'L', matchday: 2, homeTeam: 'PAN', awayTeam: 'CRO', homeLabel: 'Panama', awayLabel: 'Croatia', startUtc: '2026-06-23T23:00:00Z', durationMinutes: 105, venueId: 'bmo' },

  // Group K - Matchday 2
  { id: 'WC2026-047', matchNumber: 47, stage: 'group', group: 'K', matchday: 2, homeTeam: 'POR', awayTeam: 'UZB', homeLabel: 'Portugal', awayLabel: 'Uzbekistan', startUtc: '2026-06-23T17:00:00Z', durationMinutes: 105, venueId: 'nrg' },
  { id: 'WC2026-048', matchNumber: 48, stage: 'group', group: 'K', matchday: 2, homeTeam: 'COL', awayTeam: 'COD', homeLabel: 'Colombia', awayLabel: 'DR Congo', startUtc: '2026-06-24T02:00:00Z', durationMinutes: 105, venueId: 'akron' },

  // Group C - Matchday 3
  { id: 'WC2026-049', matchNumber: 49, stage: 'group', group: 'C', matchday: 3, homeTeam: 'SCO', awayTeam: 'BRA', homeLabel: 'Scotland', awayLabel: 'Brazil', startUtc: '2026-06-24T22:00:00Z', durationMinutes: 105, venueId: 'hardrock' },
  { id: 'WC2026-050', matchNumber: 50, stage: 'group', group: 'C', matchday: 3, homeTeam: 'MAR', awayTeam: 'HAI', homeLabel: 'Morocco', awayLabel: 'Haiti', startUtc: '2026-06-24T22:00:00Z', durationMinutes: 105, venueId: 'mercedesbenz' },

  // Group A - Matchday 3
  { id: 'WC2026-051', matchNumber: 51, stage: 'group', group: 'A', matchday: 3, homeTeam: 'CZE', awayTeam: 'MEX', homeLabel: 'Czech Republic', awayLabel: 'Mexico', startUtc: '2026-06-25T01:00:00Z', durationMinutes: 105, venueId: 'azteca' },
  { id: 'WC2026-052', matchNumber: 52, stage: 'group', group: 'A', matchday: 3, homeTeam: 'RSA', awayTeam: 'KOR', homeLabel: 'South Africa', awayLabel: 'South Korea', startUtc: '2026-06-25T01:00:00Z', durationMinutes: 105, venueId: 'bbva' },

  // Group B - Matchday 3
  { id: 'WC2026-053', matchNumber: 53, stage: 'group', group: 'B', matchday: 3, homeTeam: 'SUI', awayTeam: 'CAN', homeLabel: 'Switzerland', awayLabel: 'Canada', startUtc: '2026-06-24T19:00:00Z', durationMinutes: 105, venueId: 'bcplace' },
  { id: 'WC2026-054', matchNumber: 54, stage: 'group', group: 'B', matchday: 3, homeTeam: 'BIH', awayTeam: 'QAT', homeLabel: 'Bosnia and Herzegovina', awayLabel: 'Qatar', startUtc: '2026-06-24T19:00:00Z', durationMinutes: 105, venueId: 'lumen' },

  // Group E - Matchday 3
  { id: 'WC2026-055', matchNumber: 55, stage: 'group', group: 'E', matchday: 3, homeTeam: 'CUW', awayTeam: 'CIV', homeLabel: 'Curaçao', awayLabel: 'Ivory Coast', startUtc: '2026-06-25T20:00:00Z', durationMinutes: 105, venueId: 'lincoln' },
  { id: 'WC2026-056', matchNumber: 56, stage: 'group', group: 'E', matchday: 3, homeTeam: 'ECU', awayTeam: 'GER', homeLabel: 'Ecuador', awayLabel: 'Germany', startUtc: '2026-06-25T20:00:00Z', durationMinutes: 105, venueId: 'metlife' },

  // Group F - Matchday 3
  { id: 'WC2026-057', matchNumber: 57, stage: 'group', group: 'F', matchday: 3, homeTeam: 'JPN', awayTeam: 'SWE', homeLabel: 'Japan', awayLabel: 'Sweden', startUtc: '2026-06-25T23:00:00Z', durationMinutes: 105, venueId: 'att' },
  { id: 'WC2026-058', matchNumber: 58, stage: 'group', group: 'F', matchday: 3, homeTeam: 'TUN', awayTeam: 'NED', homeLabel: 'Tunisia', awayLabel: 'Netherlands', startUtc: '2026-06-25T23:00:00Z', durationMinutes: 105, venueId: 'arrowhead' },

  // Group D - Matchday 3
  { id: 'WC2026-059', matchNumber: 59, stage: 'group', group: 'D', matchday: 3, homeTeam: 'TUR', awayTeam: 'USA', homeLabel: 'Turkey', awayLabel: 'United States', startUtc: '2026-06-26T02:00:00Z', durationMinutes: 105, venueId: 'sofi' },
  { id: 'WC2026-060', matchNumber: 60, stage: 'group', group: 'D', matchday: 3, homeTeam: 'PAR', awayTeam: 'AUS', homeLabel: 'Paraguay', awayLabel: 'Australia', startUtc: '2026-06-26T02:00:00Z', durationMinutes: 105, venueId: 'levis' },

  // Group I - Matchday 3
  { id: 'WC2026-061', matchNumber: 61, stage: 'group', group: 'I', matchday: 3, homeTeam: 'NOR', awayTeam: 'FRA', homeLabel: 'Norway', awayLabel: 'France', startUtc: '2026-06-26T19:00:00Z', durationMinutes: 105, venueId: 'gillette' },
  { id: 'WC2026-062', matchNumber: 62, stage: 'group', group: 'I', matchday: 3, homeTeam: 'SEN', awayTeam: 'IRQ', homeLabel: 'Senegal', awayLabel: 'Iraq', startUtc: '2026-06-26T19:00:00Z', durationMinutes: 105, venueId: 'bmo' },

  // Group G - Matchday 3
  { id: 'WC2026-063', matchNumber: 63, stage: 'group', group: 'G', matchday: 3, homeTeam: 'EGY', awayTeam: 'IRN', homeLabel: 'Egypt', awayLabel: 'Iran', startUtc: '2026-06-27T03:00:00Z', durationMinutes: 105, venueId: 'lumen' },
  { id: 'WC2026-064', matchNumber: 64, stage: 'group', group: 'G', matchday: 3, homeTeam: 'NZL', awayTeam: 'BEL', homeLabel: 'New Zealand', awayLabel: 'Belgium', startUtc: '2026-06-27T03:00:00Z', durationMinutes: 105, venueId: 'bcplace' },

  // Group H - Matchday 3
  { id: 'WC2026-065', matchNumber: 65, stage: 'group', group: 'H', matchday: 3, homeTeam: 'CPV', awayTeam: 'KSA', homeLabel: 'Cabo Verde', awayLabel: 'Saudi Arabia', startUtc: '2026-06-27T00:00:00Z', durationMinutes: 105, venueId: 'nrg' },
  { id: 'WC2026-066', matchNumber: 66, stage: 'group', group: 'H', matchday: 3, homeTeam: 'URU', awayTeam: 'ESP', homeLabel: 'Uruguay', awayLabel: 'Spain', startUtc: '2026-06-27T00:00:00Z', durationMinutes: 105, venueId: 'akron' },

  // Group L - Matchday 3
  { id: 'WC2026-067', matchNumber: 67, stage: 'group', group: 'L', matchday: 3, homeTeam: 'PAN', awayTeam: 'ENG', homeLabel: 'Panama', awayLabel: 'England', startUtc: '2026-06-27T21:00:00Z', durationMinutes: 105, venueId: 'metlife' },
  { id: 'WC2026-068', matchNumber: 68, stage: 'group', group: 'L', matchday: 3, homeTeam: 'CRO', awayTeam: 'GHA', homeLabel: 'Croatia', awayLabel: 'Ghana', startUtc: '2026-06-27T21:00:00Z', durationMinutes: 105, venueId: 'lincoln' },

  // Group J - Matchday 3
  { id: 'WC2026-069', matchNumber: 69, stage: 'group', group: 'J', matchday: 3, homeTeam: 'ALG', awayTeam: 'AUT', homeLabel: 'Algeria', awayLabel: 'Austria', startUtc: '2026-06-28T02:00:00Z', durationMinutes: 105, venueId: 'arrowhead' },
  { id: 'WC2026-070', matchNumber: 70, stage: 'group', group: 'J', matchday: 3, homeTeam: 'JOR', awayTeam: 'ARG', homeLabel: 'Jordan', awayLabel: 'Argentina', startUtc: '2026-06-28T02:00:00Z', durationMinutes: 105, venueId: 'att' },

  // Group K - Matchday 3
  { id: 'WC2026-071', matchNumber: 71, stage: 'group', group: 'K', matchday: 3, homeTeam: 'COL', awayTeam: 'POR', homeLabel: 'Colombia', awayLabel: 'Portugal', startUtc: '2026-06-27T23:30:00Z', durationMinutes: 105, venueId: 'hardrock' },
  { id: 'WC2026-072', matchNumber: 72, stage: 'group', group: 'K', matchday: 3, homeTeam: 'COD', awayTeam: 'UZB', homeLabel: 'DR Congo', awayLabel: 'Uzbekistan', startUtc: '2026-06-27T23:30:00Z', durationMinutes: 105, venueId: 'mercedesbenz' },

  // ── ROUND OF 32 ────────────────────────────────────────────────────────────

  { id: 'WC2026-073', matchNumber: 73, stage: 'round-of-32', homeTeam: 'RSA', awayTeam: 'CAN', homeLabel: 'South Africa', awayLabel: 'Canada', startUtc: '2026-06-28T19:00:00Z', durationMinutes: 120, venueId: 'sofi' },
  { id: 'WC2026-074', matchNumber: 74, stage: 'round-of-32', homeTeam: 'BRA', awayTeam: 'JPN', homeLabel: 'Brazil', awayLabel: 'Japan', startUtc: '2026-06-29T17:00:00Z', durationMinutes: 120, venueId: 'nrg' },
  { id: 'WC2026-075', matchNumber: 75, stage: 'round-of-32', homeTeam: 'NED', awayTeam: 'MAR', homeLabel: 'Netherlands', awayLabel: 'Morocco', startUtc: '2026-06-30T01:00:00Z', durationMinutes: 120, venueId: 'bbva' },
  { id: 'WC2026-076', matchNumber: 76, stage: 'round-of-32', homeTeam: 'GER', awayTeam: 'PAR', homeLabel: 'Germany', awayLabel: 'Paraguay', startUtc: '2026-06-29T20:30:00Z', durationMinutes: 120, venueId: 'gillette' },
  { id: 'WC2026-077', matchNumber: 77, stage: 'round-of-32', homeTeam: 'FRA', awayTeam: 'SWE', homeLabel: 'France', awayLabel: 'Sweden', startUtc: '2026-06-30T21:00:00Z', durationMinutes: 120, venueId: 'metlife' },
  { id: 'WC2026-078', matchNumber: 78, stage: 'round-of-32', homeTeam: 'BEL', awayTeam: 'SEN', homeLabel: 'Belgium', awayLabel: 'Senegal', startUtc: '2026-07-01T20:00:00Z', durationMinutes: 120, venueId: 'lumen' },
  { id: 'WC2026-079', matchNumber: 79, stage: 'round-of-32', homeTeam: 'USA', awayTeam: 'BIH', homeLabel: 'United States', awayLabel: 'Bosnia and Herzegovina', startUtc: '2026-07-02T00:00:00Z', durationMinutes: 120, venueId: 'levis' },
  { id: 'WC2026-080', matchNumber: 80, stage: 'round-of-32', homeTeam: 'ESP', awayTeam: 'AUT', homeLabel: 'Spain', awayLabel: 'Austria', startUtc: '2026-07-02T16:00:00Z', durationMinutes: 120, venueId: 'sofi' },
  { id: 'WC2026-081', matchNumber: 81, stage: 'round-of-32', homeTeam: 'POR', awayTeam: 'CRO', homeLabel: 'Portugal', awayLabel: 'Croatia', startUtc: '2026-07-02T23:00:00Z', durationMinutes: 120, venueId: 'bmo' },
  { id: 'WC2026-082', matchNumber: 82, stage: 'round-of-32', homeTeam: 'CIV', awayTeam: 'NOR', homeLabel: 'Ivory Coast', awayLabel: 'Norway', startUtc: '2026-06-30T17:00:00Z', durationMinutes: 120, venueId: 'att' },
  { id: 'WC2026-083', matchNumber: 83, stage: 'round-of-32', homeTeam: 'MEX', awayTeam: 'ECU', homeLabel: 'Mexico', awayLabel: 'Ecuador', startUtc: '2026-07-01T01:00:00Z', durationMinutes: 120, venueId: 'azteca' },
  { id: 'WC2026-084', matchNumber: 84, stage: 'round-of-32', homeTeam: 'ENG', awayTeam: 'COD', homeLabel: 'England', awayLabel: 'DR Congo', startUtc: '2026-07-01T16:00:00Z', durationMinutes: 120, venueId: 'mercedesbenz' },
  { id: 'WC2026-085', matchNumber: 85, stage: 'round-of-32', homeTeam: 'SUI', awayTeam: 'ALG', homeLabel: 'Switzerland', awayLabel: 'Algeria', startUtc: '2026-07-03T03:00:00Z', durationMinutes: 120, venueId: 'bcplace' },
  { id: 'WC2026-086', matchNumber: 86, stage: 'round-of-32', homeTeam: 'COL', awayTeam: 'GHA', homeLabel: 'Colombia', awayLabel: 'Ghana', startUtc: '2026-07-04T00:30:00Z', durationMinutes: 120, venueId: 'arrowhead' },
  { id: 'WC2026-087', matchNumber: 87, stage: 'round-of-32', homeTeam: 'AUS', awayTeam: 'EGY', homeLabel: 'Australia', awayLabel: 'Egypt', startUtc: '2026-07-03T18:00:00Z', durationMinutes: 120, venueId: 'att' },
  { id: 'WC2026-088', matchNumber: 88, stage: 'round-of-32', homeTeam: 'ARG', awayTeam: 'CPV', homeLabel: 'Argentina', awayLabel: 'Cabo Verde', startUtc: '2026-07-03T22:00:00Z', durationMinutes: 120, venueId: 'hardrock' },

  // ── ROUND OF 16 ────────────────────────────────────────────────────────────

  { id: 'WC2026-089', matchNumber: 89, stage: 'round-of-16', homeTeam: null, awayTeam: null, homeLabel: 'Winner Match 79', awayLabel: 'Winner Match 80', startUtc: '2026-07-05T01:00:00Z', durationMinutes: 120, venueId: 'lincoln' },
  { id: 'WC2026-090', matchNumber: 90, stage: 'round-of-16', homeTeam: null, awayTeam: null, homeLabel: 'Winner Match 73', awayLabel: 'Winner Match 74', startUtc: '2026-07-04T22:00:00Z', durationMinutes: 120, venueId: 'nrg' },
  { id: 'WC2026-091', matchNumber: 91, stage: 'round-of-16', homeTeam: null, awayTeam: null, homeLabel: 'Winner Match 77', awayLabel: 'Winner Match 78', startUtc: '2026-07-05T23:00:00Z', durationMinutes: 120, venueId: 'metlife' },
  { id: 'WC2026-092', matchNumber: 92, stage: 'round-of-16', homeTeam: null, awayTeam: null, homeLabel: 'Winner Match 75', awayLabel: 'Winner Match 76', startUtc: '2026-07-06T06:00:00Z', durationMinutes: 120, venueId: 'azteca' },
  { id: 'WC2026-093', matchNumber: 93, stage: 'round-of-16', homeTeam: null, awayTeam: null, homeLabel: 'Winner Match 87', awayLabel: 'Winner Match 88', startUtc: '2026-07-07T00:00:00Z', durationMinutes: 120, venueId: 'att' },
  { id: 'WC2026-094', matchNumber: 94, stage: 'round-of-16', homeTeam: null, awayTeam: null, homeLabel: 'Winner Match 81', awayLabel: 'Winner Match 82', startUtc: '2026-07-07T07:00:00Z', durationMinutes: 120, venueId: 'lumen' },
  { id: 'WC2026-095', matchNumber: 95, stage: 'round-of-16', homeTeam: null, awayTeam: null, homeLabel: 'Winner Match 83', awayLabel: 'Winner Match 84', startUtc: '2026-07-07T20:00:00Z', durationMinutes: 120, venueId: 'mercedesbenz' },
  { id: 'WC2026-096', matchNumber: 96, stage: 'round-of-16', homeTeam: null, awayTeam: null, homeLabel: 'Winner Match 85', awayLabel: 'Winner Match 86', startUtc: '2026-07-08T03:00:00Z', durationMinutes: 120, venueId: 'bcplace' },

  // ── QUARTER-FINALS ─────────────────────────────────────────────────────────

  { id: 'WC2026-097', matchNumber: 97, stage: 'quarter-final', homeTeam: null, awayTeam: null, homeLabel: 'Winner Match 89', awayLabel: 'Winner Match 90', startUtc: '2026-07-09T20:00:00Z', durationMinutes: 120, venueId: 'gillette' },
  { id: 'WC2026-098', matchNumber: 98, stage: 'quarter-final', homeTeam: null, awayTeam: null, homeLabel: 'Winner Match 93', awayLabel: 'Winner Match 94', startUtc: '2026-07-10T19:00:00Z', durationMinutes: 120, venueId: 'sofi' },
  { id: 'WC2026-099', matchNumber: 99, stage: 'quarter-final', homeTeam: null, awayTeam: null, homeLabel: 'Winner Match 91', awayLabel: 'Winner Match 92', startUtc: '2026-07-11T21:00:00Z', durationMinutes: 120, venueId: 'hardrock' },
  { id: 'WC2026-100', matchNumber: 100, stage: 'quarter-final', homeTeam: null, awayTeam: null, homeLabel: 'Winner Match 95', awayLabel: 'Winner Match 96', startUtc: '2026-07-12T01:00:00Z', durationMinutes: 120, venueId: 'arrowhead' },

  // ── SEMI-FINALS ────────────────────────────────────────────────────────────

  { id: 'WC2026-101', matchNumber: 101, stage: 'semi-final', homeTeam: null, awayTeam: null, homeLabel: 'Winner QF1', awayLabel: 'Winner QF2', startUtc: '2026-07-15T00:00:00Z', durationMinutes: 120, venueId: 'att' },
  { id: 'WC2026-102', matchNumber: 102, stage: 'semi-final', homeTeam: null, awayTeam: null, homeLabel: 'Winner QF3', awayLabel: 'Winner QF4', startUtc: '2026-07-15T23:00:00Z', durationMinutes: 120, venueId: 'mercedesbenz' },

  // ── THIRD PLACE ────────────────────────────────────────────────────────────

  { id: 'WC2026-103', matchNumber: 103, stage: 'third-place', homeTeam: null, awayTeam: null, homeLabel: 'SF1 Loser', awayLabel: 'SF2 Loser', startUtc: '2026-07-18T23:00:00Z', durationMinutes: 120, venueId: 'hardrock' },

  // ── FINAL ──────────────────────────────────────────────────────────────────

  { id: 'WC2026-104', matchNumber: 104, stage: 'final', homeTeam: null, awayTeam: null, homeLabel: 'SF1 Winner', awayLabel: 'SF2 Winner', startUtc: '2026-07-19T19:00:00Z', durationMinutes: 120, venueId: 'metlife' },
];

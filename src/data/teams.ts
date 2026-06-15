import type { Team } from '../lib/types';

export const TEAMS: Record<string, Team> = {
  MEX: { code: 'MEX', name: 'Mexico', group: 'A', flagEmoji: '🇲🇽' },
  KOR: { code: 'KOR', name: 'South Korea', group: 'A', flagEmoji: '🇰🇷' },
  RSA: { code: 'RSA', name: 'South Africa', group: 'A', flagEmoji: '🇿🇦' },
  CZE: { code: 'CZE', name: 'Czech Republic', group: 'A', flagEmoji: '🇨🇿' },

  CAN: { code: 'CAN', name: 'Canada', group: 'B', flagEmoji: '🇨🇦' },
  QAT: { code: 'QAT', name: 'Qatar', group: 'B', flagEmoji: '🇶🇦' },
  SUI: { code: 'SUI', name: 'Switzerland', group: 'B', flagEmoji: '🇨🇭' },
  BIH: { code: 'BIH', name: 'Bosnia and Herzegovina', group: 'B', flagEmoji: '🇧🇦' },

  BRA: { code: 'BRA', name: 'Brazil', group: 'C', flagEmoji: '🇧🇷' },
  MAR: { code: 'MAR', name: 'Morocco', group: 'C', flagEmoji: '🇲🇦' },
  SCO: { code: 'SCO', name: 'Scotland', group: 'C', flagEmoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
  HAI: { code: 'HAI', name: 'Haiti', group: 'C', flagEmoji: '🇭🇹' },

  USA: { code: 'USA', name: 'United States', group: 'D', flagEmoji: '🇺🇸' },
  AUS: { code: 'AUS', name: 'Australia', group: 'D', flagEmoji: '🇦🇺' },
  TUR: { code: 'TUR', name: 'Turkey', group: 'D', flagEmoji: '🇹🇷' },
  PAR: { code: 'PAR', name: 'Paraguay', group: 'D', flagEmoji: '🇵🇾' },

  GER: { code: 'GER', name: 'Germany', group: 'E', flagEmoji: '🇩🇪' },
  CIV: { code: 'CIV', name: 'Ivory Coast', group: 'E', flagEmoji: '🇨🇮' },
  ECU: { code: 'ECU', name: 'Ecuador', group: 'E', flagEmoji: '🇪🇨' },
  CUW: { code: 'CUW', name: 'Curaçao', group: 'E', flagEmoji: '🇨🇼' },

  NED: { code: 'NED', name: 'Netherlands', group: 'F', flagEmoji: '🇳🇱' },
  JPN: { code: 'JPN', name: 'Japan', group: 'F', flagEmoji: '🇯🇵' },
  SWE: { code: 'SWE', name: 'Sweden', group: 'F', flagEmoji: '🇸🇪' },
  TUN: { code: 'TUN', name: 'Tunisia', group: 'F', flagEmoji: '🇹🇳' },

  BEL: { code: 'BEL', name: 'Belgium', group: 'G', flagEmoji: '🇧🇪' },
  EGY: { code: 'EGY', name: 'Egypt', group: 'G', flagEmoji: '🇪🇬' },
  IRN: { code: 'IRN', name: 'Iran', group: 'G', flagEmoji: '🇮🇷' },
  NZL: { code: 'NZL', name: 'New Zealand', group: 'G', flagEmoji: '🇳🇿' },

  ESP: { code: 'ESP', name: 'Spain', group: 'H', flagEmoji: '🇪🇸' },
  KSA: { code: 'KSA', name: 'Saudi Arabia', group: 'H', flagEmoji: '🇸🇦' },
  URU: { code: 'URU', name: 'Uruguay', group: 'H', flagEmoji: '🇺🇾' },
  CPV: { code: 'CPV', name: 'Cape Verde', group: 'H', flagEmoji: '🇨🇻' },

  FRA: { code: 'FRA', name: 'France', group: 'I', flagEmoji: '🇫🇷' },
  SEN: { code: 'SEN', name: 'Senegal', group: 'I', flagEmoji: '🇸🇳' },
  NOR: { code: 'NOR', name: 'Norway', group: 'I', flagEmoji: '🇳🇴' },
  IRQ: { code: 'IRQ', name: 'Iraq', group: 'I', flagEmoji: '🇮🇶' },

  ARG: { code: 'ARG', name: 'Argentina', group: 'J', flagEmoji: '🇦🇷' },
  AUT: { code: 'AUT', name: 'Austria', group: 'J', flagEmoji: '🇦🇹' },
  ALG: { code: 'ALG', name: 'Algeria', group: 'J', flagEmoji: '🇩🇿' },
  JOR: { code: 'JOR', name: 'Jordan', group: 'J', flagEmoji: '🇯🇴' },

  POR: { code: 'POR', name: 'Portugal', group: 'K', flagEmoji: '🇵🇹' },
  COL: { code: 'COL', name: 'Colombia', group: 'K', flagEmoji: '🇨🇴' },
  COD: { code: 'COD', name: 'DR Congo', group: 'K', flagEmoji: '🇨🇩' },
  UZB: { code: 'UZB', name: 'Uzbekistan', group: 'K', flagEmoji: '🇺🇿' },

  ENG: { code: 'ENG', name: 'England', group: 'L', flagEmoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  CRO: { code: 'CRO', name: 'Croatia', group: 'L', flagEmoji: '🇭🇷' },
  GHA: { code: 'GHA', name: 'Ghana', group: 'L', flagEmoji: '🇬🇭' },
  PAN: { code: 'PAN', name: 'Panama', group: 'L', flagEmoji: '🇵🇦' },
};

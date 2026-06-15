import type { Match, Stage } from './types';

const STAGE_ORDER: Stage[] = [
  'group',
  'round-of-32',
  'round-of-16',
  'quarter-final',
  'semi-final',
  'third-place',
  'final',
];

export const STAGE_LABELS: Record<Stage, string> = {
  group: 'Group Stage',
  'round-of-32': 'Round of 32',
  'round-of-16': 'Round of 16',
  'quarter-final': 'Quarter-Finals',
  'semi-final': 'Semi-Finals',
  'third-place': 'Third Place Play-off',
  final: 'Final',
};

export function groupMatchesByDate(matches: Match[]): Map<string, Match[]> {
  const map = new Map<string, Match[]>();
  for (const match of matches) {
    const date = match.startUtc.slice(0, 10);
    const existing = map.get(date) ?? [];
    existing.push(match);
    map.set(date, existing);
  }
  return new Map([...map.entries()].sort());
}

export function sortedStages(matches: Match[]): Stage[] {
  const present = new Set(matches.map((m) => m.stage));
  return STAGE_ORDER.filter((s) => present.has(s));
}

export function formatMatchTime(utcIso: string): string {
  const d = new Date(utcIso);
  return d.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'UTC',
  }) + ' UTC';
}

export function formatMatchDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00Z');
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatGroupStageLabel(match: Match): string {
  if (match.stage !== 'group') return STAGE_LABELS[match.stage];
  return `Group ${match.group} · Matchday ${match.matchday}`;
}

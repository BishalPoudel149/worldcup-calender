import type { Match } from './types';
import { VENUES } from '../data/venues';

function formatUtcDate(isoUtc: string): string {
  return isoUtc.replace(/[-:]/g, '').replace(/\.\d+/, '');
}

function addMinutes(isoUtc: string, minutes: number): string {
  const d = new Date(new Date(isoUtc).getTime() + minutes * 60 * 1000);
  return formatUtcDate(d.toISOString());
}

function escapeText(str: string): string {
  // Only escape backslash and semicolon — skip comma escaping
  // as some native Android parsers (Mi/Poco) choke on \,
  return str
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;');
}

function formatStageName(match: Match): string {
  const map: Record<string, string> = {
    group: `Group ${match.group} - Matchday ${match.matchday}`,
    'round-of-32': 'Round of 32',
    'round-of-16': 'Round of 16',
    'quarter-final': 'Quarter-Final',
    'semi-final': 'Semi-Final',
    'third-place': 'Third Place Play-off',
    final: 'Final',
  };
  return map[match.stage] ?? match.stage;
}

export function generateICS(matches: Match[]): string {
  const now = formatUtcDate(new Date().toISOString());

  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//WorldCup2026Calendar//EN',
    'X-WR-CALNAME:FIFA World Cup 2026',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ];

  for (const match of matches) {
    const venue = VENUES[match.venueId];
    const summary = `${match.homeLabel} vs ${match.awayLabel}`;
    const stageLabel = formatStageName(match);
    // Keep description short and on one line — no folding needed, no special chars
    const description = `FIFA World Cup 2026 - ${stageLabel} - ${venue.city}`;
    // Location without escaping commas — plain text
    const location = `${venue.name} - ${venue.city} - ${venue.country}`;

    lines.push('BEGIN:VEVENT');
    lines.push(`UID:${match.id}@worldcup2026.app`);
    lines.push(`DTSTAMP:${now}`);
    lines.push(`DTSTART:${formatUtcDate(match.startUtc)}`);
    lines.push(`DTEND:${addMinutes(match.startUtc, match.durationMinutes)}`);
    lines.push(`SUMMARY:${escapeText(summary)}`);
    lines.push(`DESCRIPTION:${escapeText(description)}`);
    lines.push(`LOCATION:${escapeText(location)}`);
    lines.push('STATUS:CONFIRMED');
    lines.push('END:VEVENT');
  }

  lines.push('END:VCALENDAR');
  return lines.join('\r\n') + '\r\n';
}

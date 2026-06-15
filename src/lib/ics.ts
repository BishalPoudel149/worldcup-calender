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
  return str
    .replace(/\\/g, '\\\\')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
    .replace(/\n/g, '\\n');
}

function foldLine(line: string): string {
  const bytes = Buffer.from(line, 'utf8');
  if (bytes.length <= 75) return line;
  const chunks: string[] = [];
  let start = 0;
  while (start < bytes.length) {
    const limit = start === 0 ? 75 : 74;
    let end = start + limit;
    // ensure we don't split a multi-byte sequence
    while (end < bytes.length && (bytes[end] & 0xc0) === 0x80) end--;
    chunks.push(bytes.slice(start, end).toString('utf8'));
    start = end;
  }
  return chunks.join('\r\n ');
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
    'X-WR-CALDESC:Full match schedule for the 2026 FIFA World Cup',
    'X-WR-TIMEZONE:UTC',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'REFRESH-INTERVAL;VALUE=DURATION:PT12H',
    'X-PUBLISHED-TTL:PT12H',
  ];

  for (const match of matches) {
    const venue = VENUES[match.venueId];
    const summary = `${match.homeLabel} vs ${match.awayLabel}`;
    const stageLabel = formatStageName(match);
    const description = [
      'FIFA World Cup 2026',
      stageLabel,
      `${venue.name}\\, ${venue.city}`,
      'All times in UTC',
    ].join('\\n');

    lines.push('BEGIN:VEVENT');
    lines.push(foldLine(`UID:${match.id}@worldcup2026.app`));
    lines.push(`DTSTAMP:${now}`);
    lines.push(`DTSTART:${formatUtcDate(match.startUtc)}`);
    lines.push(`DTEND:${addMinutes(match.startUtc, match.durationMinutes)}`);
    lines.push(foldLine(`SUMMARY:⚽ ${escapeText(summary)}`));
    lines.push(foldLine(`DESCRIPTION:${description}`));
    lines.push(foldLine(`LOCATION:${escapeText(`${venue.name}, ${venue.city}, ${venue.country}`)}`));
    lines.push(`GEO:${venue.lat};${venue.lon}`);
    lines.push('STATUS:CONFIRMED');
    lines.push(foldLine(`CATEGORIES:FIFA World Cup 2026,${stageLabel}`));
    lines.push('END:VEVENT');
  }

  lines.push('END:VCALENDAR');
  return lines.join('\r\n') + '\r\n';
}

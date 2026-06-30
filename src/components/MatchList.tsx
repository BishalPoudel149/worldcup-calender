'use client';

import type { Match, Venue } from '@/lib/types';
import MatchGroup from './MatchGroup';

interface MatchListProps {
  matches: Match[];
  venues: Record<string, Venue>;
}

function groupByLocalDate(matches: Match[]): Map<string, Match[]> {
  const map = new Map<string, Match[]>();
  for (const match of matches) {
    const localDate = new Date(match.startUtc).toLocaleDateString('en-CA'); // YYYY-MM-DD in local tz
    const existing = map.get(localDate) ?? [];
    existing.push(match);
    map.set(localDate, existing);
  }
  return new Map([...map.entries()].sort());
}

export default function MatchList({ matches, venues }: MatchListProps) {
  const matchesByDate = groupByLocalDate(matches);

  if (matchesByDate.size === 0) {
    return (
      <div className="rounded-xl border border-gray-700 bg-gray-800 p-12 text-center text-gray-400">
        No matches found for the selected filter.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {[...matchesByDate.entries()].map(([date, dateMatches]) => (
        <MatchGroup key={date} date={date} matches={dateMatches} venues={venues} />
      ))}
    </div>
  );
}

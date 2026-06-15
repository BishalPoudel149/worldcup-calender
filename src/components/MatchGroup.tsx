import type { Match } from '@/lib/types';
import type { Venue } from '@/lib/types';
import MatchCard from './MatchCard';
import { formatMatchDate } from '@/lib/match-utils';

interface MatchGroupProps {
  date: string;
  matches: Match[];
  venues: Record<string, Venue>;
}

export default function MatchGroup({ date, matches, venues }: MatchGroupProps) {
  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
        {formatMatchDate(date)}
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} venue={venues[match.venueId]} />
        ))}
      </div>
    </section>
  );
}

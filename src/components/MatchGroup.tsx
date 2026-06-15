import type { Match } from '@/lib/types';
import type { Venue } from '@/lib/types';
import MatchCard from './MatchCard';
import LocalDate from './LocalDate';

interface MatchGroupProps {
  date: string;
  matches: Match[];
  venues: Record<string, Venue>;
}

export default function MatchGroup({ date, matches, venues }: MatchGroupProps) {
  // Use the first match's UTC time so the date header reflects the user's local date
  const firstMatchUtc = matches[0].startUtc;
  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
        <LocalDate utc={firstMatchUtc} />
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} venue={venues[match.venueId]} />
        ))}
      </div>
    </section>
  );
}

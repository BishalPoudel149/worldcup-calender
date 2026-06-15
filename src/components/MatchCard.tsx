import type { Match } from '@/lib/types';
import type { Venue } from '@/lib/types';
import { formatGroupStageLabel } from '@/lib/match-utils';
import { TEAMS } from '@/data/teams';
import LocalTime from './LocalTime';

interface MatchCardProps {
  match: Match;
  venue: Venue;
}

const STAGE_COLORS: Record<string, string> = {
  group: 'bg-emerald-900/50 text-emerald-300 border-emerald-800',
  'round-of-32': 'bg-sky-900/50 text-sky-300 border-sky-800',
  'round-of-16': 'bg-sky-900/50 text-sky-300 border-sky-800',
  'quarter-final': 'bg-violet-900/50 text-violet-300 border-violet-800',
  'semi-final': 'bg-orange-900/50 text-orange-300 border-orange-800',
  'third-place': 'bg-stone-700/50 text-stone-300 border-stone-600',
  final: 'bg-yellow-900/50 text-yellow-300 border-yellow-700',
};

const COUNTRY_FLAGS: Record<string, string> = {
  USA: '🇺🇸',
  Canada: '🇨🇦',
  Mexico: '🇲🇽',
};

export default function MatchCard({ match, venue }: MatchCardProps) {
  const homeTeam = match.homeTeam ? TEAMS[match.homeTeam] : null;
  const awayTeam = match.awayTeam ? TEAMS[match.awayTeam] : null;
  const stageClass = STAGE_COLORS[match.stage] ?? 'bg-gray-700 text-gray-300 border-gray-600';
  const isTbd = !match.homeTeam || !match.awayTeam;

  return (
    <div className="rounded-xl border border-gray-700 bg-gray-800/60 p-4 hover:border-gray-500 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${stageClass}`}>
          {formatGroupStageLabel(match)}
        </span>
        <span className="text-sm text-gray-400 tabular-nums"><LocalTime utc={match.startUtc} /></span>
      </div>

      <div className="flex items-center gap-3">
        {/* Home team */}
        <div className={`flex flex-1 flex-col items-center gap-1 ${isTbd ? 'opacity-60' : ''}`}>
          <span className="text-3xl leading-none">
            {homeTeam?.flagEmoji ?? '🏳️'}
          </span>
          <span className={`text-center text-sm font-semibold text-white ${isTbd ? 'italic text-gray-400' : ''}`}>
            {match.homeLabel}
          </span>
        </div>

        {/* VS */}
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-gray-500">vs</span>
        </div>

        {/* Away team */}
        <div className={`flex flex-1 flex-col items-center gap-1 ${isTbd ? 'opacity-60' : ''}`}>
          <span className="text-3xl leading-none">
            {awayTeam?.flagEmoji ?? '🏳️'}
          </span>
          <span className={`text-center text-sm font-semibold text-white ${isTbd ? 'italic text-gray-400' : ''}`}>
            {match.awayLabel}
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-500">
        <span>{COUNTRY_FLAGS[venue.country]}</span>
        <span>{venue.name}</span>
        <span>·</span>
        <span>{venue.city}</span>
      </div>
    </div>
  );
}

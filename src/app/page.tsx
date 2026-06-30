import { Suspense } from 'react';
import { headers } from 'next/headers';
import { MATCHES } from '@/data/matches';
import { VENUES } from '@/data/venues';
import type { Stage } from '@/lib/types';
import CalendarButton from '@/components/CalendarButton';
import MatchList from '@/components/MatchList';
import StageFilter from '@/components/StageFilter';

interface PageProps {
  searchParams: Promise<{ stage?: string; group?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const stageFilter = params.stage as Stage | undefined;
  const groupFilter = params.group?.toUpperCase();

  let matches = MATCHES;
  if (stageFilter) matches = matches.filter((m) => m.stage === stageFilter);
  if (groupFilter) matches = matches.filter((m) => m.group === groupFilter);

  const headersList = await headers();
  const host = headersList.get('host') ?? 'localhost:3000';

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-700 bg-gray-900/95 sticky top-0 z-10 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚽</span>
              <div>
                <h1 className="text-lg font-bold text-white leading-tight">FIFA World Cup 2026</h1>
                <p className="text-xs text-gray-400">Match Calendar · USA · Canada · Mexico</p>
              </div>
            </div>
            <Suspense fallback={null}>
              <CalendarButton host={host} />
            </Suspense>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        {/* Filter bar */}
        <div className="mb-6">
          <Suspense fallback={null}>
            <StageFilter />
          </Suspense>
        </div>

        {/* Match count */}
        <p className="mb-6 text-sm text-gray-500">
          Showing <span className="text-gray-300 font-medium">{matches.length}</span> matches
          {stageFilter && <span> · filtered by stage</span>}
          {groupFilter && <span> · Group {groupFilter}</span>}
          <span className="ml-2 text-gray-600">— All times in your local timezone</span>
        </p>

        {/* Match list */}
        <MatchList matches={matches} venues={VENUES} />
      </main>

      <footer className="mt-12 border-t border-gray-800 py-6 text-center text-xs text-gray-600">
        <p>FIFA World Cup 2026 · June 11 – July 19, 2026</p>
        <p className="mt-1">
          Subscribe via{' '}
          <code className="rounded bg-gray-800 px-1 py-0.5 text-gray-400">
            {`https://${host}/api/calendar.ics`}
          </code>
        </p>
      </footer>
    </div>
  );
}

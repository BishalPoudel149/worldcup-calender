import { type NextRequest } from 'next/server';
import { MATCHES } from '@/data/matches';
import { generateICS } from '@/lib/ics';
import type { Stage } from '@/lib/types';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const stageFilter = searchParams.get('stage') as Stage | null;
  const groupFilter = searchParams.get('group');

  let matches = MATCHES;
  if (stageFilter) matches = matches.filter((m) => m.stage === stageFilter);
  if (groupFilter) matches = matches.filter((m) => m.group === groupFilter.toUpperCase());

  const icsContent = generateICS(matches);

  return new Response(icsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'inline; filename="worldcup2026.ics"',
      'Cache-Control': 'public, max-age=43200',
    },
  });
}

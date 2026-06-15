'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { STAGE_LABELS } from '@/lib/match-utils';
import type { Stage } from '@/lib/types';

const STAGES: Array<{ value: Stage | 'all'; label: string }> = [
  { value: 'all', label: 'All Matches' },
  { value: 'group', label: 'Group Stage' },
  { value: 'round-of-32', label: 'Round of 32' },
  { value: 'round-of-16', label: 'Round of 16' },
  { value: 'quarter-final', label: STAGE_LABELS['quarter-final'] },
  { value: 'semi-final', label: STAGE_LABELS['semi-final'] },
  { value: 'final', label: 'Final' },
];

export default function StageFilter() {
  const searchParams = useSearchParams();
  const active = searchParams.get('stage') ?? 'all';

  return (
    <div className="flex flex-wrap gap-2">
      {STAGES.map(({ value, label }) => {
        const href = value === 'all' ? '/' : `/?stage=${value}`;
        const isActive = active === value;
        return (
          <Link
            key={value}
            href={href}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}

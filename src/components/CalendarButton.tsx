'use client';

import { useState } from 'react';

interface CalendarButtonProps {
  host: string;
}

export default function CalendarButton({ host }: CalendarButtonProps) {
  const [copied, setCopied] = useState(false);

  // Strip port for production URLs (Vercel), keep for localhost dev
  const cleanHost = host.replace(/:443$/, '');
  const icsUrl = `https://${cleanHost}/api/calendar.ics`;
  const webcalUrl = `webcal://${cleanHost}/api/calendar.ics`;
  // Google Calendar requires the URL passed as-is (not double-encoded)
  const googleUrl = `https://calendar.google.com/calendar/r?cid=${icsUrl}`;

  async function copyLink() {
    await navigator.clipboard.writeText(icsUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 1.97a4.8 4.8 0 0 0-6.8 6.8l-1.97 1.97A7.2 7.2 0 0 1 12 4.8c1.99 0 3.787.805 5.094 2.106L17.562 8.248zM12 19.2a7.2 7.2 0 0 1-5.094-2.106l1.97-1.97a4.8 4.8 0 0 0 6.8-6.8l1.97-1.97A7.2 7.2 0 0 1 12 19.2z" />
        </svg>
        Google Calendar
      </a>
      <a
        href={webcalUrl}
        className="flex items-center gap-1.5 rounded-lg bg-gray-700 px-3 py-2 text-sm font-medium text-white hover:bg-gray-600 transition-colors"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13z" />
        </svg>
        Apple / Outlook
      </a>
      <a
        href="/api/calendar.ics"
        download="worldcup2026.ics"
        className="flex items-center gap-1.5 rounded-lg bg-green-700 px-3 py-2 text-sm font-medium text-white hover:bg-green-600 transition-colors"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 8h14v2H5z" />
        </svg>
        Download .ics
      </a>
      <button
        onClick={copyLink}
        className="flex items-center gap-1.5 rounded-lg border border-gray-600 px-3 py-2 text-sm font-medium text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
        </svg>
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
    </div>
  );
}

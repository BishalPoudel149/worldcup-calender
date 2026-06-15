'use client';

import { useState } from 'react';

interface CalendarButtonProps {
  host: string;
}

export default function CalendarButton({ host }: CalendarButtonProps) {
  const [copied, setCopied] = useState(false);

  const cleanHost = host.replace(/:443$/, '');
  const webcalUrl = `webcal://${cleanHost}/api/calendar.ics`;
  const icsUrl = `https://${cleanHost}/api/calendar.ics`;

  async function copyLink() {
    await navigator.clipboard.writeText(icsUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {/* Apple Calendar — webcal:// triggers iOS subscription dialog */}
      <a
        href={webcalUrl}
        className="flex items-center gap-1.5 rounded-lg bg-gray-700 px-3 py-2 text-sm font-medium text-white hover:bg-gray-600 transition-colors"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13z" />
        </svg>
        Apple Calendar
      </a>

      {/* Google Calendar — download .ics, Android opens with Google Calendar */}
      <a
        href="/api/calendar.ics"
        download="worldcup2026.ics"
        className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13zM7 10h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 3h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
        </svg>
        Google Calendar
      </a>

      {/* Copy link */}
      <button
        onClick={copyLink}
        className="flex items-center gap-1.5 rounded-lg border border-gray-600 px-3 py-2 text-sm font-medium text-gray-300 hover:border-gray-400 hover:text-white transition-colors"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
        </svg>
        {copied ? '✓ Copied!' : 'Copy Link'}
      </button>
    </div>
  );
}

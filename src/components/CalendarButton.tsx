'use client';

import { useState } from 'react';

interface CalendarButtonProps {
  host: string;
}

export default function CalendarButton({ host }: CalendarButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showAndroidHelp, setShowAndroidHelp] = useState(false);

  const cleanHost = host.replace(/:443$/, '');
  const icsUrl = `https://${cleanHost}/api/calendar.ics`;
  const webcalUrl = `webcal://${cleanHost}/api/calendar.ics`;

  async function copyLink() {
    await navigator.clipboard.writeText(icsUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {/* Apple Calendar */}
        <a
          href={webcalUrl}
          className="flex items-center gap-1.5 rounded-lg bg-gray-700 px-3 py-2 text-sm font-medium text-white hover:bg-gray-600 transition-colors"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V8h14v13z" />
          </svg>
          Apple Calendar
        </a>

        {/* Android / Google Calendar */}
        <button
          onClick={() => setShowAndroidHelp((v) => !v)}
          className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-500 transition-colors"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 8H13V3.5zM8 13h8v1.5H8V13zm0 3h5v1.5H8V16zm0-6h8v1.5H8V7z" />
          </svg>
          Android / Google Calendar
          <svg className={`h-3 w-3 transition-transform ${showAndroidHelp ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>

        {/* Download */}
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

      {/* Android step-by-step instructions */}
      {showAndroidHelp && (
        <div className="rounded-xl border border-blue-800 bg-blue-950/50 p-4 text-sm text-blue-100 space-y-3">
          <p className="font-semibold text-blue-300">Add to Google Calendar on Android:</p>
          <ol className="space-y-2 list-none">
            <li className="flex gap-2"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-700 text-xs flex items-center justify-center font-bold">1</span><span>Copy the calendar link below</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-700 text-xs flex items-center justify-center font-bold">2</span><span>Open <strong>Google Calendar</strong> app → tap the <strong>≡ menu</strong> (top-left)</span></li>
            <li className="flex gap-2"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-700 text-xs flex items-center justify-center font-bold">3</span><span>Scroll down → tap <strong>"Other calendars"</strong> → tap <strong>"+"</strong></span></li>
            <li className="flex gap-2"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-700 text-xs flex items-center justify-center font-bold">4</span><span>Tap <strong>"From URL"</strong> → paste the link → tap <strong>"Add calendar"</strong></span></li>
            <li className="flex gap-2"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-700 text-xs flex items-center justify-center font-bold">5</span><span>If you already added it and can&apos;t see events: go back to <strong>≡ menu → Other calendars</strong> → make sure <strong>World Cup</strong> is checked ✓</span></li>
          </ol>
          <div className="flex items-center gap-2 rounded-lg bg-blue-900/50 border border-blue-700 px-3 py-2">
            <code className="flex-1 text-xs text-blue-200 break-all">{icsUrl}</code>
            <button
              onClick={copyLink}
              className="flex-shrink-0 rounded bg-blue-700 px-2 py-1 text-xs font-medium text-white hover:bg-blue-600 transition-colors"
            >
              {copied ? '✓' : 'Copy'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

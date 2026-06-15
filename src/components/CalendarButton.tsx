'use client';

import { useState } from 'react';

interface CalendarButtonProps {
  host: string;
}

export default function CalendarButton({ host }: CalendarButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showAndroid, setShowAndroid] = useState(false);

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

        {/* Android */}
        <button
          onClick={() => setShowAndroid((v) => !v)}
          className="flex items-center gap-1.5 rounded-lg bg-green-700 px-3 py-2 text-sm font-medium text-white hover:bg-green-600 transition-colors"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24A10.45 10.45 0 0 0 12 8c-1.63 0-3.16.38-4.48 1.01L5.64 5.77c-.19-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85L6.4 9.48C4.31 10.73 2.9 12.91 2.9 15.4c0 .06 0 .12.01.18H21.1c0-.06.01-.12.01-.18 0-2.49-1.41-4.67-3.51-5.92zM9 13.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </svg>
          Android (Google Calendar)
          <svg className={`h-3 w-3 transition-transform ${showAndroid ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>

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

      {/* Android instructions */}
      {showAndroid && (
        <div className="rounded-xl border border-green-800 bg-green-950/40 p-4 text-sm text-green-100 space-y-3">
          <p className="font-semibold text-green-300">Add to Google Calendar on Android:</p>

          {/* Method 1 - Download */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-green-400">Method 1 — Download file (easiest)</p>
            <ol className="space-y-1.5 list-none">
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-700 text-xs flex items-center justify-center font-bold mt-0.5">1</span>
                <span>Tap the button below to download the <strong>.ics file</strong></span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-700 text-xs flex items-center justify-center font-bold mt-0.5">2</span>
                <span>Open your <strong>Files / Downloads</strong> app → tap <strong>worldcup2026.ics</strong></span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-700 text-xs flex items-center justify-center font-bold mt-0.5">3</span>
                <span>Android will ask which app to open it with → choose <strong>Google Calendar</strong> → tap <strong>Import</strong></span>
              </li>
            </ol>
            <a
              href="/api/calendar.ics"
              download="worldcup2026.ics"
              className="inline-flex items-center gap-2 mt-1 rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600 transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 8h14v2H5z" />
              </svg>
              Download worldcup2026.ics
            </a>
          </div>

          <div className="border-t border-green-800/50 pt-3 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-green-400">Method 2 — Via desktop browser</p>
            <ol className="space-y-1.5 list-none">
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-800 text-xs flex items-center justify-center font-bold mt-0.5">1</span>
                <span>On a <strong>computer</strong>, open <strong>calendar.google.com</strong></span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-800 text-xs flex items-center justify-center font-bold mt-0.5">2</span>
                <span>Click <strong>+ Other calendars → From URL</strong></span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-800 text-xs flex items-center justify-center font-bold mt-0.5">3</span>
                <span>Paste the link below → click <strong>Add calendar</strong> — syncs to your phone automatically</span>
              </li>
            </ol>
            <div className="flex items-center gap-2 rounded-lg bg-green-900/50 border border-green-700 px-3 py-2 mt-1">
              <code className="flex-1 text-xs text-green-200 break-all">{icsUrl}</code>
              <button
                onClick={copyLink}
                className="flex-shrink-0 rounded bg-green-700 px-2 py-1 text-xs font-medium text-white hover:bg-green-600 transition-colors"
              >
                {copied ? '✓' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

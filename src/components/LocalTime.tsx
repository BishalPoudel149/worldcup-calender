'use client';

export default function LocalTime({ utc }: { utc: string }) {
  const d = new Date(utc);
  const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone.replace(/_/g, ' ');
  return <span>{time} <span className="text-xs text-gray-500">{tz}</span></span>;
}

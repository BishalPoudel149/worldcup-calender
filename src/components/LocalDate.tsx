'use client';

export default function LocalDate({ utc }: { utc: string }) {
  const d = new Date(utc);
  return (
    <>{d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</>
  );
}

'use client';

export default function LocalDate({ utc }: { utc: string }) {
  const d = new Date(utc);
  return (
    <>{d.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</>
  );
}

import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'FIFA World Cup 2026 Match Calendar';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #111827 0%, #1a2744 50%, #111827 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Trophy + ball */}
        <div style={{ fontSize: 80, marginBottom: 24, display: 'flex', gap: 16 }}>
          🏆⚽
        </div>

        {/* Title */}
        <div style={{ fontSize: 56, fontWeight: 800, color: 'white', textAlign: 'center', lineHeight: 1.1, marginBottom: 16 }}>
          FIFA World Cup 2026
        </div>
        <div style={{ fontSize: 32, fontWeight: 600, color: '#34d399', marginBottom: 32 }}>
          Match Calendar
        </div>

        {/* Feature pills */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 40 }}>
          {['104 Matches', 'Apple Calendar', 'Google Calendar', 'Local Times'].map((f) => (
            <div key={f} style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 999,
              padding: '8px 20px',
              color: 'white',
              fontSize: 18,
            }}>
              {f}
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{ fontSize: 22, color: '#9ca3af' }}>
          worldcup-calender.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}

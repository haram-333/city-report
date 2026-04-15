import React from 'react';
import { Box } from '@mui/material';

export default function AnimatedBackground() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: '#080c14',
      }}
    >
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(40px, -80px); }
          50% { transform: translate(-60px, -100px); }
          75% { transform: translate(80px, -40px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-80px, 60px); }
          50% { transform: translate(-100px, -40px); }
          75% { transform: translate(-40px, 80px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(100px, -60px); }
          50% { transform: translate(60px, 100px); }
          75% { transform: translate(-80px, 40px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.95; }
        }

        .float-anim-1 {
          animation: float1 12s ease-in-out infinite;
        }
        .float-anim-2 {
          animation: float2 14s ease-in-out infinite;
        }
        .float-anim-3 {
          animation: float3 16s ease-in-out infinite;
        }
        .pulse-anim {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>

      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.48 }} />
            <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 0.19 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0 }} />
          </radialGradient>

          <radialGradient id="grad2" cx="50%" cy="50%">
            <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.43 }} />
            <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.18 }} />
            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0 }} />
          </radialGradient>

          <radialGradient id="grad3" cx="50%" cy="50%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 0.38 }} />
            <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 0.15 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 0 }} />
          </radialGradient>

          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
          </filter>
        </defs>

        {/* Large animated glowing circles */}
        <g className="float-anim-1">
          <circle cx="20%" cy="15%" r="300" fill="url(#grad1)" filter="url(#blur)" className="pulse-anim" />
        </g>

        <g className="float-anim-2">
          <circle cx="80%" cy="50%" r="350" fill="url(#grad2)" filter="url(#blur)" className="pulse-anim" />
        </g>

        <g className="float-anim-3">
          <circle cx="50%" cy="85%" r="400" fill="url(#grad3)" filter="url(#blur)" className="pulse-anim" />
        </g>

        {/* Extra bright accent orbs */}
        <g className="float-anim-1" style={{ animationDelay: '2s' }}>
          <circle cx="25%" cy="60%" r="200" fill="url(#grad1)" filter="url(#blur)" className="pulse-anim" />
        </g>

        <g className="float-anim-2" style={{ animationDelay: '1s' }}>
          <circle cx="75%" cy="25%" r="250" fill="url(#grad2)" filter="url(#blur)" className="pulse-anim" />
        </g>

        {/* Corner accent circles */}
        <g className="float-anim-3" style={{ animationDelay: '3s' }}>
          <circle cx="10%" cy="80%" r="180" fill="url(#grad3)" filter="url(#blur)" className="pulse-anim" />
        </g>
      </svg>

      {/* Overlay to dim background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(8, 12, 20, 0.05)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
}

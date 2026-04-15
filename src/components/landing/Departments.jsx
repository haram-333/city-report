import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import ScrollReveal from './ScrollReveal';

const departments = [
  {
    topBarColor: '#3b82f6',
    label: 'Department 01',
    title: 'Infrastructure',
    desc: 'Handles structural integrity of roads, bridges, and public pathways.',
    tags: ['Potholes', 'Road Cracks', 'Damaged Sidewalks'],
  },
  {
    topBarColor: '#f59e0b',
    label: 'Department 02',
    title: 'Traffic & Signals',
    desc: 'Maintains traffic flow control systems and road safety signage.',
    tags: ['Broken Signals', 'Missing Signs', 'Faded Crosswalks'],
  },
  {
    topBarColor: '#22c55e',
    label: 'Department 03',
    title: 'Municipal & Waste',
    desc: 'Manages sanitation, public hazards, and city cleanliness.',
    tags: ['Open Manholes', 'Garbage Dumps', 'Water Logging'],
  },
];

export default function Departments() {
  return (
    <Box id="departments" sx={{ width: '100%', overflow: 'hidden', padding: { xs: '60px 0', md: '100px 0' }, px: { xs: 2, md: 6 }, position: 'relative', zIndex: 1 }}>
      <Box>
        <ScrollReveal sx={{ marginBottom: { xs: '40px', md: '64px' } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '28px', md: '36px' },
              fontWeight: 800,
              textAlign: 'center',
              color: '#f1f5f9',
              letterSpacing: '-0.01em',
            }}
          >
            Integrated Departments
          </Typography>
        </ScrollReveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '20px', md: '24px' },
          }}
        >
          {departments.map((dept, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <Card
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  padding: { xs: '24px', md: '32px' },
                  backgroundColor: '#0f172a',
                  border: '1px solid rgba(99, 179, 237, 0.12)',
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: 'rgba(96, 165, 250, 0.24)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    backgroundColor: dept.topBarColor,
                  }}
                />

                <Box
                  sx={{
                    display: 'inline-flex',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: { xs: '4px 10px', md: '6px 12px' },
                    borderRadius: '6px',
                    fontSize: { xs: '10px', md: '12px' },
                    fontWeight: 600,
                    color: '#94a3b8',
                    marginBottom: { xs: '12px', md: '20px' },
                  }}
                >
                  {dept.label}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '18px', md: '20px' },
                    fontWeight: 700,
                    marginBottom: { xs: '12px', md: '16px' },
                    color: '#f1f5f9',
                  }}
                >
                  {dept.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '13px', md: '14px' },
                    color: '#94a3b8',
                    marginBottom: { xs: '16px', md: '24px' },
                    lineHeight: 1.5,
                  }}
                >
                  {dept.desc}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: '6px', md: '8px' } }}>
                  {dept.tags.map((tag, tagIdx) => (
                    <Box
                      key={tagIdx}
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: { xs: '3px 10px', md: '4px 12px' },
                        borderRadius: '9999px',
                        fontSize: { xs: '11px', md: '12px' },
                        color: '#64748b',
                      }}
                    >
                      {tag}
                    </Box>
                  ))}
                </Box>
              </Card>
            </ScrollReveal>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

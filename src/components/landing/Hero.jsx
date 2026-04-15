import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        paddingTop: '100px',
        paddingBottom: { xs: '50px', md: '80px' },
        textAlign: 'center',
        marginTop: '72px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <ScrollReveal delay={0.05}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              color: '#22c55e',
              fontSize: { xs: '11px', md: '13px' },
              fontWeight: 600,
              marginBottom: { xs: '20px', md: '32px' },
            }}
          >
            <Box
              sx={{
                width: '8px',
                height: '8px',
                backgroundColor: '#22c55e',
                borderRadius: '50%',
                boxShadow: '0 0 12px #22c55e',
              }}
            />
            FYP Project· AI-Powered Urban Management
          </Box>
        </ScrollReveal>

        <ScrollReveal delay={0.14} distance={34}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '36px', sm: '48px', md: '72px' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              maxWidth: '1000px',
              margin: '0 auto 32px',
              color: '#f1f5f9',
            }}
          >
            Smart City Issue Reporting with{' '}
            <Box
              component="span"
              sx={{
                color: '#60a5fa',
                background: 'rgba(59, 130, 246, 0.12)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                padding: '0 20px',
                borderRadius: '16px',
                display: 'inline-block',
                marginLeft: '8px',
                boxShadow: '0 0 40px rgba(59, 130, 246, 0.15)',
              }}
            >
              AI Detection
            </Box>
          </Typography>
        </ScrollReveal>

        <ScrollReveal delay={0.24}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '13px', md: '18px' },
              color: '#94a3b8',
              maxWidth: '640px',
              margin: { xs: '0 auto 32px', md: '0 auto 48px' },
              fontWeight: 400,
            }}
          >
            A comprehensive system utilizing computer vision to automatically detect, categorize,
            and route urban infrastructure problems to the appropriate municipal departments.
          </Typography>
        </ScrollReveal>

        <ScrollReveal delay={0.32}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: '12px', md: '16px' },
              width: '100%',
              maxWidth: { xs: '100%', sm: 'auto' },
              px: { xs: 2, sm: 0 },
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                padding: { xs: '12px 20px', md: '14px 28px' },
                fontSize: { xs: '14px', md: '15px' },
                fontWeight: 600,
                borderRadius: '8px',
                textTransform: 'none',
                width: { xs: '100%', sm: 'auto' },
                transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  backgroundColor: '#60a5fa',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 14px 28px rgba(59, 130, 246, 0.22)',
                },
              }}
            >
              See How It Works
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: 'transparent',
                color: '#f1f5f9',
                padding: { xs: '12px 20px', md: '14px 28px' },
                fontSize: { xs: '14px', md: '15px' },
                fontWeight: 600,
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                textTransform: 'none',
                width: { xs: '100%', sm: 'auto' },
                transition: 'transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  transform: 'translateY(-2px)',
                  borderColor: 'rgba(255, 255, 255, 0.26)',
                },
              }}
            >
              View Departments
            </Button>
          </Box>
        </ScrollReveal>
      </Box>
    </Box>
  );
}

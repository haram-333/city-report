import React from 'react';
import { Box, Typography, Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

export default function CTA() {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', padding: { xs: '60px 0', md: '100px 0' }, px: { xs: 2, md: 6 }, position: 'relative', zIndex: 1 }}>
      <Box>
        <ScrollReveal>
          <Card
            sx={{
              background: 'linear-gradient(145deg, #0f172a 0%, #162032 100%)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              textAlign: 'center',
              padding: { xs: '40px 20px', md: '64px 32px' },
              maxWidth: '800px',
              margin: '0 auto',
              borderRadius: '12px',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: '24px', md: '32px' },
                fontWeight: 800,
                marginBottom: '16px',
                color: '#f1f5f9',
              }}
            >
              Ready to explore the dashboard?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '14px', md: '16px' },
                color: '#94a3b8',
                marginBottom: '32px',
              }}
            >
              Access the unified portal to view the active reporting interfaces designed for
              Citizens, Officers, and Admins.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'stretch', sm: 'center' }, justifyContent: 'center', gap: { xs: '12px', md: '16px' }, width: { xs: '100%', sm: 'auto' } }}>
              <Button
                variant="contained"
                onClick={() => navigate('/auth')}
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
                Enter Demo Portal
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
                Read Documentation
              </Button>
            </Box>
          </Card>
        </ScrollReveal>
      </Box>
    </Box>
  );
}

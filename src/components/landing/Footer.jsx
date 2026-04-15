import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
  return (
    <ScrollReveal>
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          padding: { xs: '32px 0', md: '48px 0' },
          marginTop: '48px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: { xs: '24px', md: '0' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 800,
                color: '#f1f5f9',
                textDecoration: 'none',
              }}
            >
              <DashboardIcon sx={{ fontSize: { xs: '18px', md: '20px' }, color: '#3b82f6' }} />
              CityReport AI
            </Box>

            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '12px', md: '14px' },
                color: '#64748b',
                order: { xs: 3, md: 'unset' },
                width: { xs: '100%', md: 'auto' },
              }}
            >
              Final Year Project· Automated Urban Maintenance System
            </Typography>

            <Box sx={{ display: 'flex', gap: { xs: '16px', md: '24px' }, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
              <MuiLink
                href="#"
                sx={{
                  color: '#94a3b8',
                  fontSize: { xs: '12px', md: '14px' },
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&:hover': { color: '#f1f5f9' },
                }}
              >
                GitHub Repo
              </MuiLink>
              <MuiLink
                href="#"
                sx={{
                  color: '#94a3b8',
                  fontSize: { xs: '12px', md: '14px' },
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&:hover': { color: '#f1f5f9' },
                }}
              >
                Tech Stack
              </MuiLink>
              <MuiLink
                href="#"
                sx={{
                  color: '#94a3b8',
                  fontSize: { xs: '12px', md: '14px' },
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&:hover': { color: '#f1f5f9' },
                }}
              >
                Login
              </MuiLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </ScrollReveal>
  );
}

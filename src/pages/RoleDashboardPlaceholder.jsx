import React from 'react';
import { Box, Button, ThemeProvider, Typography, createTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const placeholderTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#080c14',
      paper: '#0f172a',
    },
    primary: {
      main: '#3b82f6',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
});

export default function RoleDashboardPlaceholder({ role }) {
  return (
    <ThemeProvider theme={placeholderTheme}>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#080c14',
          color: '#f1f5f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 3,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 640,
            p: { xs: 3, md: 5 },
            borderRadius: '14px',
            backgroundColor: '#0f172a',
            border: '1px solid rgba(99, 179, 237, 0.12)',
            textAlign: 'center',
          }}
        >
          <Typography sx={{ fontSize: { xs: '28px', md: '36px' }, fontWeight: 800, mb: 1 }}>
            {role} Dashboard
          </Typography>
          <Typography sx={{ fontSize: '15px', color: '#94a3b8', mb: 4 }}>
            Demo route is connected. The full {role.toLowerCase()} dashboard UI can be added next.
          </Typography>
          <Button
            component={RouterLink}
            to="/auth"
            variant="contained"
            sx={{
              textTransform: 'none',
              borderRadius: '8px',
              px: 3,
              py: 1.4,
              fontWeight: 600,
              backgroundColor: '#3b82f6',
            }}
          >
            Back to Auth
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

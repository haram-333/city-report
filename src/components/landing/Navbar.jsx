import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  Button,
  Link as MuiLink,
  IconButton,
  Drawer,
  Stack,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Departments', href: '#departments' },
    { label: 'Roles', href: '#roles' },
  ];

  const handleMobileToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavigate = (href) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    window.location.hash = href;
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(8, 12, 20, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          height: '72px',
          zIndex: 1000,
          boxShadow: 'none',
        }}
      >
        <Container maxWidth={false} disableGutters>
          <Toolbar
            sx={{
              minHeight: '72px',
              display: 'flex',
              justifyContent: 'space-between',
              padding: { xs: '0 12px', sm: '0 16px', md: '0 24px' },
              gap: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 1, md: 1.5 },
                cursor: 'pointer',
                textDecoration: 'none',
                minWidth: 0,
                flexShrink: 1,
              }}
              onClick={() => navigate('/')}
            >
              <Box
                sx={{
                  width: { xs: 34, md: 40 },
                  height: { xs: 34, md: 40 },
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(59, 130, 246, 0.12)',
                  flexShrink: 0,
                }}
              >
                <DashboardIcon sx={{ fontSize: { xs: '20px', md: '24px' }, color: '#3b82f6' }} />
              </Box>
              <Box
                sx={{
                  fontSize: { xs: '15px', sm: '16px', md: '20px' },
                  fontWeight: 800,
                  color: '#f1f5f9',
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: { xs: '150px', sm: '220px', md: 'none' },
                }}
              >
                CityReport AI
              </Box>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '32px' }}>
              {navLinks.map((link) => (
                <MuiLink
                  key={link.label}
                  href={link.href}
                  sx={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    '&:hover': { color: '#f1f5f9' },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, flexShrink: 0 }}>
              <Button
                variant="contained"
                onClick={() => navigate('/auth')}
                sx={{
                  display: { xs: 'none', sm: 'inline-flex', md: 'inline-flex' },
                  backgroundColor: '#3b82f6',
                  color: '#ffffff',
                  padding: { sm: '10px 16px', md: '14px 28px' },
                  fontSize: { sm: '13px', md: '15px' },
                  fontWeight: 600,
                  borderRadius: '10px',
                  textTransform: 'none',
                  boxShadow: 'none',
                  '&:hover': { backgroundColor: '#60a5fa', boxShadow: 'none' },
                }}
              >
                Get Started
              </Button>

              <IconButton
                onClick={handleMobileToggle}
                sx={{
                  display: { xs: 'inline-flex', md: 'none' },
                  width: 42,
                  height: 42,
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#f1f5f9',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                }}
              >
                <MenuRoundedIcon sx={{ fontSize: 22 }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleMobileToggle}
        PaperProps={{
          sx: {
            display: { md: 'none' },
            backgroundColor: 'rgba(8, 12, 20, 0.98)',
            backdropFilter: 'blur(18px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#f1f5f9',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
          },
        }}
      >
        <Box sx={{ px: 2, pt: 2, pb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(59, 130, 246, 0.12)',
                }}
              >
                <DashboardIcon sx={{ fontSize: 20, color: '#3b82f6' }} />
              </Box>
              <Typography sx={{ fontSize: '16px', fontWeight: 800 }}>CityReport AI</Typography>
            </Box>
            <IconButton
              onClick={handleMobileToggle}
              sx={{
                width: 40,
                height: 40,
                borderRadius: '10px',
                color: '#f1f5f9',
              }}
            >
              <CloseRoundedIcon sx={{ fontSize: 22 }} />
            </IconButton>
          </Box>

          <Stack spacing={1}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                onClick={() => handleNavigate(link.href)}
                sx={{
                  justifyContent: 'flex-start',
                  px: 1.5,
                  py: 1.35,
                  borderRadius: '12px',
                  color: '#f1f5f9',
                  textTransform: 'none',
                  fontSize: '15px',
                  fontWeight: 600,
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                }}
              >
                {link.label}
              </Button>
            ))}

            <Button
              variant="contained"
              onClick={() => {
                setMobileOpen(false);
                navigate('/auth');
              }}
              sx={{
                mt: 1,
                py: 1.4,
                borderRadius: '12px',
                textTransform: 'none',
                fontSize: '15px',
                fontWeight: 700,
                backgroundColor: '#3b82f6',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#60a5fa',
                  boxShadow: 'none',
                },
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}

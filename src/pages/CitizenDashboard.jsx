import React from 'react';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const dashboardTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#080c14',
      paper: '#0f172a',
    },
    primary: {
      main: '#3b82f6',
      light: '#60a5fa',
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

const navItems = [
  { label: 'Dashboard', icon: DashboardOutlinedIcon, active: true, to: '/citizen/dashboard' },
  { label: 'Submit Complaint', icon: AddCircleOutlineOutlinedIcon, to: '/citizen/submit-complaint' },
  { label: 'My Complaints', icon: DescriptionOutlinedIcon, to: '/citizen/my-complaints' },
  { label: 'Profile', icon: PersonOutlineOutlinedIcon, to: '#' },
];

const stats = [
  {
    value: '—',
    label: 'Demo Total',
    icon: InsertDriveFileOutlinedIcon,
    bg: 'rgba(59, 130, 246, 0.1)',
    color: '#3b82f6',
  },
  {
    value: '—',
    label: 'Demo Pending',
    icon: AccessTimeOutlinedIcon,
    bg: 'rgba(245, 158, 11, 0.1)',
    color: '#f59e0b',
  },
  {
    value: '—',
    label: 'Demo Resolved',
    icon: CheckCircleOutlineOutlinedIcon,
    bg: 'rgba(34, 197, 94, 0.1)',
    color: '#22c55e',
  },
];

const complaints = [
  {
    type: 'Infrastructure',
    title: 'Deep Pothole on Main St',
    location: '124 Main Street, Downtown',
    date: 'Oct 24, 2023',
    status: 'Pending',
    statusBg: 'rgba(245, 158, 11, 0.1)',
    statusColor: '#f59e0b',
    image:
      'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
  },
  {
    type: 'Sanitation',
    title: 'Overflowing Garbage Bins',
    location: 'Park Avenue, Block 4',
    date: 'Oct 21, 2023',
    status: 'In Progress',
    statusBg: 'rgba(59, 130, 246, 0.1)',
    statusColor: '#3b82f6',
    image:
      'https://images.unsplash.com/photo-1596701844975-f2638fbb2ecb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
  },
  {
    type: 'Electrical',
    title: 'Broken Streetlight',
    location: 'Westside Highway Exit',
    date: 'Oct 15, 2023',
    status: 'Resolved',
    statusBg: 'rgba(34, 197, 94, 0.1)',
    statusColor: '#22c55e',
    image:
      'https://images.unsplash.com/photo-1584883448378-b391515bb2b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
  },
];

function SidebarContent() {
  return (
    <>
      <Box sx={{ px: 3, py: 4 }}>
        <Box
          component="a"
          href="/"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1.5,
            fontSize: '18px',
            fontWeight: 700,
            color: '#f1f5f9',
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              width: 28,
              height: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '6px',
              color: '#3b82f6',
            }}
          >
            <ShieldOutlinedIcon sx={{ fontSize: 16 }} />
          </Box>
          CityReport AI
        </Box>
        <Box
          sx={{
            mt: 2,
            display: 'inline-flex',
            alignItems: 'center',
            px: 1.25,
            py: 0.5,
            borderRadius: '9999px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: '#60a5fa',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.18)',
          }}
        >
          Demo Mode
        </Box>
      </Box>

      <Box sx={{ flex: 1, pt: 2 }}>
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Box
              key={item.label}
              component={item.to === '#' ? 'div' : RouterLink}
              to={item.to === '#' ? undefined : item.to}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 3,
                py: 1.5,
                color: item.active ? '#f1f5f9' : '#94a3b8',
                textDecoration: 'none',
                borderLeft: '3px solid',
                borderLeftColor: item.active ? '#3b82f6' : 'transparent',
                backgroundColor: item.active ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
              }}
            >
              <Icon sx={{ fontSize: 18 }} />
              <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>{item.label}</Typography>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ p: 3, borderTop: '1px solid rgba(99, 179, 237, 0.12)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Avatar
            sx={{
              width: 36,
              height: 36,
              backgroundColor: 'rgba(99, 179, 237, 0.2)',
              color: '#3b82f6',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            JA
          </Avatar>
          <Box>
            <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#f1f5f9' }}>
              Demo Citizen
            </Typography>
            <Typography sx={{ fontSize: '11px', color: '#94a3b8' }}>Frontend Preview</Typography>
          </Box>
        </Box>

        <Link
          href="/auth"
          underline="none"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            fontSize: '13px',
            fontWeight: 500,
            color: '#64748b',
          }}
        >
          <LogoutOutlinedIcon sx={{ fontSize: 14 }} />
          Logout
        </Link>
      </Box>
    </>
  );
}

export default function CitizenDashboard() {
  return (
    <ThemeProvider theme={dashboardTheme}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          backgroundColor: '#080c14',
          color: '#f1f5f9',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage: `
              linear-gradient(to right, rgba(99, 179, 237, 0.02) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 179, 237, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            width: 240,
            minHeight: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            backgroundColor: '#0f172a',
            borderRight: '1px solid rgba(99, 179, 237, 0.12)',
            zIndex: 2,
          }}
        >
          <SidebarContent />
        </Box>

        <Box
          component="main"
          sx={{
            flex: 1,
            ml: { xs: 0, md: '240px' },
            px: { xs: 2, sm: 3, md: 6 },
            py: { xs: 3, md: 4 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              gap: 2,
              mb: 3,
              p: 2,
              backgroundColor: '#0f172a',
              border: '1px solid rgba(99, 179, 237, 0.12)',
              borderRadius: '14px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
              <Box
                component="a"
                href="/"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  textDecoration: 'none',
                  color: '#f1f5f9',
                  fontSize: '18px',
                  fontWeight: 700,
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderRadius: '6px',
                    color: '#3b82f6',
                  }}
                >
                  <ShieldOutlinedIcon sx={{ fontSize: 16 }} />
                </Box>
                CityReport AI
              </Box>
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  backgroundColor: 'rgba(99, 179, 237, 0.2)',
                  color: '#3b82f6',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                JA
              </Avatar>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.25 }}>
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Button
                    key={item.label}
                    component={item.to === '#' ? 'button' : RouterLink}
                    to={item.to === '#' ? undefined : item.to}
                    variant={item.active ? 'contained' : 'outlined'}
                    startIcon={<Icon sx={{ fontSize: 18 }} />}
                    sx={{
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      borderRadius: '10px',
                      py: 1.1,
                      px: 1.5,
                      fontSize: '13px',
                      fontWeight: 600,
                      color: item.active ? '#ffffff' : '#94a3b8',
                      borderColor: 'rgba(99, 179, 237, 0.12)',
                      backgroundColor: item.active ? '#3b82f6' : 'transparent',
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography sx={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Dashboard
            </Typography>
            <IconButton
              sx={{
                width: 40,
                height: 40,
                border: '1px solid rgba(99, 179, 237, 0.12)',
                backgroundColor: '#0f172a',
                color: '#94a3b8',
                borderRadius: '9999px',
                position: 'relative',
              }}
            >
              <NotificationsNoneOutlinedIcon sx={{ fontSize: 20 }} />
              <Box
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 10,
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#f59e0b',
                }}
              />
            </IconButton>
          </Box>

          <Box
            sx={{
              backgroundColor: '#0f172a',
              border: '1px solid rgba(99, 179, 237, 0.12)',
              borderRadius: '14px',
              p: { xs: 3, md: 5 },
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 3,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '60%',
                height: '100%',
                background: 'radial-gradient(circle at right center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography sx={{ fontSize: { xs: '24px', md: '28px' }, fontWeight: 700, mb: 1, letterSpacing: '-0.01em' }}>
                Citizen Dashboard Preview
              </Typography>
              <Typography sx={{ fontSize: '15px', color: '#94a3b8' }}>
                Demo data is shown here to preview the citizen workflow.
              </Typography>
            </Box>

            <Button
              component={RouterLink}
              to="/citizen/submit-complaint"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
              sx={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '8px',
                px: 3,
                py: 1.5,
                textTransform: 'none',
                fontSize: '14px',
                fontWeight: 600,
                backgroundColor: '#3b82f6',
                '&:hover': {
                  backgroundColor: '#2563eb',
                },
              }}
            >
              Report a New Issue
            </Button>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
              mt: 3,
            }}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <Box
                  key={stat.label}
                  sx={{
                    backgroundColor: '#0f172a',
                    border: '1px solid rgba(99, 179, 237, 0.12)',
                    borderRadius: '14px',
                    p: 3,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: stat.bg,
                      color: stat.color,
                    }}
                  >
                    <Icon sx={{ fontSize: 24 }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.2 }}>
                      {stat.value}
                    </Typography>
                    <Typography sx={{ fontSize: '14px', color: '#94a3b8', mt: 0.5 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box sx={{ mt: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', md: 'center' },
                gap: 2,
                mb: 3,
              }}
            >
              <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>Recent Activity</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                <Button
                  variant="outlined"
                  component={RouterLink}
                  to="/citizen/my-complaints"
                  sx={{
                    borderRadius: '8px',
                    px: 3,
                    py: 1.25,
                    textTransform: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#f1f5f9',
                    borderColor: 'rgba(99, 179, 237, 0.2)',
                  }}
                >
                  View All Complaints
                </Button>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/citizen/submit-complaint"
                  sx={{
                    borderRadius: '8px',
                    px: 3,
                    py: 1.25,
                    textTransform: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    backgroundColor: '#3b82f6',
                    '&:hover': {
                      backgroundColor: '#2563eb',
                    },
                  }}
                >
                  Submit Complaint
                </Button>
              </Box>
            </Box>

            <Box sx={{ display: 'grid', gap: 1.5 }}>
              {complaints.map((complaint) => (
                <Box
                  key={complaint.title}
                  sx={{
                    backgroundColor: '#0f172a',
                    border: '1px solid rgba(99, 179, 237, 0.12)',
                    borderRadius: '10px',
                    p: 2,
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', lg: '60px 1.5fr 2fr 1fr auto' },
                    gap: { xs: 2, lg: 2.5 },
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src={complaint.image}
                    alt={complaint.title}
                    sx={{
                      width: { xs: '100%', lg: 60 },
                      height: { xs: 180, sm: 220, lg: 60 },
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                  />

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        px: 1.25,
                        py: 0.5,
                        borderRadius: '9999px',
                        fontSize: '11px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        backgroundColor: 'rgba(148, 163, 184, 0.1)',
                        color: '#94a3b8',
                        border: '1px solid rgba(148, 163, 184, 0.2)',
                      }}
                    >
                      {complaint.type}
                    </Box>
                    <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>{complaint.title}</Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, color: '#94a3b8', fontSize: '13px' }}>
                    <PlaceOutlinedIcon sx={{ fontSize: 14 }} />
                    <Typography sx={{ fontSize: '13px', color: '#94a3b8' }}>{complaint.location}</Typography>
                  </Box>

                  <Typography sx={{ fontSize: '13px', color: '#64748b' }}>{complaint.date}</Typography>

                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifySelf: { xs: 'flex-start', lg: 'end' },
                      px: 1.25,
                      py: 0.5,
                      borderRadius: '9999px',
                      fontSize: '11px',
                      fontWeight: 600,
                      backgroundColor: complaint.statusBg,
                      color: complaint.statusColor,
                    }}
                  >
                    {complaint.status}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

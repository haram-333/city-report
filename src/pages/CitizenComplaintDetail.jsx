import React from 'react';
import {
  Avatar,
  Box,
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
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CheckIcon from '@mui/icons-material/Check';

const pageTheme = createTheme({
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

const sidebarItems = [
  { label: 'Dashboard', icon: DashboardOutlinedIcon, to: '/citizen/dashboard' },
  { label: 'Submit Complaint', icon: AddCircleOutlineOutlinedIcon, to: '/citizen/submit-complaint' },
  { label: 'My Complaints', icon: DescriptionOutlinedIcon, to: '/citizen/my-complaints', active: true },
  { label: 'Profile', icon: PersonOutlineOutlinedIcon, to: '#' },
];

const statusSteps = [
  { title: 'Submitted', time: 'Demo timestamp' },
  { title: 'Under Review', time: 'Demo timestamp' },
  { title: 'Assigned to Worker', time: 'Demo timestamp' },
  { title: 'In Progress', time: 'Demo timestamp' },
  { title: 'Resolved', time: 'Demo timestamp' },
];

function CitizenSidebar() {
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
        {sidebarItems.map((item) => {
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
            DC
          </Avatar>
          <Box>
            <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#f1f5f9' }}>
              Demo Citizen
            </Typography>
            <Typography sx={{ fontSize: '11px', color: '#94a3b8' }}>Frontend Preview</Typography>
          </Box>
        </Box>

        <Link
          component={RouterLink}
          to="/auth"
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

function Card({ title, icon, children }) {
  const Icon = icon;

  return (
    <Box
      sx={{
        backgroundColor: '#0f172a',
        border: '1px solid rgba(99, 179, 237, 0.12)',
        borderRadius: '14px',
        p: 3,
      }}
    >
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 600,
          mb: 2.5,
          display: 'flex',
          alignItems: 'center',
          gap: 1.25,
        }}
      >
        <Icon sx={{ fontSize: 20, color: '#94a3b8' }} />
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function CitizenComplaintDetail() {
  return (
    <ThemeProvider theme={pageTheme}>
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
              linear-gradient(to right, rgba(99, 179, 237, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 179, 237, 0.03) 1px, transparent 1px)
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
          <CitizenSidebar />
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
                DC
              </Avatar>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.25 }}>
              {sidebarItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Box
                    key={item.label}
                    component={item.to === '#' ? 'div' : RouterLink}
                    to={item.to === '#' ? undefined : item.to}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 1.5,
                      py: 1.2,
                      borderRadius: '10px',
                      textDecoration: 'none',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: item.active ? '#ffffff' : '#94a3b8',
                      border: '1px solid rgba(99, 179, 237, 0.12)',
                      backgroundColor: item.active ? '#3b82f6' : 'transparent',
                    }}
                  >
                    <Icon sx={{ fontSize: 18 }} />
                    {item.label}
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box sx={{ maxWidth: 1100, mx: 'auto' }}>
            <Box
              component={RouterLink}
              to="/citizen/my-complaints"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                color: '#94a3b8',
                fontSize: '14px',
                fontWeight: 600,
                mb: 3,
              }}
            >
              <ArrowBackRoundedIcon sx={{ fontSize: 18 }} />
              My Complaints
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1.6fr 1fr' },
                gap: 3,
              }}
            >
              <Box sx={{ display: 'grid', gap: 3 }}>
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 240, sm: 320, md: 360 },
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: '1px solid rgba(99, 179, 237, 0.12)',
                  }}
                >
                  <Box
                    component="img"
                    src="https://storage.googleapis.com/banani-generated-images/generated-images/dfb6abfa-ed71-4a2c-9c29-c2d336fc18a3.jpg"
                    alt="Complaint preview"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>

                <Card title="AI Detection Result" icon={SmartToyOutlinedIcon}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: { xs: 'flex-start', sm: 'flex-end' },
                      flexDirection: { xs: 'column', sm: 'row' },
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, color: '#60a5fa' }}>
                      Pothole
                    </Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#22c55e' }}>
                      92% Confidence
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: '100%',
                      height: 6,
                      backgroundColor: '#111827',
                      borderRadius: '9999px',
                      overflow: 'hidden',
                      mb: 2,
                    }}
                  >
                    <Box sx={{ width: '92%', height: '100%', backgroundColor: '#3b82f6', borderRadius: '9999px' }} />
                  </Box>

                  <Box
                    sx={{
                      fontSize: '13px',
                      color: '#94a3b8',
                      backgroundColor: '#111827',
                      px: 1.5,
                      py: 1.5,
                      borderRadius: '8px',
                      border: '1px dashed rgba(99, 179, 237, 0.2)',
                      fontFamily: 'monospace',
                    }}
                  >
                    Detected Bounding Box: Demo coordinates from vision model inference
                  </Box>
                </Card>

                <Card title="Description" icon={SubjectRoundedIcon}>
                  <Typography sx={{ fontSize: '14px', color: '#f1f5f9', lineHeight: 1.75, whiteSpace: 'pre-line' }}>
                    Demo complaint description for the citizen portal preview. This block represents the
                    submitted issue detail view and shows how longer complaint content wraps responsively.
                  </Typography>
                </Card>
              </Box>

              <Box sx={{ display: 'grid', gap: 3 }}>
                <Card title="Complaint Status" icon={TrackChangesOutlinedIcon}>
                  <Box sx={{ position: 'relative', pl: 1 }}>
                    {statusSteps.map((step, index) => (
                      <Box
                        key={step.title}
                        sx={{
                          position: 'relative',
                          display: 'flex',
                          gap: 2.5,
                          pb: index === statusSteps.length - 1 ? 0 : 4,
                          '&::after': index === statusSteps.length - 1
                            ? undefined
                            : {
                                content: '""',
                                position: 'absolute',
                                left: 11,
                                top: 24,
                                bottom: -8,
                                width: '2px',
                                backgroundColor: '#3b82f6',
                                zIndex: 1,
                              },
                        }}
                      >
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2,
                            flexShrink: 0,
                            backgroundColor: '#3b82f6',
                            color: '#ffffff',
                            boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.1)',
                          }}
                        >
                          <CheckIcon sx={{ fontSize: 14 }} />
                        </Box>
                        <Box sx={{ pt: '2px' }}>
                          <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#f1f5f9', mb: 0.5 }}>
                            {step.title}
                          </Typography>
                          <Typography sx={{ fontSize: '12px', color: '#64748b' }}>{step.time}</Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Card>

                <Card title="Information" icon={InfoOutlinedIcon}>
                  <Box sx={{ display: 'grid', gap: 2 }}>
                    {[
                      ['Complaint ID', 'Demo Ticket'],
                      ['Department', 'Assigned Department'],
                      ['Submitted At', 'Demo Date'],
                    ].map(([label, value]) => (
                      <Box
                        key={label}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: 2,
                          pb: 2,
                          borderBottom: '1px solid rgba(99, 179, 237, 0.2)',
                        }}
                      >
                        <Typography sx={{ fontSize: '13px', color: '#94a3b8' }}>{label}</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#f1f5f9', textAlign: 'right' }}>
                          {value}
                        </Typography>
                      </Box>
                    ))}

                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                        pb: 2,
                        borderBottom: '1px solid rgba(99, 179, 237, 0.2)',
                      }}
                    >
                      <Typography sx={{ fontSize: '13px', color: '#94a3b8' }}>Issue Type</Typography>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: '9999px',
                          fontSize: '12px',
                          fontWeight: 600,
                          backgroundColor: 'rgba(59, 130, 246, 0.1)',
                          color: '#3b82f6',
                          border: '1px solid rgba(59, 130, 246, 0.2)',
                        }}
                      >
                        Infrastructure
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <Typography sx={{ fontSize: '13px', color: '#94a3b8' }}>Priority</Typography>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          px: 1.5,
                          py: 0.5,
                          borderRadius: '9999px',
                          fontSize: '12px',
                          fontWeight: 600,
                          backgroundColor: 'rgba(245, 158, 11, 0.1)',
                          color: '#f59e0b',
                          border: '1px solid rgba(245, 158, 11, 0.2)',
                        }}
                      >
                        High
                      </Box>
                    </Box>
                  </Box>
                </Card>

                <Card title="Resolution Proof" icon={CameraAltOutlinedIcon}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: { xs: 220, sm: 200 },
                      borderRadius: '10px',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      component="img"
                      src="https://storage.googleapis.com/banani-generated-images/generated-images/6058ce8d-2f74-41a6-9184-ebca6c145144.jpg"
                      alt="Resolution proof"
                      sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) rotate(-15deg)',
                        border: '3px solid #22c55e',
                        color: '#22c55e',
                        fontSize: { xs: '16px', sm: '20px' },
                        fontWeight: 800,
                        px: { xs: 1.5, sm: 2 },
                        py: 1,
                        borderRadius: '8px',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        backgroundColor: 'rgba(15, 23, 42, 0.7)',
                        backdropFilter: 'blur(4px)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Resolved
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

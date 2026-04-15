import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Link,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

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
  { label: 'Tasks', icon: AssignmentOutlinedIcon, to: '/worker/dashboard', active: true },
  { label: 'Profile', icon: PersonOutlineOutlinedIcon, to: '#' },
];

function WorkerSidebar() {
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
            DW
          </Avatar>
          <Box>
            <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#f1f5f9' }}>
              Demo Worker
            </Typography>
            <Typography sx={{ fontSize: '11px', color: '#94a3b8' }}>Field Worker Preview</Typography>
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

function MobileWorkerNav() {
  return (
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
          DW
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
  );
}

function Step({ label, state, completed }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, width: { xs: 'auto', sm: 80 }, minWidth: 0 }}>
      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          backgroundColor: completed ? '#3b82f6' : '#0f172a',
          border: `2px solid ${completed || state === 'active' ? '#3b82f6' : 'rgba(99, 179, 237, 0.12)'}`,
          color: completed ? '#ffffff' : '#94a3b8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {completed ? <CheckRoundedIcon sx={{ fontSize: 18 }} /> : state === 'active' ? <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#3b82f6' }} /> : null}
      </Box>
      <Typography sx={{ fontSize: '12px', fontWeight: 600, color: completed || state === 'active' ? '#f1f5f9' : '#94a3b8', textAlign: 'center' }}>
        {label}
      </Typography>
    </Box>
  );
}

export default function WorkerTaskDetail() {
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
          <WorkerSidebar />
        </Box>

        <Box
          component="main"
          sx={{
            flex: 1,
            ml: { xs: 0, md: '240px' },
            px: { xs: 2, sm: 3, md: 6 },
            py: { xs: 3, md: 5 },
            position: 'relative',
            zIndex: 1,
          }}
        >
          <MobileWorkerNav />

          <Box sx={{ maxWidth: 1080, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box>
              <Box
                component={RouterLink}
                to="/worker/dashboard"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  textDecoration: 'none',
                  color: '#94a3b8',
                  fontSize: '14px',
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                <ArrowBackRoundedIcon sx={{ fontSize: 18 }} />
                My Tasks
              </Box>
              <Typography sx={{ fontSize: { xs: '24px', md: '28px' }, fontWeight: 700 }}>
                Task #Demo
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1.2fr 1fr' },
                gap: 4,
              }}
            >
              <Box>
                <Box sx={{ overflow: 'hidden', borderRadius: '14px', border: '1px solid rgba(99, 179, 237, 0.12)', backgroundColor: '#0f172a' }}>
                  <Box
                    component="img"
                    src="https://storage.googleapis.com/banani-generated-images/generated-images/bb766f85-aaf4-42ac-926f-d544b693669f.jpg"
                    alt="Task evidence"
                    sx={{ width: '100%', height: { xs: 240, sm: 320, md: 360 }, objectFit: 'cover', display: 'block' }}
                  />

                  <Box sx={{ p: { xs: 2.5, md: 4 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                      <Box sx={{ px: 1.25, py: 0.5, borderRadius: '9999px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', backgroundColor: '#111827', color: '#f1f5f9', border: '1px solid rgba(99, 179, 237, 0.2)' }}>
                        Pothole
                      </Box>
                      <Box sx={{ px: 1.25, py: 0.5, borderRadius: '9999px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                        Critical
                      </Box>
                    </Box>

                    <Typography sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, fontSize: '15px', color: '#94a3b8', fontWeight: 500, lineHeight: 1.4, my: 2.5 }}>
                      <FmdGoodOutlinedIcon sx={{ fontSize: 18, color: '#3b82f6', mt: '2px', flexShrink: 0 }} />
                      Downtown district demo location
                    </Typography>

                    <Box>
                      <Typography sx={{ fontSize: '15px', fontWeight: 600, color: '#f1f5f9', mb: 1 }}>
                        Description
                      </Typography>
                      <Typography sx={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6 }}>
                        Demo task description for the worker portal preview. This represents the issue details the worker reads before uploading proof of resolution.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box sx={{ p: { xs: 2.5, md: 4 }, borderRadius: '14px', border: '1px solid rgba(99, 179, 237, 0.12)', backgroundColor: '#0f172a' }}>
                  <Typography sx={{ fontSize: '18px', fontWeight: 700, mb: 4 }}>
                    Task Status
                  </Typography>

                  <Box sx={{ position: 'relative', mb: 5, pt: 1 }}>
                    <Box sx={{ position: 'absolute', top: 24, left: { xs: 20, sm: 30 }, right: { xs: 20, sm: 30 }, height: 2, backgroundColor: 'rgba(99, 179, 237, 0.12)', zIndex: 1 }}>
                      <Box sx={{ width: '50%', height: '100%', backgroundColor: '#3b82f6' }} />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 2, gap: 1 }}>
                      <Step label="Pending" completed />
                      <Step label="In Progress" state="active" />
                      <Step label="Completed" />
                    </Box>
                  </Box>

                  <Typography sx={{ fontSize: '14px', fontWeight: 600, mb: 2 }}>
                    Upload Proof of Resolution
                  </Typography>

                  <Box sx={{ border: '2px dashed rgba(59, 130, 246, 0.3)', backgroundColor: 'rgba(59, 130, 246, 0.02)', borderRadius: '8px', px: 3, py: 4, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, cursor: 'pointer' }}>
                    <AddPhotoAlternateOutlinedIcon sx={{ fontSize: 32, color: '#3b82f6' }} />
                    <Typography sx={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5 }}>
                      Drag and drop your photo here
                      <br />
                      or click to browse
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 3, mb: 3 }}>
                    <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#f1f5f9', mb: 1 }}>
                      Add resolution notes
                    </Typography>
                    <TextField
                      multiline
                      minRows={4}
                      fullWidth
                      placeholder="Describe the actions taken to resolve this issue..."
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          alignItems: 'flex-start',
                          borderRadius: '8px',
                          backgroundColor: '#111827',
                          color: '#f1f5f9',
                          '& fieldset': {
                            borderColor: 'rgba(99, 179, 237, 0.2)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(99, 179, 237, 0.25)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#3b82f6',
                          },
                        },
                        '& .MuiInputBase-input::placeholder': {
                          color: '#64748b',
                          opacity: 1,
                        },
                      }}
                    />
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      height: 48,
                      borderRadius: '8px',
                      backgroundColor: '#22c55e',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontWeight: 600,
                      textTransform: 'none',
                    }}
                    endIcon={<CheckRoundedIcon sx={{ fontSize: 18 }} />}
                  >
                    Mark as Completed
                  </Button>

                  <Typography sx={{ fontSize: '12px', color: '#64748b', textAlign: 'center', mt: 1.5 }}>
                    Once marked complete, the officer will verify your work.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

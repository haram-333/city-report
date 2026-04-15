import React from 'react';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Link,
  TextField,
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
import CheckIcon from '@mui/icons-material/Check';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';

const complaintTheme = createTheme({
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
  { label: 'Submit Complaint', icon: AddCircleOutlineOutlinedIcon, to: '/citizen/submit-complaint', active: true },
  { label: 'My Complaints', icon: DescriptionOutlinedIcon, to: '/citizen/my-complaints' },
  { label: 'Profile', icon: PersonOutlineOutlinedIcon, to: '#' },
];

const inputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    backgroundColor: '#111827',
    color: '#f1f5f9',
    '& fieldset': {
      borderColor: 'rgba(99, 179, 237, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(96, 165, 250, 0.3)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3b82f6',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#64748b',
    opacity: 1,
  },
};

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

const steps = [
  { label: 'Upload Image', state: 'completed' },
  { label: 'Add Location', state: 'completed' },
  { label: 'Review & Submit', state: 'active' },
];

export default function CitizenSubmitComplaint() {
  return (
    <ThemeProvider theme={complaintTheme}>
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
                JA
              </Avatar>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.25 }}>
              {sidebarItems.map((item) => {
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

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 4,
              maxWidth: 1240,
              mx: 'auto',
            }}
          >
            <Typography sx={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em' }}>
              Submit Complaint
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
              maxWidth: 1180,
              mx: 'auto',
              backgroundColor: '#0f172a',
              border: '1px solid rgba(99, 179, 237, 0.12)',
              borderRadius: '14px',
              p: { xs: 2.5, sm: 3.5, md: 5 },
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: { xs: 'stretch', md: 'center' },
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 2, md: 0 },
                mb: 6,
                pb: 4,
                borderBottom: '1px solid rgba(99, 179, 237, 0.12)',
              }}
            >
              {steps.map((step, index) => (
                <React.Fragment key={step.label}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, zIndex: 1 }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 600,
                        backgroundColor:
                          step.state === 'active'
                            ? '#3b82f6'
                            : step.state === 'completed'
                              ? 'rgba(59, 130, 246, 0.1)'
                              : '#111827',
                        border: '1px solid',
                        borderColor:
                          step.state === 'active' || step.state === 'completed'
                            ? '#3b82f6'
                            : 'rgba(99, 179, 237, 0.2)',
                        color: step.state === 'active' ? '#ffffff' : step.state === 'completed' ? '#3b82f6' : '#94a3b8',
                      }}
                    >
                      {step.state === 'completed' ? <CheckIcon sx={{ fontSize: 16 }} /> : index + 1}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: step.state === 'active' ? 600 : 500,
                        color: step.state === 'completed' || step.state === 'active' ? '#f1f5f9' : '#94a3b8',
                      }}
                    >
                      {step.label}
                    </Typography>
                  </Box>

                  {index < steps.length - 1 && (
                    <Box
                      sx={{
                        flex: 1,
                        height: { xs: 24, md: 2 },
                        width: { xs: 2, md: 'auto' },
                        alignSelf: { xs: 'flex-start', md: 'center' },
                        ml: { xs: '15px', md: 2 },
                        my: { xs: -0.5, md: 0 },
                        backgroundColor: 'rgba(99, 179, 237, 0.2)',
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Box>

            <Box sx={{ mb: 7 }}>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 3,
                  '&::after': {
                    content: '""',
                    flex: 1,
                    height: '1px',
                    backgroundColor: 'rgba(99, 179, 237, 0.12)',
                  },
                }}
              >
                1. Upload Image
              </Typography>

              <Box
                sx={{
                  border: '2px dashed rgba(59, 130, 246, 0.3)',
                  backgroundColor: 'rgba(59, 130, 246, 0.02)',
                  borderRadius: '14px',
                  p: { xs: 3, md: 5 },
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                }}
              >
                <CloudUploadOutlinedIcon sx={{ fontSize: 40, color: '#3b82f6', mb: 1.5 }} />
                <Typography sx={{ fontSize: '15px', fontWeight: 600, mb: 0.5 }}>
                  Drag & drop your photo here or click to browse
                </Typography>
                <Typography sx={{ fontSize: '13px', color: '#94a3b8' }}>
                  Supported formats: JPG, PNG, HEIC (Max 10MB)
                </Typography>
              </Box>

              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: { xs: 220, sm: 280 },
                  borderRadius: '14px',
                  overflow: 'hidden',
                  mb: 3,
                  border: '1px solid rgba(99, 179, 237, 0.12)',
                }}
              >
                <Box
                  component="img"
                  src="https://storage.googleapis.com/banani-generated-images/generated-images/f130613c-466c-45b7-9502-4233b2e78484.jpg"
                  alt="Uploaded issue"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    width: 32,
                    height: 32,
                    backgroundColor: 'rgba(15, 23, 42, 0.7)',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    '&:hover': {
                      backgroundColor: 'rgba(15, 23, 42, 0.88)',
                    },
                  }}
                >
                  <CloseRoundedIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Box>

              <Box
                sx={{
                  backgroundColor: '#111827',
                  border: '1px solid rgba(99, 179, 237, 0.12)',
                  borderRadius: '8px',
                  px: { xs: 2, sm: 2.5 },
                  py: 2,
                  mb: 3,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  justifyContent: 'space-between',
                  gap: 1.5,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600, fontSize: '14px' }}>
                  <SmartToyOutlinedIcon sx={{ fontSize: 18, color: '#22c55e' }} />
                  AI Detection Result
                </Box>
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 600,
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    color: '#22c55e',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                  }}
                >
                  Pothole — 92% confidence
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 600, mb: 1.25 }}>Issue Type</Typography>
                <Button
                  fullWidth
                  variant="outlined"
                  endIcon={<KeyboardArrowDownRoundedIcon sx={{ fontSize: 16, color: '#94a3b8' }} />}
                  sx={{
                    justifyContent: 'space-between',
                    borderRadius: '8px',
                    px: 2,
                    py: 1.75,
                    textTransform: 'none',
                    fontSize: '14px',
                    color: '#f1f5f9',
                    borderColor: 'rgba(99, 179, 237, 0.2)',
                    backgroundColor: '#111827',
                  }}
                >
                  Infrastructure — Pothole
                </Button>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    borderRadius: '8px',
                    px: 3,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    backgroundColor: '#3b82f6',
                  }}
                >
                  Next Step
                </Button>
              </Box>
            </Box>

            <Box sx={{ mb: 7 }}>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 3,
                  '&::after': {
                    content: '""',
                    flex: 1,
                    height: '1px',
                    backgroundColor: 'rgba(99, 179, 237, 0.12)',
                  },
                }}
              >
                2. Add Location
              </Typography>

              <Box
                sx={{
                  backgroundColor: '#111827',
                  border: '1px solid rgba(99, 179, 237, 0.2)',
                  borderRadius: '8px',
                  height: 240,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  mb: 3,
                }}
              >
                <PlaceOutlinedIcon sx={{ fontSize: 32, color: '#64748b', mb: 1.5 }} />
                <Typography sx={{ fontSize: '14px', textAlign: 'center' }}>
                  Map will load here — click to set location
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 600, mb: 1.25 }}>Or enter address manually</Typography>
                <TextField
                  fullWidth
                  value="123 Main St, Downtown"
                  sx={inputSx}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 600, mb: 1.25 }}>
                  Describe the issue (optional)
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  value="Large pothole in the middle of the right lane, very dangerous for bikers. Needs immediate attention."
                  sx={inputSx}
                />
                <Typography sx={{ textAlign: 'right', fontSize: '12px', color: '#94a3b8', mt: 1 }}>
                  98 / 300
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column-reverse', sm: 'row' },
                  justifyContent: 'space-between',
                  gap: 1.5,
                }}
              >
                <Button
                  variant="outlined"
                  startIcon={<ArrowBackRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    borderRadius: '8px',
                    px: 3,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#f1f5f9',
                    borderColor: 'rgba(99, 179, 237, 0.2)',
                  }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    borderRadius: '8px',
                    px: 3,
                    py: 1.5,
                    textTransform: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    backgroundColor: '#3b82f6',
                  }}
                >
                  Next Step
                </Button>
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 3,
                  '&::after': {
                    content: '""',
                    flex: 1,
                    height: '1px',
                    backgroundColor: 'rgba(99, 179, 237, 0.12)',
                  },
                }}
              >
                3. Review & Submit
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2.5,
                  backgroundColor: '#111827',
                  border: '1px solid rgba(99, 179, 237, 0.12)',
                  borderRadius: '8px',
                  p: 2.5,
                  mb: 3,
                }}
              >
                <Box
                  component="img"
                  src="https://storage.googleapis.com/banani-generated-images/generated-images/f130613c-466c-45b7-9502-4233b2e78484.jpg"
                  alt="Complaint summary"
                  sx={{
                    width: { xs: '100%', sm: 120 },
                    height: { xs: 180, sm: 90 },
                    borderRadius: '6px',
                    objectFit: 'cover',
                  }}
                />
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {[
                    ['Issue Type:', 'Pothole'],
                    ['Location:', '123 Main St, Downtown'],
                    ['Description:', 'Large pothole in the middle of the right lane...'],
                  ].map(([label, value]) => (
                    <Typography key={label} sx={{ fontSize: '14px' }}>
                      <Box component="span" sx={{ color: '#94a3b8', display: 'inline-block', width: { xs: 90, sm: 100 } }}>
                        {label}
                      </Box>
                      <Box component="span" sx={{ color: '#f1f5f9', fontWeight: 500 }}>
                        {value}
                      </Box>
                    </Typography>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  backgroundColor: 'rgba(245, 158, 11, 0.05)',
                  border: '1px solid rgba(245, 158, 11, 0.2)',
                  borderRadius: '8px',
                  p: 2.5,
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: 2,
                  mb: 4,
                }}
              >
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <WarningAmberRoundedIcon sx={{ fontSize: 20, color: '#f59e0b', flexShrink: 0, mt: '2px' }} />
                  <Typography sx={{ fontSize: '14px', color: '#f1f5f9', lineHeight: 1.5 }}>
                    A similar complaint was reported nearby. Your report will be linked to it.
                  </Typography>
                </Box>
                <IconButton
                  sx={{
                    p: 0.5,
                    color: '#94a3b8',
                    alignSelf: 'flex-start',
                  }}
                >
                  <CloseRoundedIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </Box>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  py: 2,
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontSize: '16px',
                  fontWeight: 600,
                  backgroundColor: '#3b82f6',
                  '&:hover': {
                    backgroundColor: '#2563eb',
                  },
                }}
              >
                Submit Complaint
              </Button>
              <Typography sx={{ textAlign: 'center', fontSize: '12px', color: '#94a3b8', mt: 2 }}>
                Once submitted, your complaint will be reviewed by the Infrastructure department.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

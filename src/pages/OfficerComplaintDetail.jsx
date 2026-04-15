import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';

const detailTheme = createTheme({
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
  { label: 'Dashboard', icon: DashboardOutlinedIcon, to: '/officer/dashboard' },
  { label: 'Complaints', icon: DescriptionOutlinedIcon, to: '/officer/complaints/demo', active: true },
  { label: 'Assigned', icon: GroupsOutlinedIcon, to: '#' },
  { label: 'Profile', icon: PersonOutlineOutlinedIcon, to: '#' },
];

const statusSteps = [
  { title: 'Submitted', time: 'Demo timestamp', state: 'completed' },
  { title: 'Under Review', time: 'Demo timestamp', state: 'completed' },
  { title: 'Assigned', time: 'Demo timestamp', state: 'completed' },
  { title: 'In Progress', time: 'Demo timestamp', state: 'active' },
  { title: 'Resolved', time: 'Pending verification', state: 'pending' },
];

function OfficerSidebar() {
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

      <Box sx={{ p: 3, borderTop: '1px solid rgba(99, 179, 237, 0.12)', mt: 'auto' }}>
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
            DO
          </Avatar>
          <Box>
            <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#f1f5f9' }}>
              Demo Officer
            </Typography>
            <Typography sx={{ fontSize: '11px', color: '#94a3b8' }}>Infrastructure Preview</Typography>
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

function Panel({ title, children }) {
  return (
    <Box
      sx={{
        backgroundColor: '#0f172a',
        border: '1px solid rgba(99, 179, 237, 0.12)',
        borderRadius: '14px',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
      }}
    >
      <Typography sx={{ fontSize: '16px', fontWeight: 700, color: '#f1f5f9', pb: 2, borderBottom: '1px solid rgba(99, 179, 237, 0.12)' }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export default function OfficerComplaintDetail() {
  return (
    <ThemeProvider theme={detailTheme}>
      <Box sx={{ minHeight: '100vh', display: 'flex', backgroundColor: '#080c14', color: '#f1f5f9', position: 'relative', overflow: 'hidden' }}>
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

        <Box sx={{ width: 240, minHeight: '100vh', position: 'fixed', top: 0, left: 0, display: { xs: 'none', md: 'flex' }, flexDirection: 'column', backgroundColor: '#0f172a', borderRight: '1px solid rgba(99, 179, 237, 0.12)', zIndex: 2 }}>
          <OfficerSidebar />
        </Box>

        <Box component="main" sx={{ flex: 1, ml: { xs: 0, md: '240px' }, px: { xs: 2, sm: 3, md: 6 }, py: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 2, mb: 3, p: 2, backgroundColor: '#0f172a', border: '1px solid rgba(99, 179, 237, 0.12)', borderRadius: '14px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
              <Box component="a" href="/" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, textDecoration: 'none', color: '#f1f5f9', fontSize: '18px', fontWeight: 700 }}>
                <Box sx={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', color: '#3b82f6' }}>
                  <ShieldOutlinedIcon sx={{ fontSize: 16 }} />
                </Box>
                CityReport AI
              </Box>
              <Avatar sx={{ width: 36, height: 36, backgroundColor: 'rgba(99, 179, 237, 0.2)', color: '#3b82f6', fontSize: '14px', fontWeight: 600 }}>DO</Avatar>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.25 }}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Box key={item.label} component={item.to === '#' ? 'div' : RouterLink} to={item.to === '#' ? undefined : item.to} sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1.5, py: 1.2, borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: 600, color: item.active ? '#ffffff' : '#94a3b8', border: '1px solid rgba(99, 179, 237, 0.12)', backgroundColor: item.active ? '#3b82f6' : 'transparent' }}>
                    <Icon sx={{ fontSize: 18 }} />
                    {item.label}
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box sx={{ maxWidth: 1280, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Link component={RouterLink} to="/officer/dashboard" underline="none" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, color: '#94a3b8', fontSize: '14px', fontWeight: 500 }}>
              <ArrowBackRoundedIcon sx={{ fontSize: 18 }} />
              Back to Dashboard
            </Link>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
              <Typography sx={{ fontSize: { xs: '24px', md: '28px' }, fontWeight: 700, mr: 1 }}>Demo-01</Typography>
              <Pill icon={<SellOutlinedIcon sx={{ fontSize: 14 }} />} bg="#111827" color="#f1f5f9" border="rgba(99, 179, 237, 0.2)">Pothole</Pill>
              <Pill bg="rgba(239, 68, 68, 0.1)" color="#ef4444" border="rgba(239, 68, 68, 0.2)">Critical</Pill>
              <Pill bg="rgba(139, 92, 246, 0.1)" color="#8b5cf6" border="rgba(139, 92, 246, 0.2)">In Progress</Pill>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', xl: 'repeat(3, 1fr)' }, gap: 3, alignItems: 'start' }}>
              <Panel title="Evidence">
                <Box sx={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(99, 179, 237, 0.2)' }}>
                  <Box component="img" src="https://storage.googleapis.com/banani-generated-images/generated-images/554cfe4c-9a91-4d59-91ef-6b296159d685.jpg" alt="Complaint evidence" sx={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '4 / 3' }} />
                </Box>
                <Box sx={{ backgroundColor: '#111827', border: '1px solid rgba(99, 179, 237, 0.2)', borderRadius: '8px', p: 2, display: 'grid', gap: 1 }}>
                  <AiRow label="Detected Class:" value="Pothole" />
                  <AiRow label="Confidence:" value="92.4%" valueColor="#22c55e" />
                  <AiRow label="Bounding Box:" value="[demo coordinates]" monospace />
                </Box>
              </Panel>

              <Panel title="Complaint Details">
                <InfoItem icon={<PlaceOutlinedIcon sx={{ fontSize: 18, color: '#3b82f6', mt: '2px' }} />} label="Location" text="Main corridor, demo district" />
                <InfoItem icon={<SubjectRoundedIcon sx={{ fontSize: 18, color: '#3b82f6', mt: '2px' }} />} label="Description" text="Demo complaint detail text for the officer review flow. This area represents the submitted issue summary and stays readable on smaller screens." />
                <InfoItem icon={<CalendarMonthOutlinedIcon sx={{ fontSize: 18, color: '#3b82f6', mt: '2px' }} />} label="Submitted Date" text="Demo timestamp" />
                <InfoItem icon={<ApartmentOutlinedIcon sx={{ fontSize: 18, color: '#3b82f6', mt: '2px' }} />} label="Department Routing" text="Infrastructure Dept. (Auto-assigned)" />
                <Box sx={{ backgroundColor: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '8px', p: 2, display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                  <WarningAmberOutlinedIcon sx={{ fontSize: 18, color: '#f59e0b', mt: '2px' }} />
                  <Typography sx={{ fontSize: '13px', color: '#f59e0b', lineHeight: 1.45, fontWeight: 500 }}>
                    <Box component="span" sx={{ display: 'block', fontWeight: 700, mb: 0.25 }}>Duplicate Detected</Box>
                    Linked to nearby demo complaint reference for review flow preview.
                  </Typography>
                </Box>
              </Panel>

              <Panel title="Assignment & Status">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, backgroundColor: '#111827', border: '1px solid rgba(99, 179, 237, 0.2)', borderRadius: '8px', p: 2, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar sx={{ width: 40, height: 40, bgcolor: 'rgba(99, 179, 237, 0.2)', color: '#3b82f6' }}>MW</Avatar>
                    <Box>
                      <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>Assigned Worker</Typography>
                      <Typography sx={{ fontSize: '12px', color: '#94a3b8' }}>Field Worker</Typography>
                    </Box>
                  </Box>
                  <Button variant="outlined" sx={{ borderRadius: '6px', textTransform: 'none', fontSize: '12px', fontWeight: 600, color: '#3b82f6', borderColor: 'rgba(59, 130, 246, 0.4)' }}>
                    Reassign
                  </Button>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {statusSteps.map((step, index) => (
                    <Box key={step.title} sx={{ display: 'flex', gap: 2, position: 'relative', pb: index === statusSteps.length - 1 ? 0 : 3 }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: step.state === 'completed' ? '#3b82f6' : step.state === 'active' ? '#080c14' : '#111827', border: '2px solid', borderColor: step.state === 'completed' ? '#3b82f6' : step.state === 'active' ? '#8b5cf6' : 'rgba(99, 179, 237, 0.2)', zIndex: 2 }} />
                        {index !== statusSteps.length - 1 && <Box sx={{ position: 'absolute', top: 12, bottom: -12, width: 2, backgroundColor: step.state === 'completed' ? '#3b82f6' : 'rgba(99, 179, 237, 0.2)' }} />}
                      </Box>
                      <Box>
                        <Typography sx={{ fontSize: '14px', fontWeight: 600, color: step.state === 'pending' ? '#64748b' : '#f1f5f9', mb: 0.5 }}>{step.title}</Typography>
                        <Typography sx={{ fontSize: '12px', color: '#94a3b8' }}>{step.time}</Typography>
                        {step.state === 'active' && (
                          <Box sx={{ mt: 1.5, backgroundColor: '#111827', border: '1px dashed rgba(99, 179, 237, 0.2)', borderRadius: '8px', p: 1.5, display: 'flex', gap: 1.5, alignItems: 'center' }}>
                            <Box component="img" src="https://storage.googleapis.com/banani-generated-images/generated-images/5081c619-1b7b-4ee5-812d-95884d212e88.jpg" alt="Proof preview" sx={{ width: 48, height: 48, borderRadius: '6px', objectFit: 'cover' }} />
                            <Typography sx={{ fontSize: '13px', color: '#f1f5f9', fontWeight: 500 }}>Resolution proof uploaded by assigned worker</Typography>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Button fullWidth variant="contained" startIcon={<CheckCircleOutlineOutlinedIcon sx={{ fontSize: 18 }} />} sx={{ mt: 'auto', py: 1.75, borderRadius: '8px', textTransform: 'none', fontSize: '14px', fontWeight: 600, backgroundColor: '#3b82f6', '&:hover': { backgroundColor: '#2563eb' } }}>
                  Mark as Verified & Resolved
                </Button>
              </Panel>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

function Pill({ children, icon, bg, color, border }) {
  return <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: icon ? 0.75 : 0, px: 1.5, py: 0.5, borderRadius: '9999px', fontSize: '12px', fontWeight: 600, whiteSpace: 'nowrap', backgroundColor: bg, color, border: `1px solid ${border}` }}>{icon}{children}</Box>;
}

function AiRow({ label, value, valueColor = '#f1f5f9', monospace = false }) {
  return <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, fontSize: '14px' }}><Typography sx={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500 }}>{label}</Typography><Typography sx={{ color: valueColor, fontSize: monospace ? '13px' : '14px', fontWeight: 600, fontFamily: monospace ? 'monospace' : 'inherit' }}>{value}</Typography></Box>;
}

function InfoItem({ icon, label, text }) {
  return <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>{icon}<Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}><Typography sx={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</Typography><Typography sx={{ fontSize: '14px', color: '#f1f5f9', fontWeight: 500, lineHeight: 1.5 }}>{text}</Typography></Box></Box>;
}

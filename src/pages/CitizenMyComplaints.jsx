import React from 'react';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Link,
  MenuItem,
  Select,
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
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';

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

const complaints = [
  {
    id: 'demo-1',
    type: 'Pothole',
    location: 'Downtown district demo location',
    date: 'Demo date • Demo time',
    status: 'In Progress',
    image:
      'https://storage.googleapis.com/banani-generated-images/generated-images/17cf403c-deb5-4a5d-86eb-9f2f511a28e6.jpg',
  },
  {
    id: 'demo-2',
    type: 'Garbage Dump',
    location: 'Commercial block demo location',
    date: 'Demo date • Demo time',
    status: 'Pending',
    image:
      'https://storage.googleapis.com/banani-generated-images/generated-images/50b0507d-0f8b-43bd-b255-51180f523c78.jpg',
  },
  {
    id: 'demo-3',
    type: 'Open Manhole',
    location: 'Westside boulevard demo location',
    date: 'Demo date • Demo time',
    status: 'Pending',
    image:
      'https://storage.googleapis.com/banani-generated-images/generated-images/e466aa81-9267-438e-838b-35d00987e064.jpg',
  },
  {
    id: 'demo-4',
    type: 'Broken Streetlight',
    location: 'Residential area demo location',
    date: 'Demo date • Demo time',
    status: 'Resolved',
    image:
      'https://storage.googleapis.com/banani-generated-images/generated-images/772d293a-c878-45e4-9ff6-2c2f36952e66.jpg',
  },
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

function FilterSelect({ label }) {
  return (
    <Select
      value={label}
      IconComponent={KeyboardArrowDownRoundedIcon}
      sx={{
        minWidth: { xs: '100%', sm: 150 },
        height: 42,
        borderRadius: '8px',
        color: '#f1f5f9',
        backgroundColor: '#111827',
        fontSize: '13px',
        fontWeight: 500,
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'rgba(99, 179, 237, 0.2)',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#3b82f6',
        },
        '.MuiSelect-icon': {
          color: '#94a3b8',
        },
      }}
    >
      <MenuItem value={label}>{label}</MenuItem>
    </Select>
  );
}

function ComplaintCard({ complaint }) {
  const statusStyles =
    complaint.status === 'Resolved'
      ? {
          color: '#22c55e',
          border: '1px solid rgba(34, 197, 94, 0.2)',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          dot: '#22c55e',
        }
      : complaint.status === 'In Progress'
        ? {
            color: '#3b82f6',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            dot: '#3b82f6',
          }
        : {
            color: '#f59e0b',
            border: '1px solid rgba(245, 158, 11, 0.2)',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            dot: '#f59e0b',
          };

  return (
    <Box
      component={RouterLink}
      to="/citizen/my-complaints/demo"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: { xs: 'stretch', sm: 'center' },
        gap: { xs: 2, sm: 3 },
        p: 2,
        borderRadius: '8px',
        border: '1px solid rgba(99, 179, 237, 0.12)',
        backgroundColor: '#0f172a',
        textDecoration: 'none',
        transition: 'border-color 0.2s, background-color 0.2s',
        '&:hover': {
          borderColor: 'rgba(99, 179, 237, 0.3)',
          backgroundColor: 'rgba(15, 23, 42, 0.8)',
        },
      }}
    >
      <Box
        component="img"
        src={complaint.image}
        alt={complaint.type}
        sx={{
          width: { xs: '100%', sm: 80 },
          minWidth: { sm: 80 },
          height: { xs: 180, sm: 80 },
          borderRadius: '8px',
          objectFit: 'cover',
        }}
      />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start' }}>
        <Box
          sx={{
            px: 1.25,
            py: 0.5,
            borderRadius: '9999px',
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            backgroundColor: 'rgba(99, 179, 237, 0.1)',
            color: '#60a5fa',
            border: '1px solid rgba(99, 179, 237, 0.2)',
          }}
        >
          {complaint.type}
        </Box>

        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
            fontSize: '13px',
            color: '#94a3b8',
            fontWeight: 500,
          }}
        >
          <FmdGoodOutlinedIcon sx={{ fontSize: 14, color: '#64748b' }} />
          {complaint.location}
        </Typography>

        <Typography sx={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>
          {complaint.date}
        </Typography>
      </Box>

      <Box
        sx={{
          minWidth: { sm: 120 },
          display: 'flex',
          flexDirection: { xs: 'row', sm: 'column' },
          alignItems: { xs: 'center', sm: 'flex-end' },
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            px: 1.5,
            py: 0.75,
            borderRadius: '9999px',
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: statusStyles.color,
            border: statusStyles.border,
            backgroundColor: statusStyles.backgroundColor,
          }}
        >
          <Box sx={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: statusStyles.dot }} />
          {complaint.status}
        </Box>

        <Typography
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            fontSize: '13px',
            fontWeight: 600,
            color: '#3b82f6',
          }}
        >
          View Details
          <ArrowOutwardRoundedIcon sx={{ fontSize: 15 }} />
        </Typography>
      </Box>
    </Box>
  );
}

export default function CitizenMyComplaints() {
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

          <Box sx={{ maxWidth: 1080, mx: 'auto' }}>
            <Box
              sx={{
                position: 'sticky',
                top: 0,
                zIndex: 3,
                mb: 3,
                mx: { xs: -2, sm: -3, md: -6 },
                px: { xs: 2, sm: 3, md: 6 },
                py: 3,
                borderBottom: '1px solid rgba(99, 179, 237, 0.12)',
                backgroundColor: 'rgba(8, 12, 20, 0.85)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <Box
                sx={{
                  maxWidth: 1080,
                  mx: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 2,
                }}
              >
                <Typography sx={{ fontSize: { xs: '18px', md: '20px' }, fontWeight: 700 }}>
                  My Complaints
                </Typography>
                <IconButton
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '1px solid rgba(99, 179, 237, 0.12)',
                    backgroundColor: '#0f172a',
                    color: '#94a3b8',
                    position: 'relative',
                  }}
                >
                  <NotificationsNoneRoundedIcon sx={{ fontSize: 20 }} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 12,
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: '#3b82f6',
                    }}
                  />
                </IconButton>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
                flexWrap: 'wrap',
                mb: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  width: { xs: '100%', md: 320 },
                  px: 2,
                  py: 1.25,
                  borderRadius: '8px',
                  border: '1px solid rgba(99, 179, 237, 0.2)',
                  backgroundColor: '#111827',
                }}
              >
                <SearchRoundedIcon sx={{ fontSize: 18, color: '#94a3b8' }} />
                <TextField
                  variant="standard"
                  placeholder="Search by ID or location..."
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  sx={{
                    '& .MuiInputBase-input': {
                      p: 0,
                      fontSize: '14px',
                      color: '#f1f5f9',
                      '&::placeholder': {
                        color: '#64748b',
                        opacity: 1,
                      },
                    },
                  }}
                />
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', width: { xs: '100%', md: 'auto' } }}>
                <FilterSelect label="All Status" />
                <FilterSelect label="All Types" />
                <FilterSelect label="Sort by: Date" />
              </Box>
            </Box>

            <Box sx={{ display: 'grid', gap: 1.5 }}>
              {complaints.map((complaint) => (
                <ComplaintCard key={complaint.id} complaint={complaint} />
              ))}
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 4, flexWrap: 'wrap' }}>
              <Button
                variant="outlined"
                sx={{
                  px: 2,
                  minWidth: 'auto',
                  height: 36,
                  borderRadius: '8px',
                  borderColor: 'rgba(99, 179, 237, 0.12)',
                  color: '#94a3b8',
                }}
              >
                &lt; Prev
              </Button>
              {['1', '2', '3'].map((page) => (
                <Button
                  key={page}
                  variant={page === '1' ? 'contained' : 'outlined'}
                  sx={{
                    minWidth: 36,
                    width: 36,
                    height: 36,
                    borderRadius: '8px',
                    borderColor: page === '1' ? '#3b82f6' : 'rgba(99, 179, 237, 0.12)',
                    backgroundColor: page === '1' ? '#3b82f6' : 'transparent',
                    color: page === '1' ? '#ffffff' : '#94a3b8',
                  }}
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outlined"
                sx={{
                  px: 2,
                  minWidth: 'auto',
                  height: 36,
                  borderRadius: '8px',
                  borderColor: 'rgba(99, 179, 237, 0.12)',
                  color: '#94a3b8',
                }}
              >
                Next &gt;
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

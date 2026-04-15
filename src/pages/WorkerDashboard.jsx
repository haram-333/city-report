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
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
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
  { label: 'Tasks', icon: AssignmentOutlinedIcon, to: '/worker/dashboard', active: true },
  { label: 'Profile', icon: PersonOutlineOutlinedIcon, to: '#' },
];

const tasks = [
  {
    id: 'task-1',
    type: 'Pothole',
    priority: 'Critical',
    status: 'In Progress',
    location: 'Downtown district demo location',
    image:
      'https://storage.googleapis.com/banani-generated-images/generated-images/bb766f85-aaf4-42ac-926f-d544b693669f.jpg',
    critical: true,
  },
  {
    id: 'task-2',
    type: 'Street Light',
    priority: 'High',
    status: 'Pending',
    location: 'Sector demo location',
    image:
      'https://storage.googleapis.com/banani-generated-images/generated-images/0de222fb-bd62-401c-9584-81189d789aed.jpg',
  },
  {
    id: 'task-3',
    type: 'Vandalism',
    priority: 'Medium',
    status: 'Pending',
    location: 'Park entrance demo location',
    image:
      'https://storage.googleapis.com/banani-generated-images/generated-images/c05fb142-0a62-4256-9363-1c91189d5c69.jpg',
  },
  {
    id: 'task-4',
    type: 'Waste',
    priority: 'Medium',
    status: 'In Progress',
    location: 'North side demo location',
    image:
      'https://storage.googleapis.com/banani-generated-images/generated-images/5eec1591-fad2-40bc-96aa-d7872f6f4344.jpg',
  },
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

function priorityStyles(priority) {
  if (priority === 'Critical') {
    return {
      color: '#ef4444',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      border: '1px solid rgba(239, 68, 68, 0.2)',
    };
  }

  if (priority === 'High') {
    return {
      color: '#f59e0b',
      backgroundColor: 'rgba(245, 158, 11, 0.1)',
      border: '1px solid rgba(245, 158, 11, 0.2)',
    };
  }

  return {
    color: '#3b82f6',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
  };
}

function statusDot(status) {
  return status === 'In Progress'
    ? { color: '#8b5cf6', shadow: '0 0 8px rgba(139, 92, 246, 0.4)' }
    : { color: '#f59e0b', shadow: '0 0 8px rgba(245, 158, 11, 0.4)' };
}

function TaskCard({ task }) {
  const priority = priorityStyles(task.priority);
  const dot = statusDot(task.status);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        borderRadius: '14px',
        backgroundColor: '#0f172a',
        border: '1px solid rgba(99, 179, 237, 0.12)',
        borderTop: task.critical ? '2px solid #ef4444' : '1px solid rgba(99, 179, 237, 0.12)',
      }}
    >
      <Box
        component="img"
        src={task.image}
        alt={task.type}
        sx={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }}
      />

      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
          <Box
            sx={{
              px: 1.25,
              py: 0.5,
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              backgroundColor: '#111827',
              color: '#f1f5f9',
              border: '1px solid rgba(99, 179, 237, 0.2)',
            }}
          >
            {task.type}
          </Box>

          <Box
            sx={{
              px: 1.25,
              py: 0.5,
              borderRadius: '9999px',
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              ...priority,
            }}
          >
            {task.priority}
          </Box>
        </Box>

        <Typography
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 1,
            fontSize: '14px',
            color: '#94a3b8',
            fontWeight: 500,
            lineHeight: 1.4,
          }}
        >
          <FmdGoodOutlinedIcon sx={{ fontSize: 16, color: '#3b82f6', mt: '2px', flexShrink: 0 }} />
          {task.location}
        </Typography>

        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            fontSize: '13px',
            fontWeight: 600,
            color: '#f1f5f9',
            mb: 1,
          }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: dot.color,
              boxShadow: dot.shadow,
            }}
          />
          {task.status}
        </Typography>

        <Button
          component={RouterLink}
          to="/worker/tasks/demo"
          variant="outlined"
          sx={{
            mt: 'auto',
            width: '100%',
            height: 44,
            borderRadius: '8px',
            borderColor: 'rgba(59, 130, 246, 0.3)',
            color: '#3b82f6',
            fontSize: '14px',
            fontWeight: 600,
            textTransform: 'none',
          }}
          endIcon={<ArrowOutwardRoundedIcon sx={{ fontSize: 16 }} />}
        >
          View Task
        </Button>
      </Box>
    </Box>
  );
}

export default function WorkerDashboard() {
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

          <Box sx={{ maxWidth: 1080, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: { xs: 'flex-start', md: 'center' },
                justifyContent: 'space-between',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
              }}
            >
              <Typography sx={{ fontSize: { xs: '24px', md: '28px' }, fontWeight: 700 }}>
                My Tasks
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: { xs: 'flex-start', sm: 'center' },
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 1.5,
                }}
              >
                <Typography sx={{ fontSize: '15px', fontWeight: 600, color: '#f1f5f9' }}>
                  Demo Worker
                </Typography>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    px: 1.75,
                    py: 0.75,
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                  }}
                >
                  Active Tasks: Demo Count
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', xl: 'repeat(2, 1fr)' },
                gap: 3,
              }}
            >
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

import React from 'react';
import {
  Avatar,
  Box,
  Button,
  InputAdornment,
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
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const officerTheme = createTheme({
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
  { label: 'Dashboard', icon: DashboardOutlinedIcon, to: '/officer/dashboard', active: true },
  { label: 'Complaints', icon: DescriptionOutlinedIcon, to: '/officer/complaints/demo' },
  { label: 'Assigned', icon: GroupsOutlinedIcon, to: '#' },
  { label: 'Profile', icon: PersonOutlineOutlinedIcon, to: '#' },
];

const stats = [
  {
    label: 'Demo Complaints',
    value: '—',
    icon: InsertDriveFileOutlinedIcon,
    iconColor: '#3b82f6',
  },
  {
    label: 'Critical Queue',
    value: '—',
    icon: WarningAmberOutlinedIcon,
    iconColor: '#ef4444',
    critical: true,
  },
  {
    label: 'Pending Assignment',
    value: '—',
    icon: AccessTimeOutlinedIcon,
    iconColor: '#f59e0b',
  },
  {
    label: 'Resolved Today',
    value: '—',
    icon: CheckCircleOutlineOutlinedIcon,
    iconColor: '#22c55e',
  },
];

const complaints = [
  {
    id: 'Demo-01',
    issueType: 'Pothole',
    location: 'Main corridor',
    priority: 'Critical',
    priorityBg: 'rgba(239, 68, 68, 0.1)',
    priorityColor: '#ef4444',
    status: 'Pending',
    statusBg: 'rgba(245, 158, 11, 0.1)',
    statusColor: '#f59e0b',
    submittedAt: 'Recent',
    action: 'Assign to Worker',
    critical: true,
  },
  {
    id: 'Demo-02',
    issueType: 'Road Crack',
    location: 'Sector route',
    priority: 'Medium',
    priorityBg: 'rgba(59, 130, 246, 0.1)',
    priorityColor: '#3b82f6',
    status: 'Pending',
    statusBg: 'rgba(245, 158, 11, 0.1)',
    statusColor: '#f59e0b',
    submittedAt: 'Recent',
    action: 'Assign to Worker',
  },
  {
    id: 'Demo-03',
    issueType: 'Blocked Drain',
    location: 'South block',
    priority: 'High',
    priorityBg: 'rgba(245, 158, 11, 0.1)',
    priorityColor: '#f59e0b',
    status: 'In Progress',
    statusBg: 'rgba(139, 92, 246, 0.1)',
    statusColor: '#8b5cf6',
    submittedAt: 'Recent',
    action: 'Assigned to worker',
  },
  {
    id: 'Demo-04',
    issueType: 'Open Manhole',
    location: 'Downtown area',
    priority: 'Critical',
    priorityBg: 'rgba(239, 68, 68, 0.1)',
    priorityColor: '#ef4444',
    status: 'Pending',
    statusBg: 'rgba(245, 158, 11, 0.1)',
    statusColor: '#f59e0b',
    submittedAt: 'Recent',
    action: 'Assign to Worker',
    critical: true,
  },
  {
    id: 'Demo-05',
    issueType: 'Broken Streetlight',
    location: 'Park road',
    priority: 'Low',
    priorityBg: 'rgba(34, 197, 94, 0.1)',
    priorityColor: '#22c55e',
    status: 'Resolved',
    statusBg: 'rgba(34, 197, 94, 0.1)',
    statusColor: '#22c55e',
    submittedAt: 'Recent',
    action: 'Resolved',
  },
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

export default function OfficerDashboard() {
  return (
    <ThemeProvider theme={officerTheme}>
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
          <OfficerSidebar />
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
                DO
              </Avatar>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.25 }}>
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
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', sm: 'center' },
                gap: 2,
                mb: 4,
              }}
            >
              <Typography sx={{ fontSize: '24px', fontWeight: 700 }}>
                Dashboard
              </Typography>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.75,
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(99, 179, 237, 0.1)',
                  color: '#60a5fa',
                  border: '1px solid rgba(99, 179, 237, 0.12)',
                  fontSize: '13px',
                  fontWeight: 600,
                }}
              >
                <ApartmentOutlinedIcon sx={{ fontSize: 16 }} />
                Infrastructure Dept.
              </Box>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' },
                gap: 3,
                mb: 4,
              }}
            >
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <Box
                    key={stat.label}
                    sx={{
                      backgroundColor: '#0f172a',
                      border: '1px solid',
                      borderColor: stat.critical ? 'rgba(239, 68, 68, 0.4)' : 'rgba(99, 179, 237, 0.12)',
                      borderRadius: '14px',
                      p: 3,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                        color: '#94a3b8',
                        fontSize: '14px',
                        fontWeight: 600,
                      }}
                    >
                      <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#94a3b8' }}>
                        {stat.label}
                      </Typography>
                      <Icon sx={{ fontSize: 18, color: stat.iconColor }} />
                    </Box>
                    <Typography sx={{ fontSize: '32px', fontWeight: 700, color: '#f1f5f9' }}>
                      {stat.value}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            <Box
              sx={{
                backgroundColor: '#0f172a',
                border: '1px solid rgba(99, 179, 237, 0.12)',
                borderRadius: '14px',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  p: 3,
                  borderBottom: '1px solid rgba(99, 179, 237, 0.12)',
                  alignItems: 'center',
                }}
              >
                <TextField
                  placeholder="Search ID or location..."
                  size="small"
                  sx={{
                    minWidth: { xs: '100%', md: 280 },
                    flex: { xs: '1 1 100%', md: '0 0 auto' },
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#111827',
                      borderRadius: '8px',
                      '& fieldset': {
                        borderColor: 'rgba(99, 179, 237, 0.2)',
                      },
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchOutlinedIcon sx={{ fontSize: 16, color: '#94a3b8' }} />
                      </InputAdornment>
                    ),
                  }}
                />

                <Select
                  size="small"
                  defaultValue="all-statuses"
                  sx={filterSelectSx}
                >
                  <MenuItem value="all-statuses">All Statuses</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="in-progress">In Progress</MenuItem>
                  <MenuItem value="resolved">Resolved</MenuItem>
                </Select>

                <Select
                  size="small"
                  defaultValue="all-priorities"
                  sx={filterSelectSx}
                >
                  <MenuItem value="all-priorities">All Priorities</MenuItem>
                  <MenuItem value="critical">Critical</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="low">Low</MenuItem>
                </Select>

                <Button
                  variant="outlined"
                  startIcon={<CalendarMonthOutlinedIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    borderRadius: '8px',
                    px: 1.5,
                    py: 1,
                    textTransform: 'none',
                    color: '#f1f5f9',
                    borderColor: 'rgba(99, 179, 237, 0.2)',
                    backgroundColor: '#111827',
                  }}
                >
                  Last 7 Days
                </Button>
              </Box>

              <Box sx={{ overflowX: 'auto', display: { xs: 'none', lg: 'block' } }}>
                <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
                  <Box component="thead">
                    <Box component="tr">
                      {['ID', 'Issue Type', 'Location', 'Priority', 'Status', 'Submitted Date', 'Actions'].map((heading) => (
                        <Box
                          key={heading}
                          component="th"
                          sx={{
                            textAlign: 'left',
                            p: '16px 24px',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: '#64748b',
                            textTransform: 'uppercase',
                            borderBottom: '1px solid rgba(99, 179, 237, 0.12)',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {heading}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box component="tbody">
                    {complaints.map((row, index) => (
                      <Box
                        key={row.id}
                        component="tr"
                        sx={{
                          backgroundColor: index === 0 ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
                          '& td:first-of-type': {
                            borderLeft: '3px solid',
                            borderLeftColor: row.critical ? '#ef4444' : 'transparent',
                          },
                        }}
                      >
                        <Cell>{row.id}</Cell>
                        <Cell>
                          <Badge bg="#111827" color="#f1f5f9" border="rgba(99, 179, 237, 0.2)">
                            {row.issueType}
                          </Badge>
                        </Cell>
                        <Cell>{row.location}</Cell>
                        <Cell>
                          <Badge bg={row.priorityBg} color={row.priorityColor} border={row.priorityColor}>
                            {row.priority}
                          </Badge>
                        </Cell>
                        <Cell>
                          <Badge bg={row.statusBg} color={row.statusColor} border={row.statusColor}>
                            {row.status}
                          </Badge>
                        </Cell>
                        <Cell>{row.submittedAt}</Cell>
                        <Cell>
                          {row.action === 'Assign to Worker' ? (
                            <Button
                              component={RouterLink}
                              to="/officer/complaints/demo"
                              variant="outlined"
                              sx={assignButtonSx}
                            >
                              {row.action}
                            </Button>
                          ) : (
                            <Typography
                              sx={{
                                fontSize: '13px',
                                color: row.status === 'Resolved' ? '#22c55e' : '#94a3b8',
                                fontWeight: row.status === 'Resolved' ? 500 : 400,
                              }}
                            >
                              {row.action}
                            </Typography>
                          )}
                        </Cell>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: { xs: 'grid', lg: 'none' }, gap: 2, p: 2 }}>
                {complaints.map((row) => (
                  <Box
                    key={row.id}
                    sx={{
                      backgroundColor: '#111827',
                      border: '1px solid rgba(99, 179, 237, 0.12)',
                      borderLeft: row.critical ? '3px solid #ef4444' : '1px solid rgba(99, 179, 237, 0.12)',
                      borderRadius: '12px',
                      p: 2,
                      display: 'grid',
                      gap: 1.5,
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, alignItems: 'center' }}>
                      <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>{row.id}</Typography>
                      <Badge bg={row.statusBg} color={row.statusColor} border={row.statusColor}>
                        {row.status}
                      </Badge>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      <Badge bg="#111827" color="#f1f5f9" border="rgba(99, 179, 237, 0.2)">
                        {row.issueType}
                      </Badge>
                      <Badge bg={row.priorityBg} color={row.priorityColor} border={row.priorityColor}>
                        {row.priority}
                      </Badge>
                    </Box>
                    <InfoRow label="Location" value={row.location} />
                    <InfoRow label="Submitted" value={row.submittedAt} />
                    {row.action === 'Assign to Worker' ? (
                      <Button component={RouterLink} to="/officer/complaints/demo" variant="outlined" sx={{ ...assignButtonSx, width: '100%' }}>
                        {row.action}
                      </Button>
                    ) : (
                      <Typography
                        sx={{
                          fontSize: '13px',
                          color: row.status === 'Resolved' ? '#22c55e' : '#94a3b8',
                          fontWeight: row.status === 'Resolved' ? 500 : 400,
                        }}
                      >
                        {row.action}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

function Cell({ children }) {
  return (
    <Box
      component="td"
      sx={{
        p: '16px 24px',
        fontSize: '14px',
        color: '#f1f5f9',
        borderBottom: '1px solid rgba(99, 179, 237, 0.12)',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </Box>
  );
}

function Badge({ bg, color, border, children }) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        px: 1.25,
        py: 0.5,
        borderRadius: '9999px',
        fontSize: '12px',
        fontWeight: 600,
        whiteSpace: 'nowrap',
        backgroundColor: bg,
        color,
        border: `1px solid ${border === 'rgba(99, 179, 237, 0.2)' ? border : `${border}33`}`,
      }}
    >
      {children}
    </Box>
  );
}

function InfoRow({ label, value }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
      <Typography sx={{ fontSize: '13px', color: '#94a3b8' }}>{label}</Typography>
      <Typography sx={{ fontSize: '13px', color: '#f1f5f9', textAlign: 'right' }}>{value}</Typography>
    </Box>
  );
}

const filterSelectSx = {
  minWidth: { xs: 'calc(50% - 8px)', md: 160 },
  backgroundColor: '#111827',
  borderRadius: '8px',
  color: '#f1f5f9',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(99, 179, 237, 0.2)',
  },
  '& .MuiSvgIcon-root': {
    color: '#94a3b8',
  },
};

const assignButtonSx = {
  display: 'inline-flex',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '13px',
  fontWeight: 600,
  color: '#3b82f6',
  borderColor: 'rgba(59, 130, 246, 0.4)',
  whiteSpace: 'nowrap',
};

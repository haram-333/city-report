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
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import TrafficRoundedIcon from '@mui/icons-material/TrafficRounded';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';

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

const navItems = [
  { label: 'Overview', icon: DashboardOutlinedIcon, href: '#overview', active: true },
  { label: 'Users', icon: PeopleOutlineRoundedIcon, href: '#users' },
  { label: 'Departments', icon: ApartmentRoundedIcon, href: '#departments' },
  { label: 'Analytics', icon: BarChartRoundedIcon, href: '#analytics' },
];

const stats = [
  { label: 'Total Users', value: '—', icon: GroupsRoundedIcon },
  { label: 'Total Complaints', value: '—', icon: AssignmentRoundedIcon },
  { label: 'Resolved Today', value: '—', icon: CheckCircleOutlineRoundedIcon },
  { label: 'Pending Complaints', value: '—', icon: AccessTimeRoundedIcon },
  { label: 'Critical Open', value: '—', icon: ErrorOutlineRoundedIcon, color: '#ef4444' },
  { label: 'System Health', value: 'Operational', icon: DnsRoundedIcon, status: true },
];

const users = [
  { name: 'Demo Citizen', email: 'citizen-demo@preview.local', role: 'Citizen', department: 'N/A', status: 'Active' },
  { name: 'Demo Officer', email: 'officer-demo@preview.local', role: 'Officer', department: 'Traffic', status: 'Active' },
  { name: 'Demo Worker', email: 'worker-demo@preview.local', role: 'Worker', department: 'Infrastructure', status: 'Active' },
  { name: 'Demo Admin', email: 'admin-demo@preview.local', role: 'Admin', department: 'System', status: 'Active' },
  { name: 'Preview User', email: 'inactive-demo@preview.local', role: 'Worker', department: 'Municipal', status: 'Inactive' },
];

const departments = [
  {
    title: 'Traffic',
    icon: TrafficRoundedIcon,
    iconColor: '#3b82f6',
    iconBg: 'rgba(59, 130, 246, 0.1)',
    openColor: '#3b82f6',
  },
  {
    title: 'Infrastructure',
    icon: EngineeringOutlinedIcon,
    iconColor: '#f59e0b',
    iconBg: 'rgba(245, 158, 11, 0.1)',
    openColor: '#f59e0b',
  },
  {
    title: 'Municipal',
    icon: DeleteOutlineRoundedIcon,
    iconColor: '#8b5cf6',
    iconBg: 'rgba(139, 92, 246, 0.1)',
    openColor: '#8b5cf6',
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

      <Box sx={{ flex: 1, pt: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Box
              key={item.label}
              component="a"
              href={item.href}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 3,
                py: 1.75,
                color: item.active ? '#f1f5f9' : '#94a3b8',
                textDecoration: 'none',
                borderLeft: '3px solid',
                borderLeftColor: item.active ? '#3b82f6' : 'transparent',
                backgroundColor: item.active ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              <Icon sx={{ fontSize: 18 }} />
              {item.label}
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
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              color: '#ef4444',
              border: '1px solid rgba(99, 179, 237, 0.12)',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            DA
          </Avatar>
          <Box>
            <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#f1f5f9' }}>
              Demo Admin
            </Typography>
            <Typography sx={{ fontSize: '11px', color: '#ef4444', fontWeight: 600, mt: 0.25 }}>
              System Admin
            </Typography>
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
            fontWeight: 600,
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

function SectionTitle({ icon: Icon, children }) {
  return (
    <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1.25, fontSize: '18px', fontWeight: 700, m: 0 }}>
      <Icon sx={{ fontSize: 20, color: '#3b82f6' }} />
      {children}
    </Typography>
  );
}

function StatCard({ item }) {
  const Icon = item.icon;

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        p: 3,
        borderRadius: '14px',
        border: '1px solid rgba(99, 179, 237, 0.12)',
        backgroundColor: '#0f172a',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        minHeight: 150,
      }}
    >
      <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 1 }}>
        {item.label}
      </Typography>

      {item.status ? (
        <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: '9999px',
              fontSize: '16px',
              fontWeight: 600,
              color: '#22c55e',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
            }}
          >
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
            Operational
          </Box>
        </Box>
      ) : (
        <Typography sx={{ fontSize: '36px', fontWeight: 700, lineHeight: 1, color: item.color || '#f1f5f9' }}>
          {item.value}
        </Typography>
      )}

      <Icon sx={{ position: 'absolute', right: 24, top: 24, fontSize: 24, color: 'rgba(99, 179, 237, 0.2)' }} />
    </Box>
  );
}

function RoleBadge({ role }) {
  const map = {
    Citizen: { bg: 'rgba(148, 163, 184, 0.1)', color: '#94a3b8', border: 'rgba(148, 163, 184, 0.2)' },
    Officer: { bg: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', border: 'rgba(59, 130, 246, 0.2)' },
    Worker: { bg: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', border: 'rgba(139, 92, 246, 0.2)' },
    Admin: { bg: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'rgba(239, 68, 68, 0.2)' },
  }[role];

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', px: 1.5, py: 0.75, borderRadius: '9999px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: map.color, backgroundColor: map.bg, border: `1px solid ${map.border}` }}>
      {role}
    </Box>
  );
}

function StatusBadge({ status }) {
  const active = status === 'Active';
  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', px: 1.5, py: 0.75, borderRadius: '9999px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', color: active ? '#22c55e' : '#94a3b8', backgroundColor: active ? 'rgba(34, 197, 94, 0.1)' : 'rgba(148, 163, 184, 0.1)' }}>
      {status}
    </Box>
  );
}

export default function AdminDashboard() {
  return (
    <ThemeProvider theme={pageTheme}>
      <Box sx={{ height: '100vh', display: 'flex', backgroundColor: '#080c14', color: '#f1f5f9', position: 'relative', overflow: 'hidden' }}>
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
            width: 260,
            minHeight: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            display: { xs: 'none', lg: 'flex' },
            flexDirection: 'column',
            backgroundColor: '#0f172a',
            borderRight: '1px solid rgba(99, 179, 237, 0.12)',
            zIndex: 2,
          }}
        >
          <SidebarContent />
        </Box>

        <Box component="main" sx={{ flex: 1, ml: { xs: 0, lg: '260px' }, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1, overflowY: 'auto' }}>
          <Box sx={{ display: { xs: 'flex', lg: 'none' }, flexDirection: 'column', gap: 2, m: { xs: 2, sm: 3 }, mb: 0, p: 2, borderRadius: '14px', border: '1px solid rgba(99, 179, 237, 0.12)', backgroundColor: '#0f172a' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
              <Box component="a" href="/" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, textDecoration: 'none', color: '#f1f5f9', fontSize: '18px', fontWeight: 700 }}>
                <Box sx={{ width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '6px', color: '#3b82f6' }}>
                  <ShieldOutlinedIcon sx={{ fontSize: 16 }} />
                </Box>
                CityReport AI
              </Box>
              <Avatar sx={{ width: 36, height: 36, backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(99, 179, 237, 0.12)', fontSize: '14px', fontWeight: 600 }}>
                DA
              </Avatar>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.25 }}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Box key={item.label} component="a" href={item.href} sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1.5, py: 1.25, borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: 600, color: item.active ? '#ffffff' : '#94a3b8', border: '1px solid rgba(99, 179, 237, 0.12)', backgroundColor: item.active ? '#3b82f6' : 'transparent' }}>
                    <Icon sx={{ fontSize: 18 }} />
                    {item.label}
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box sx={{ position: 'sticky', top: 0, zIndex: 3, display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: 2, px: { xs: 2, sm: 3, md: 6 }, py: 3, borderBottom: '1px solid rgba(99, 179, 237, 0.12)', backgroundColor: 'rgba(8, 12, 20, 0.95)', backdropFilter: 'blur(8px)' }}>
            <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>Admin Panel</Typography>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 0.75, borderRadius: '9999px', fontSize: '13px', fontWeight: 600, color: '#22c55e', backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
              Operational
            </Box>
          </Box>

          <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: { xs: 4, md: 5 }, width: '100%', maxWidth: 1440, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Box component="section" id="overview">
              <Box sx={{ mb: 3 }}>
                <SectionTitle icon={DashboardOutlinedIcon}>Overview</SectionTitle>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }, gap: 3 }}>
                {stats.map((item) => (
                  <StatCard key={item.label} item={item} />
                ))}
              </Box>
            </Box>

            <Box component="section" id="analytics">
              <Box sx={{ mb: 3 }}>
                <SectionTitle icon={BarChartRoundedIcon}>Analytics</SectionTitle>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', xl: '2fr 1fr 1fr' }, gap: 3 }}>
                <Box sx={{ p: 3, borderRadius: '14px', border: '1px solid rgba(99, 179, 237, 0.12)', backgroundColor: '#0f172a', display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontSize: '15px', fontWeight: 700, mb: 2 }}>Complaints by Department</Typography>
                  <Box sx={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '10%', pt: 4, borderBottom: '1px solid rgba(99, 179, 237, 0.12)', pb: 2 }}>
                    {[
                      { label: 'Traffic', height: '65%', color: '#3b82f6' },
                      { label: 'Infrastructure', height: '85%', color: '#f59e0b' },
                      { label: 'Municipal', height: '40%', color: '#8b5cf6' },
                    ].map((bar) => (
                      <Box key={bar.label} sx={{ flex: 1, height: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: 1.5 }}>
                        <Box sx={{ width: '100%', maxWidth: 60, height: bar.height, minHeight: '10%', borderRadius: '6px 6px 0 0', backgroundColor: bar.color }} />
                        <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#94a3b8', textAlign: 'center', whiteSpace: 'nowrap' }}>
                          {bar.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ p: 3, borderRadius: '14px', border: '1px solid rgba(99, 179, 237, 0.12)', backgroundColor: '#0f172a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 2 }}>
                  <Box sx={{ width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                    <WarningAmberRoundedIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#94a3b8' }}>Most Reported Issue</Typography>
                  <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>Potholes</Typography>
                </Box>

                <Box sx={{ p: 3, borderRadius: '14px', border: '1px solid rgba(99, 179, 237, 0.12)', backgroundColor: '#0f172a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 2 }}>
                  <Box sx={{ width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>
                    <TimerOutlinedIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#94a3b8' }}>Avg Resolution Time</Typography>
                  <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>Demo</Typography>
                </Box>
              </Box>
            </Box>

            <Box component="section" id="users">
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 3 }}>
                <SectionTitle icon={PeopleOutlineRoundedIcon}>User Management</SectionTitle>
                <Button variant="contained" sx={{ textTransform: 'none', borderRadius: '8px', px: 2.5, py: 1.25, fontSize: '13px', fontWeight: 600, backgroundColor: '#3b82f6' }}>
                  Add User
                </Button>
              </Box>

              <Box sx={{ display: { xs: 'none', lg: 'block' }, overflow: 'hidden', borderRadius: '14px', border: '1px solid rgba(99, 179, 237, 0.12)', backgroundColor: '#0f172a' }}>
                <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <Box component="thead" sx={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
                    <Box component="tr">
                      {['Name', 'Email', 'Role', 'Department', 'Status', 'Actions'].map((header) => (
                        <Box key={header} component="th" sx={{ p: '16px 24px', fontSize: '12px', fontWeight: 600, color: '#94a3b8', borderBottom: '1px solid rgba(99, 179, 237, 0.12)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          {header}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Box component="tbody">
                    {users.map((user, index) => (
                      <Box key={user.email} component="tr">
                        <Box component="td" sx={{ p: '16px 24px', borderBottom: index === users.length - 1 ? 'none' : '1px solid rgba(99, 179, 237, 0.12)' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Avatar sx={{ width: 36, height: 36, backgroundColor: 'rgba(99, 179, 237, 0.2)', color: '#3b82f6', border: '1px solid rgba(99, 179, 237, 0.12)', fontSize: '14px', fontWeight: 600 }}>
                              {user.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
                            </Avatar>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>{user.name}</Typography>
                          </Box>
                        </Box>
                        <Box component="td" sx={{ p: '16px 24px', color: '#94a3b8', borderBottom: index === users.length - 1 ? 'none' : '1px solid rgba(99, 179, 237, 0.12)' }}>{user.email}</Box>
                        <Box component="td" sx={{ p: '16px 24px', borderBottom: index === users.length - 1 ? 'none' : '1px solid rgba(99, 179, 237, 0.12)' }}><RoleBadge role={user.role} /></Box>
                        <Box component="td" sx={{ p: '16px 24px', borderBottom: index === users.length - 1 ? 'none' : '1px solid rgba(99, 179, 237, 0.12)' }}>{user.department}</Box>
                        <Box component="td" sx={{ p: '16px 24px', borderBottom: index === users.length - 1 ? 'none' : '1px solid rgba(99, 179, 237, 0.12)' }}><StatusBadge status={user.status} /></Box>
                        <Box component="td" sx={{ p: '16px 24px', borderBottom: index === users.length - 1 ? 'none' : '1px solid rgba(99, 179, 237, 0.12)' }}>
                          <Box sx={{ display: 'flex', gap: 0.5 }}>
                            <Button sx={{ minWidth: 36, width: 36, height: 36, p: 0, borderRadius: '6px', color: '#94a3b8' }}><EditOutlinedIcon sx={{ fontSize: 18 }} /></Button>
                            <Button sx={{ minWidth: 36, width: 36, height: 36, p: 0, borderRadius: '6px', color: '#94a3b8' }}>{user.status === 'Active' ? <BlockOutlinedIcon sx={{ fontSize: 18 }} /> : <TaskAltOutlinedIcon sx={{ fontSize: 18 }} />}</Button>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: { xs: 'grid', lg: 'none' }, gap: 2 }}>
                {users.map((user) => (
                  <Box key={user.email} sx={{ p: 2.5, borderRadius: '14px', border: '1px solid rgba(99, 179, 237, 0.12)', backgroundColor: '#0f172a', display: 'grid', gap: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar sx={{ width: 36, height: 36, backgroundColor: 'rgba(99, 179, 237, 0.2)', color: '#3b82f6', border: '1px solid rgba(99, 179, 237, 0.12)', fontSize: '14px', fontWeight: 600 }}>
                        {user.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
                      </Avatar>
                      <Box>
                        <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>{user.name}</Typography>
                        <Typography sx={{ fontSize: '13px', color: '#94a3b8' }}>{user.email}</Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      <RoleBadge role={user.role} />
                      <StatusBadge status={user.status} />
                    </Box>
                    <Typography sx={{ fontSize: '13px', color: '#94a3b8' }}>Department: <Box component="span" sx={{ color: '#f1f5f9' }}>{user.department}</Box></Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button variant="outlined" sx={{ flex: 1, textTransform: 'none', borderRadius: '8px', borderColor: 'rgba(99, 179, 237, 0.12)', color: '#94a3b8' }}>Edit</Button>
                      <Button variant="outlined" sx={{ flex: 1, textTransform: 'none', borderRadius: '8px', borderColor: 'rgba(99, 179, 237, 0.12)', color: '#94a3b8' }}>
                        {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                      </Button>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box component="section" id="departments">
              <Box sx={{ mb: 3 }}>
                <SectionTitle icon={ApartmentRoundedIcon}>Departments</SectionTitle>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }, gap: 3 }}>
                {departments.map((department) => {
                  const Icon = department.icon;
                  return (
                    <Box key={department.title} sx={{ p: 4, borderRadius: '14px', border: '1px solid rgba(99, 179, 237, 0.12)', backgroundColor: '#0f172a', display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ width: 56, height: 56, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: department.iconBg, color: department.iconColor }}>
                          <Icon sx={{ fontSize: 28 }} />
                        </Box>
                        <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>{department.title}</Typography>
                      </Box>

                      <Box sx={{ display: 'grid', gap: 2 }}>
                        {[
                          ['Assigned Officers', '—'],
                          ['Field Workers', '—'],
                          ['Open Complaints', '—'],
                        ].map(([label, value], index) => (
                          <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: '#94a3b8', borderBottom: index === 2 ? 'none' : '1px dashed rgba(255,255,255,0.05)', pb: index === 2 ? 0 : 1.5 }}>
                            <Typography sx={{ fontSize: '14px', color: '#94a3b8' }}>{label}</Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: 600, color: index === 2 ? department.openColor : '#f1f5f9' }}>{value}</Typography>
                          </Box>
                        ))}
                      </Box>

                      <Button variant="outlined" fullWidth sx={{ mt: 'auto', textTransform: 'none', borderRadius: '8px', borderColor: 'rgba(99, 179, 237, 0.12)', color: '#f1f5f9', fontWeight: 600 }}>
                        Manage Department
                      </Button>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

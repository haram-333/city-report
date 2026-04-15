import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Link,
  MenuItem,
  OutlinedInput,
  Select,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import PersonIcon from '@mui/icons-material/Person';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

const authTheme = createTheme({
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

const baseInputSx = {
  borderRadius: '10px',
  backgroundColor: '#111827',
  color: '#f1f5f9',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(99, 179, 237, 0.2)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(96, 165, 250, 0.32)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#3b82f6',
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#64748b',
    opacity: 1,
  },
  '& .MuiSvgIcon-root': {
    color: '#64748b',
  },
};

const demoRoleButtonSx = {
  py: 1.35,
  borderRadius: '10px',
  textTransform: 'none',
  fontSize: '14px',
  fontWeight: 600,
  color: '#94a3b8',
  borderColor: 'rgba(99, 179, 237, 0.2)',
  backgroundColor: 'rgba(15, 23, 42, 0.72)',
  '&:hover': {
    color: '#f1f5f9',
    borderColor: 'rgba(96, 165, 250, 0.32)',
    backgroundColor: 'rgba(59, 130, 246, 0.08)',
  },
};

function AuthField({
  label,
  placeholder,
  type = 'text',
  startAdornment,
  endAdornment,
  value,
  onChange,
}) {
  return (
    <FormControl fullWidth>
      <Typography
        component="label"
        sx={{
          display: 'block',
          fontSize: '13px',
          fontWeight: 500,
          color: '#94a3b8',
          marginBottom: '8px',
        }}
      >
        {label}
      </Typography>
      <OutlinedInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        sx={baseInputSx}
        startAdornment={
          startAdornment ? <InputAdornment position="start">{startAdornment}</InputAdornment> : undefined
        }
        endAdornment={
          endAdornment ? <InputAdornment position="end">{endAdornment}</InputAdornment> : undefined
        }
      />
    </FormControl>
  );
}

export default function Auth() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('signin');
  const [showDemoRoles, setShowDemoRoles] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [registerForm, setRegisterForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'citizen',
  });

  const tabPanelSx = useMemo(
    () => ({
      animation: 'authFormSwap 0.48s cubic-bezier(0.22, 1, 0.36, 1)',
      '@keyframes authFormSwap': {
        '0%': {
          opacity: 0,
          transform: 'translateY(12px) scale(0.985)',
        },
        '100%': {
          opacity: 1,
          transform: 'translateY(0) scale(1)',
        },
      },
    }),
    [],
  );

  return (
    <ThemeProvider theme={authTheme}>
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#080c14',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 3 },
          py: { xs: 5, md: 8 },
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(99, 179, 237, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 179, 237, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            width: { xs: 380, sm: 520, md: 600 },
            height: { xs: 380, sm: 520, md: 600 },
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(59,130,246,0) 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        <Box
          sx={{
            width: '100%',
            maxWidth: '440px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              backgroundColor: '#0f172a',
              border: '1px solid rgba(99, 179, 237, 0.12)',
              borderRadius: '14px',
              px: { xs: 2.5, sm: 4 },
              py: { xs: 3.5, sm: 5 },
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Box
                component="a"
                href="/"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#f1f5f9',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderRadius: '8px',
                    color: '#3b82f6',
                  }}
                >
                  <ShieldOutlinedIcon sx={{ fontSize: 20 }} />
                </Box>
                CityReport AI
              </Box>
              <Typography sx={{ fontSize: '14px', color: '#94a3b8' }}>
                Smart City Reporting System
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                position: 'relative',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderRadius: '9999px',
                p: '4px',
                mb: 4,
                border: '1px solid rgba(99, 179, 237, 0.12)',
                overflow: 'hidden',
              }}
            >
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  top: 4,
                  bottom: 4,
                  left: 4,
                  width: 'calc(50% - 4px)',
                  borderRadius: '9999px',
                  backgroundColor: '#3b82f6',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                  transform: tab === 'signin' ? 'translateX(0%)' : 'translateX(100%)',
                  transition: 'transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              />
              <Button
                type="button"
                fullWidth
                onClick={() => setTab('signin')}
                sx={{
                  minHeight: 'unset',
                  py: 1.25,
                  px: 1,
                  borderRadius: '9999px',
                  textTransform: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  position: 'relative',
                  zIndex: 1,
                  color: tab === 'signin' ? '#ffffff' : '#94a3b8',
                  transition: 'color 0.32s ease',
                }}
              >
                Sign In
              </Button>
              <Button
                type="button"
                fullWidth
                onClick={() => setTab('signup')}
                sx={{
                  minHeight: 'unset',
                  py: 1.25,
                  px: 1,
                  borderRadius: '9999px',
                  textTransform: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  position: 'relative',
                  zIndex: 1,
                  color: tab === 'signup' ? '#ffffff' : '#94a3b8',
                  transition: 'color 0.32s ease',
                }}
              >
                Create Account
              </Button>
            </Box>

            {tab === 'signin' ? (
              <Box key="signin" sx={tabPanelSx}>
                <Box sx={{ display: 'grid', gap: 2.5 }}>
                  <AuthField
                    label="Email Address"
                    placeholder="Enter your email"
                    type="email"
                    value={loginForm.email}
                    onChange={(event) => setLoginForm((prev) => ({ ...prev, email: event.target.value }))}
                    startAdornment={<EmailOutlinedIcon sx={{ fontSize: 18 }} />}
                  />

                  <AuthField
                    label="Password"
                    placeholder="Enter your password"
                    type={showLoginPassword ? 'text' : 'password'}
                    value={loginForm.password}
                    onChange={(event) => setLoginForm((prev) => ({ ...prev, password: event.target.value }))}
                    startAdornment={<LockOpenOutlinedIcon sx={{ fontSize: 18 }} />}
                    endAdornment={
                      <Box
                        component="button"
                        type="button"
                        onClick={() => setShowLoginPassword((prev) => !prev)}
                        aria-label={showLoginPassword ? 'Hide password' : 'Show password'}
                        sx={{
                          border: 0,
                          background: 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          p: 0,
                          color: '#64748b',
                        }}
                      >
                        {showLoginPassword ? <VisibilityOffOutlinedIcon sx={{ fontSize: 18 }} /> : <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />}
                      </Box>
                    }
                  />
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    justifyContent: 'space-between',
                    gap: 2,
                    mt: 3,
                    mb: 3,
                    flexDirection: { xs: 'column', sm: 'row' },
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={(event) => setRememberMe(event.target.checked)}
                        sx={{
                          color: 'rgba(99, 179, 237, 0.2)',
                          p: 0,
                          mr: 1,
                          '&.Mui-checked': {
                            color: '#3b82f6',
                          },
                        }}
                      />
                    }
                    label={<Typography sx={{ fontSize: '13px', color: '#94a3b8' }}>Remember me</Typography>}
                    sx={{ m: 0 }}
                  />

                  <Link href="#" underline="none" sx={{ fontSize: '13px', color: '#3b82f6', fontWeight: 500 }}>
                    Forgot password?
                  </Link>
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate('/citizen/dashboard')}
                  sx={{
                    py: 1.75,
                    mb: 3,
                    borderRadius: '10px',
                    textTransform: 'none',
                    fontSize: '15px',
                    fontWeight: 600,
                    backgroundColor: '#3b82f6',
                    '&:hover': {
                      backgroundColor: '#2563eb',
                    },
                  }}
                >
                  Sign In
                </Button>

                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<RocketLaunchOutlinedIcon sx={{ fontSize: 18 }} />}
                  onClick={() => setShowDemoRoles((prev) => !prev)}
                  sx={{
                    py: 1.5,
                    borderRadius: '10px',
                    textTransform: 'none',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#f1f5f9',
                    borderColor: 'rgba(99, 179, 237, 0.2)',
                    backgroundColor: showDemoRoles ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
                    '&:hover': {
                      borderColor: 'rgba(96, 165, 250, 0.32)',
                      backgroundColor: 'rgba(59, 130, 246, 0.08)',
                    },
                  }}
                >
                  Demo Mode
                </Button>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateRows: showDemoRoles ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.36s cubic-bezier(0.22, 1, 0.36, 1)',
                    mt: showDemoRoles ? 2 : 0,
                  }}
                >
                  <Box sx={{ overflow: 'hidden' }}>
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                        gap: 1.5,
                        pt: 0.5,
                      }}
                    >
                      <Button
                        variant="outlined"
                        onClick={() => navigate('/citizen/dashboard')}
                        sx={demoRoleButtonSx}
                      >
                        Citizen
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={() => navigate('/officer/dashboard')}
                        sx={demoRoleButtonSx}
                      >
                        Officer
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={() => navigate('/worker/dashboard')}
                        sx={demoRoleButtonSx}
                      >
                        Worker
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={() => navigate('/admin/dashboard')}
                        sx={demoRoleButtonSx}
                      >
                        Admin
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box key="signup" sx={tabPanelSx}>
                <Box sx={{ display: 'grid', gap: 2.5 }}>
                  <AuthField
                    label="Full Name"
                    placeholder="John Doe"
                    value={registerForm.fullName}
                    onChange={(event) => setRegisterForm((prev) => ({ ...prev, fullName: event.target.value }))}
                    startAdornment={<PersonIcon sx={{ fontSize: 18 }} />}
                  />

                  <AuthField
                    label="Email Address"
                    placeholder="john@example.com"
                    type="email"
                    value={registerForm.email}
                    onChange={(event) => setRegisterForm((prev) => ({ ...prev, email: event.target.value }))}
                    startAdornment={<EmailOutlinedIcon sx={{ fontSize: 18 }} />}
                  />

                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                      gap: { xs: 2.5, sm: 2 },
                    }}
                  >
                    <AuthField
                      label="Password"
                      placeholder="Create"
                      type={showRegisterPassword ? 'text' : 'password'}
                      value={registerForm.password}
                      onChange={(event) => setRegisterForm((prev) => ({ ...prev, password: event.target.value }))}
                      startAdornment={<LockOpenOutlinedIcon sx={{ fontSize: 18 }} />}
                      endAdornment={
                        <Box
                          component="button"
                          type="button"
                          onClick={() => setShowRegisterPassword((prev) => !prev)}
                          aria-label={showRegisterPassword ? 'Hide password' : 'Show password'}
                          sx={{
                            border: 0,
                            background: 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            p: 0,
                            color: '#64748b',
                          }}
                        >
                          {showRegisterPassword ? <VisibilityOffOutlinedIcon sx={{ fontSize: 18 }} /> : <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />}
                        </Box>
                      }
                    />

                    <AuthField
                      label="Confirm"
                      placeholder="Confirm"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={registerForm.confirmPassword}
                      onChange={(event) => setRegisterForm((prev) => ({ ...prev, confirmPassword: event.target.value }))}
                      startAdornment={<LockOpenOutlinedIcon sx={{ fontSize: 18 }} />}
                      endAdornment={
                        <Box
                          component="button"
                          type="button"
                          onClick={() => setShowConfirmPassword((prev) => !prev)}
                          aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                          sx={{
                            border: 0,
                            background: 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            p: 0,
                            color: '#64748b',
                          }}
                        >
                          {showConfirmPassword ? <VisibilityOffOutlinedIcon sx={{ fontSize: 18 }} /> : <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />}
                        </Box>
                      }
                    />
                  </Box>

                  <FormControl fullWidth>
                    <Typography
                      component="label"
                      sx={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: '#94a3b8',
                        marginBottom: '8px',
                      }}
                    >
                      Role Selection
                    </Typography>
                    <Select
                      value={registerForm.role}
                      onChange={(event) => setRegisterForm((prev) => ({ ...prev, role: event.target.value }))}
                      IconComponent={KeyboardArrowDownRoundedIcon}
                      input={
                        <OutlinedInput
                          startAdornment={
                            <InputAdornment position="start">
                              <BadgeOutlinedIcon sx={{ fontSize: 18, color: '#64748b' }} />
                            </InputAdornment>
                          }
                          sx={baseInputSx}
                        />
                      }
                      sx={{
                        '& .MuiSelect-select': {
                          py: '12px',
                        },
                      }}
                    >
                      <MenuItem value="citizen">Citizen</MenuItem>
                      <MenuItem value="officer">Department Officer</MenuItem>
                      <MenuItem value="worker">Field Worker</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    py: 1.75,
                    mt: 3,
                    mb: 3,
                    borderRadius: '10px',
                    textTransform: 'none',
                    fontSize: '15px',
                    fontWeight: 600,
                    backgroundColor: '#3b82f6',
                    '&:hover': {
                      backgroundColor: '#2563eb',
                    },
                  }}
                >
                  Create Account
                </Button>
              </Box>
            )}

            <Typography sx={{ textAlign: 'center', fontSize: '12px', color: '#64748b' }}>
              By continuing you agree to the Terms of Service and Privacy Policy.
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

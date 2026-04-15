import React from 'react';
import { Box } from '@mui/material';
import AnimatedBackground from '../components/landing/AnimatedBackground';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import StatsBar from '../components/landing/StatsBar';
import HowItWorks from '../components/landing/HowItWorks';
import Features from '../components/landing/Features';
import Departments from '../components/landing/Departments';
import PriorityTable from '../components/landing/PriorityTable';
import Roles from '../components/landing/Roles';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
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

export default function Landing() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: '100%', backgroundColor: '#080c14', minHeight: '100vh' }}>
        <AnimatedBackground />

        {/* Content */}
        <Navbar />
        <Hero />
        <StatsBar />
        <HowItWorks />
        <Features />
        <Departments />
        <PriorityTable />
        <Roles />
        <CTA />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

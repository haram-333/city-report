import React from 'react';
import { Box, Typography } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ScannerIcon from '@mui/icons-material/Scanner';
import RouteIcon from '@mui/icons-material/Route';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    number: '01',
    icon: PhotoCameraIcon,
    title: 'Upload Photo',
    desc: 'Citizen captures and uploads an image of the urban issue.',
  },
  {
    number: '02',
    icon: ScannerIcon,
    title: 'AI Detection',
    desc: 'YOLOv8 model processes image to identify specific problem type.',
  },
  {
    number: '03',
    icon: RouteIcon,
    title: 'Priority & Routing',
    desc: 'System sets severity and routes to correct municipal department.',
  },
  {
    number: '04',
    icon: VerifiedUserIcon,
    title: 'Officer Assignment',
    desc: 'Department officer assigns field workers to handle the task.',
  },
  {
    number: '05',
    icon: CheckCircleIcon,
    title: 'Resolved',
    desc: 'Worker uploads proof of fix, closing the issue loop.',
  },
];

export default function HowItWorks() {
  return (
    <Box id="how-it-works" sx={{ width: '100%', overflow: 'hidden', padding: { xs: '60px 0', md: '100px 0' }, px: { xs: 2, md: 6 }, position: 'relative', zIndex: 1 }}>
      <Box>
        <ScrollReveal sx={{ marginBottom: { xs: '40px', md: '64px' } }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '28px', md: '36px' },
              fontWeight: 800,
              textAlign: 'center',
              color: '#f1f5f9',
              letterSpacing: '-0.01em',
            }}
          >
            How It Works
          </Typography>
        </ScrollReveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' },
            gap: { xs: '20px', md: '24px' },
          }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'flex-start' },
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      color: '#60a5fa',
                      fontSize: { xs: '10px', md: '12px' },
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      marginBottom: { xs: '16px', md: '24px' },
                    }}
                  >
                    {step.number}
                  </Box>

                  <Box
                    sx={{
                      width: { xs: '48px', md: '56px' },
                      height: { xs: '48px', md: '56px' },
                      backgroundColor: '#0f172a',
                      border: '1px solid rgba(99, 179, 237, 0.12)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: { xs: '12px', md: '20px' },
                      transition: 'transform 0.3s ease, border-color 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        borderColor: 'rgba(96, 165, 250, 0.28)',
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: { xs: '20px', md: '24px' }, color: '#f1f5f9' }} />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: '14px', md: '16px' },
                      fontWeight: 600,
                      marginBottom: '12px',
                      color: '#f1f5f9',
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '12px', md: '14px' },
                      color: '#64748b',
                      lineHeight: 1.5,
                    }}
                  >
                    {step.desc}
                  </Typography>
                </Box>
              </ScrollReveal>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

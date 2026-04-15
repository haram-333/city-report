import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: SmartToyOutlinedIcon,
    title: 'YOLO Detection',
    desc: 'State-of-the-art object detection model trained specifically on urban infrastructure datasets for high accuracy.',
    bgColor: 'rgba(59, 130, 246, 0.1)',
    iconColor: '#60a5fa',
  },
  {
    icon: ShieldOutlinedIcon,
    title: 'Duplicate Detection',
    desc: 'Prevents system spam by merging identical reports based on tight geographical radius and image similarity.',
    bgColor: 'rgba(245, 158, 11, 0.1)',
    iconColor: '#fbbf24',
  },
  {
    icon: PlaceOutlinedIcon,
    title: 'GPS Routing',
    desc: 'Automatically extracts EXIF location data from uploads or allows pin-dropping for exact spatial mapping.',
    bgColor: 'rgba(34, 197, 94, 0.1)',
    iconColor: '#4ade80',
  },
  {
    icon: TuneOutlinedIcon,
    title: 'Confidence Threshold',
    desc: 'Customizable minimum AI confidence score ensures false positives are flagged for manual administrative review.',
    bgColor: 'rgba(139, 92, 246, 0.1)',
    iconColor: '#a78bfa',
  },
  {
    icon: PriorityHighOutlinedIcon,
    title: 'Priority System',
    desc: 'Hardcoded logic escalates critical issues (like open manholes) above low-priority ones (like graffiti).',
    bgColor: 'rgba(239, 68, 68, 0.1)',
    iconColor: '#f87171',
  },
  {
    icon: InsightsOutlinedIcon,
    title: 'Role Dashboards',
    desc: 'Dedicated, authenticated portals showing customized metrics and actionable items per user role.',
    bgColor: 'rgba(6, 182, 212, 0.1)',
    iconColor: '#22d3ee',
  },
];

export default function Features() {
  return (
    <Box id="features" sx={{ width: '100%', overflow: 'hidden', padding: { xs: '60px 0', md: '100px 0' }, px: { xs: 2, md: 6 }, position: 'relative', zIndex: 1 }}>
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
            System Capabilities
          </Typography>
        </ScrollReveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '20px', md: '24px' },
          }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <ScrollReveal key={idx} delay={idx * 0.07}>
                <Card
                  sx={{
                    backgroundColor: '#0f172a',
                    border: '1px solid rgba(99, 179, 237, 0.12)',
                    borderRadius: '12px',
                    padding: { xs: '24px', md: '32px' },
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: 'rgba(96, 165, 250, 0.24)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '44px', md: '48px' },
                      height: { xs: '44px', md: '48px' },
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: { xs: '16px', md: '20px' },
                      backgroundColor: feature.bgColor,
                    }}
                  >
                    <Icon sx={{ fontSize: { xs: '22px', md: '24px' }, color: feature.iconColor }} />
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: '16px', md: '18px' },
                      fontWeight: 600,
                      marginBottom: '12px',
                      color: '#f1f5f9',
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '13px', md: '14px' },
                      color: '#94a3b8',
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.desc}
                  </Typography>
                </Card>
              </ScrollReveal>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

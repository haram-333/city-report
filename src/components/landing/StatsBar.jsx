import React from 'react';
import { Box } from '@mui/material';
import Groups3Icon from '@mui/icons-material/Groups3';
import BusinessIcon from '@mui/icons-material/Business';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TuneIcon from '@mui/icons-material/Tune';
import ScrollReveal from './ScrollReveal';

const stats = [
  { icon: Groups3Icon, label: '4+ User Roles' },
  { icon: BusinessIcon, label: '3+ Departments' },
  { icon: LocalOfferIcon, label: '11+ Issue Categories' },
  { icon: AutoAwesomeIcon, label: 'YOLOv8 AI Model' },
  { icon: TuneIcon, label: '0.75+ Confidence Threshold' },
];

export default function StatsBar() {
  return (
    <Box
      sx={{
        width: '100%',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        backgroundColor: 'rgba(13, 18, 32, 0.5)',
        padding: '32px 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'space-between' },
            flexWrap: 'wrap',
            gap: { xs: '16px', md: '24px' },
          }}
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <ScrollReveal key={idx} delay={idx * 0.06} distance={20}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: { xs: '13px', md: '15px' },
                    fontWeight: 600,
                    color: '#f1f5f9',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <Icon sx={{ fontSize: { xs: '18px', md: '20px' }, color: '#3b82f6' }} />
                  {stat.label}
                </Box>
              </ScrollReveal>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

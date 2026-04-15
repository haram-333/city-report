import React from 'react';
import { Box, Typography, Card, List, ListItem } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import ScrollReveal from './ScrollReveal';

const roles = [
  {
    icon: PersonIcon,
    name: 'Citizen',
    items: ['Submit new complaints with images', 'Track personal issue status', 'View public city-wide map'],
  },
  {
    icon: AdminPanelSettingsOutlinedIcon,
    name: 'Officer',
    items: [
      'Review AI-routed department issues',
      'Assign tasks to field workers',
      'Verify resolved complaints',
    ],
  },
  {
    icon: EngineeringOutlinedIcon,
    name: 'Worker',
    items: [
      'Receive job assignments via mobile',
      'Update status to "In Progress"',
      'Upload photographic proof of fix',
    ],
  },
  {
    icon: SettingsSuggestOutlinedIcon,
    name: 'Admin',
    items: [
      'Manage all users and departments',
      'Review low-confidence AI flags',
      'Access overarching analytics',
    ],
  },
];

export default function Roles() {
  return (
    <Box id="roles" sx={{ width: '100%', overflow: 'hidden', padding: { xs: '60px 0', md: '100px 0' }, px: { xs: 2, md: 6 }, position: 'relative', zIndex: 1 }}>
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
            Portal Access Levels
          </Typography>
        </ScrollReveal>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: '20px', md: '24px' },
          }}
        >
          {roles.map((role, idx) => {
            const Icon = role.icon;

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
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '20px',
                      paddingBottom: '16px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <Icon sx={{ fontSize: { xs: '20px', md: '24px' }, color: '#60a5fa' }} />
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '16px', md: '18px' },
                        fontWeight: 700,
                        color: '#f1f5f9',
                      }}
                    >
                      {role.name}
                    </Typography>
                  </Box>

                  <List sx={{ padding: 0 }}>
                    {role.items.map((item, itemIdx) => (
                      <ListItem key={itemIdx} sx={{ padding: '12px 0', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#3b82f6',
                            marginTop: '8px',
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: '13px',
                            color: '#94a3b8',
                            lineHeight: 1.5,
                          }}
                        >
                          {item}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </ScrollReveal>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

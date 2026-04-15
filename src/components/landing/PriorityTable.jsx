import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import ScrollReveal from './ScrollReveal';

const priorityData = [
  { issue: 'Open Manhole', department: 'Municipal', priority: 'Critical', color: '#ef4444' },
  { issue: 'Fallen Streetlight', department: 'Infrastructure', priority: 'High', color: '#f59e0b' },
  { issue: 'Large Pothole', department: 'Infrastructure', priority: 'High', color: '#f59e0b' },
  { issue: 'Broken Traffic Signal', department: 'Traffic', priority: 'Medium', color: '#3b82f6' },
  { issue: 'Garbage Accumulation', department: 'Municipal', priority: 'Low', color: '#22c55e' },
];

const getPriorityBgColor = (priority) => {
  switch (priority) {
    case 'Critical':
      return 'rgba(239, 68, 68, 0.1)';
    case 'High':
      return 'rgba(245, 158, 11, 0.1)';
    case 'Medium':
      return 'rgba(59, 130, 246, 0.1)';
    case 'Low':
      return 'rgba(34, 197, 94, 0.1)';
    default:
      return 'transparent';
  }
};

export default function PriorityTable() {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden', padding: { xs: '60px 0', md: '100px 0' }, px: { xs: 2, md: 6 }, position: 'relative', zIndex: 1 }}>
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
            AI Priority Matrix Logic
          </Typography>
        </ScrollReveal>

        <ScrollReveal>
          <Box
            sx={{
              maxWidth: { xs: '100%', md: '800px' },
              margin: '0 auto',
              backgroundColor: '#0f172a',
              border: '1px solid rgba(99, 179, 237, 0.12)',
              borderRadius: { xs: '8px', md: '12px' },
              overflow: 'auto',
            }}
          >
            <Table sx={{ width: '100%' }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                  <TableCell
                    sx={{
                      padding: { xs: '12px 16px', md: '20px 24px' },
                      fontSize: { xs: '10px', md: '12px' },
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#64748b',
                      borderBottom: '1px solid rgba(99, 179, 237, 0.12)',
                    }}
                  >
                    Issue Type Detected
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: { xs: '12px 16px', md: '20px 24px' },
                      fontSize: { xs: '10px', md: '12px' },
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#64748b',
                      borderBottom: '1px solid rgba(99, 179, 237, 0.12)',
                    }}
                  >
                    Assigned Department
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: { xs: '12px 16px', md: '20px 24px' },
                      fontSize: { xs: '10px', md: '12px' },
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#64748b',
                      borderBottom: '1px solid rgba(99, 179, 237, 0.12)',
                    }}
                  >
                    System Priority
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {priorityData.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell
                      sx={{
                        padding: { xs: '12px 16px', md: '20px 24px' },
                        fontSize: { xs: '12px', md: '14px' },
                        fontWeight: 500,
                        color: '#f1f5f9',
                        borderBottom:
                          idx === priorityData.length - 1
                            ? 'none'
                            : '1px solid rgba(255, 255, 255, 0.03)',
                      }}
                    >
                      {row.issue}
                    </TableCell>
                    <TableCell
                      sx={{
                        padding: { xs: '12px 16px', md: '20px 24px' },
                        fontSize: { xs: '12px', md: '14px' },
                        fontWeight: 500,
                        color: '#94a3b8',
                        borderBottom:
                          idx === priorityData.length - 1
                            ? 'none'
                            : '1px solid rgba(255, 255, 255, 0.03)',
                      }}
                    >
                      {row.department}
                    </TableCell>
                    <TableCell
                      sx={{
                        padding: { xs: '12px 16px', md: '20px 24px' },
                        fontSize: { xs: '12px', md: '14px' },
                        fontWeight: 500,
                        borderBottom:
                          idx === priorityData.length - 1
                            ? 'none'
                            : '1px solid rgba(255, 255, 255, 0.03)',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '4px 12px',
                          borderRadius: '9999px',
                          fontSize: '12px',
                          fontWeight: 700,
                          backgroundColor: getPriorityBgColor(row.priority),
                          color: row.color,
                        }}
                      >
                        {row.priority}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </ScrollReveal>
      </Box>
    </Box>
  );
}

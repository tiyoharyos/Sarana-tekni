import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const Dashboard = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Dashboard
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6">Sales Statistics</Typography>
          <Typography paragraph>Content for sales statistics.</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6">Inventory Management</Typography>
          <Typography paragraph>Content for inventory management.</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper style={{ padding: 16 }}>
          <Typography variant="h6">Customer Support</Typography>
          <Typography paragraph>Content for customer support.</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
);

export default Dashboard;

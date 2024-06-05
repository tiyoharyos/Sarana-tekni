import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const Home = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Welcome to PT. Sarana Teknik
    </Typography>
    <Typography paragraph>
      PT. Sarana Teknik is a leading distributor of mechanical and electrical parts for industry, mining, and oil & gas companies.
    </Typography>
    <Typography variant="h5" gutterBottom>
      Our Products
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper style={{ padding: 16, textAlign: 'center' }}>
          <img src="/images/martin.png" alt="Martin" style={{ maxHeight: 100, marginBottom: 8 }} />
          <Typography>Martin</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper style={{ padding: 16, textAlign: 'center' }}>
          <img src="/images/optibelt.png" alt="Optibelt" style={{ maxHeight: 100, marginBottom: 8 }} />
          <Typography>Optibelt</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper style={{ padding: 16, textAlign: 'center' }}>
          <img src="/images/fenner.png" alt="Fenner" style={{ maxHeight: 100, marginBottom: 8 }} />
          <Typography>Fenner</Typography>
        </Paper>
      </Grid>
      {/* Add more products as necessary */}
    </Grid>
  </Container>
);

export default Home;

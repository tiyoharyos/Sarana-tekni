import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const Footer = () => (
  <footer style={{ backgroundColor: '#282c34', color: 'white', padding: '20px 0' }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography>Marketing Office: Jl. Muara Baru No. 3-ABC, Jakarta</Typography>
          <Typography>Phone: (021) 690-7060</Typography>
          <Typography>Email: saranateknik@gmail.com</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Our Locations</Typography>
          <ul>
            <li>Jl. Muara Baru No. 3-ABC, Jakarta</li>
            <li>Komplek Harco Glodok, Jakarta</li>
            <li>Jl. Pasirkoja No. 90, Bandung</li>
            <li>Ruko Perkantoran, Tangerang</li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  </footer>
);

export default Footer;

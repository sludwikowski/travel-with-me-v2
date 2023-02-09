import React from 'react';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

function Banner() {
  return (
    <Container maxWidth="xl">
      <Paper
        variant="outlined"
        elevation={8}
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 2,
          mt: 9,
          height: 350,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${'https://pixabay.com/get/gf31f311262809502986b83829fc3447f55721446d26ab73c40645295cee659f4bde349ae0abe276b30e31f841d4d8032.jpg'})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        <img
          style={{ display: 'none' }}
          src="https://pixabay.com/get/gf31f311262809502986b83829fc3447f55721446d26ab73c40645295cee659f4bde349ae0abe276b30e31f841d4d8032.jpg"
          alt="alt"
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 16 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                @sludwikowski travels
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                BEST OFFERS ALL THE TIME!!
              </Typography>{' '}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Banner;

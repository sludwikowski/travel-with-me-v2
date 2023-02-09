import React from 'react';
import { Typography, Stack, Container } from '@mui/material';

function Home() {
  return (
    <Container sx={{ py: 2, position: 'relative' }}>
      <Stack gap={1} my={2}>
        <Typography textAlign="center" variant="h2">
          sludwikowski Travels
        </Typography>
        <Typography textAlign="center" variant="subtitle1">
          HI world
        </Typography>
      </Stack>
    </Container>
  );
}

export default Home;

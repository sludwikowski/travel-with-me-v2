import * as React from 'react';

import { Box, CircularProgress, Typography } from '@mui/material';

function Loader(props) {
  const { message } = props;

  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CircularProgress color="success" size={70} />
        {message ? <Typography variant="h6">{message}</Typography> : null}
      </Box>
    </Box>
  );
}

export default Loader;

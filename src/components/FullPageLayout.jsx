import * as React from 'react';

import { Box } from '@mui/material';

function FullPageLayout(props) {
  const { sx, children } = props;
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'white',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

export default FullPageLayout;

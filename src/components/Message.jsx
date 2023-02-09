import * as React from 'react';

import { Box, Button, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function Message(props) {
  const {
    sx,
    message,
    buttonLabel = 'GO BACK',
    iconVariant = 'info',
    onButtonClick,
  } = props;
  return (
    <Box
      sx={{
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ...sx,
        }}
      >
        {iconVariant === 'info' ? (
          <InfoOutlinedIcon sx={{ fontSize: 100 }} />
        ) : iconVariant === 'error' ? (
          <ErrorOutlineIcon sx={{ fontSize: 100 }} />
        ) : null}
        <Typography variant="h5" mb="10px">
          {message}
        </Typography>
        <Button variant="contained" color="secondary" onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      </Box>
    </Box>
  );
}

export default Message;

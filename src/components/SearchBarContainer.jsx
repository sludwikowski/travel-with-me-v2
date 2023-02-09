import * as React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@mui/material';

export function SearchBarContainer(props) {
  const { sx, children } = props;
  return (
    <Container
      maxWidth="xl"
      sx={{
        // p: '2px 4px',
        m: '25px auto',
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}
    >
      {children}
    </Container>
  );
}

SearchBarContainer.propTypes = {
  sx: PropTypes.object,
  children: PropTypes.node,
};
export default SearchBarContainer;

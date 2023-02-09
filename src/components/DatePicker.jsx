import React, { useState } from 'react';

import { Box } from '@mui/material';

import { DateRangePicker } from 'react-date-range';

import { addDays } from 'date-fns';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function DatePicker() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', pt: '55px', pb: '20px' }}
    >
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
    </Box>
  );
}

export default DatePicker;

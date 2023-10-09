import React from 'react';
import { Stack } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="grey" 
        ariaLabel="three-dots-loading"
        visible={true}
    />
  </Stack>
);

export default Loader;
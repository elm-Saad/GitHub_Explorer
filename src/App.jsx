import React from 'react'
import { Box } from '@mui/material';

import Home from './page/Home';
import Navbar from './components/Navbar';

export default function App() {
  return (
  <Box width="400px" sx={{ width: { xl: '1490px' } }} m="auto" className='bg-gray-100 bg-opacity-50 min-h-screen'>
    <Navbar />
    <Home />
  </Box>
  )
}


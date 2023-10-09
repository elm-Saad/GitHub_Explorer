import React from 'react'
import { Box } from '@mui/material';

import Home from './page/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
  <Box width="400px" sx={{ width: { xl: '1490px' } }} m="auto" className='bg-gray-100 min-h-screen'>
    <Navbar />
    <Home />
    <Footer />
  </Box>
  )
}


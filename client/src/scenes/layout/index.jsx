import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import { Box, useMediaQuery } from '@mui/material';

const Layout = () => {
  return (
    <Box width="100%" height="100%">
        <Box>
            <Navbar />
            <Outlet />
        </Box>
    </Box>
  )
}

export default Layout
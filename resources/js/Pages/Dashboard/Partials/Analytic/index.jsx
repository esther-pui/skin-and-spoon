import React from 'react';
import { Box,Typography } from '@mui/material';
import Header from '../../../../components/Header';
import Sidebar from '../../../../components/Sidebar';
import Footer from '../../../../components/Footer';

function Analytic({ handleDrawerToggle, mobileOpen, setFilter, drawerWidth}) {

    return (
        <Box sx={{ display: 'flex' }}>
            <Header handleDrawerToggle={handleDrawerToggle} />
            <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} setFilter={setFilter} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    marginLeft: { sm: `${drawerWidth}px` },
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    marginTop: '64px',
                }}
                >
                <Typography variant="h4">Analytic</Typography>
                <Typography variant="body1">Show summaries metric data here.</Typography>
            </Box>
            <Footer />
        </Box>
    );
}

export default Analytic;
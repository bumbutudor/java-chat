import React from 'react';
import {Box, Button, CircularProgress, Container, Grid} from "@mui/material";

const Loader = () => {
    return (
        <Container>
            <Grid container
                  justifyContent={"center"}
                  alignItems={"center"}
                  style={{height: window.innerHeight - 50}}
            >
                <Grid
                    style={{width: 700}}
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Loader;
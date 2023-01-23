import React, {useContext} from 'react';
import {Avatar, Box, Button, Container, Grid, TextField} from "@mui/material";
import {Context} from "../index";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const Login = () => {
    const {auth} = useContext(Context);

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth, provider);
        console.log(user);
    }

    return (
        <Container>
            <Grid container
                  justifyContent={"center"}
                  alignItems={"center"}
                  style={{height: window.innerHeight - 50}}
            >
                <Grid style={{width: 700}}>
                    <Box p={5}>
                        <Grid container direction={"column"} block>
                            <Button onClick={handleLogin} style={{ fontSize: '44px', textTransform: 'none' }}>Login with Google</Button>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    );
};

export default Login;
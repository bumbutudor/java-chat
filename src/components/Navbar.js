import React, {useContext} from 'react';
import {AppBar, Box, Button, Grid, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/constants";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth)
    return (
        <Box sx={{ flexGrow: 1 }}>
            {user  ?
                <AppBar color={"transparent"} elevation={0} position={"static"}>
                    <Toolbar>
                        <Grid container justifyContent={"flex-end"}>
                            <NavLink to={CHAT_ROUTE}>
                                <Button onClick={() => auth.signOut()} color={"inherit"}>Logout</Button>
                            </NavLink>
                        </Grid>
                    </Toolbar>
                </AppBar>
                :
                <></>
            }
        </Box>
    );
};

export default Navbar;
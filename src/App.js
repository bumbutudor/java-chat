import './App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import {useContext} from "react";
import Loader from "./components/Loader";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    const {auth} = useContext(Context);
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loader/>
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

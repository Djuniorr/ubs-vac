import React from "react";
import GlobalStyle from "./styles/global";
import RoutesApp from "./routes/index";
import { AuthProvider } from "./contexts/auth";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <AuthProvider>
            <RoutesApp />
            <GlobalStyle />
            <ToastContainer />
        </AuthProvider>
    )
};

export default App;
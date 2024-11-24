import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import { theme } from "./theme";
import { Layout } from "./components/core/layout";
import { Home } from "./pages/home";
import { Professions } from "./pages/professions";

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route element={<Home />} index />
                        <Route path="/professions" element={<Professions />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

import Box from "@mui/material/Box";
import { Header } from "./header";
import { Outlet } from "react-router";
import { useState } from "react";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack } from "@mui/system";
import { underConstructionText } from "../../constants";

export function Layout() {
    const [pass, setPass] = useState(localStorage.getItem("pass"));
    const [text, setText] = useState("");

    const handleUpdatePass = () => {
        localStorage.setItem("pass", text);
        setPass(text);
    };
    const correctPass = pass === "testing";

    return correctPass ? (
        <Box
            width="100%"
            height="100%"
            bgcolor="background.default"
            overflow="hidden"
        >
            <Header />
            <Outlet />
        </Box>
    ) : (
        <Stack
            direction="column"
            width="100%"
            height="100%"
            bgcolor="background.default"
            alignItems="center"
        >
            <Typography variant="h2">🛠️</Typography>
            <Typography width={300}>{underConstructionText}</Typography>
            <Stack direction="row" width={300}>
                <IconButton
                    href="https://www.linkedin.com/in/skylermoosman/"
                    target="_blank"
                >
                    <LinkedInIcon />
                </IconButton>
            </Stack>
            <Stack direction="row" paddingTop={5}>
                <TextField
                    label="Password"
                    variant="outlined"
                    onChange={(e) => setText(e.target.value)}
                />
                <Button
                    variant="contained"
                    sx={{ marginLeft: 2 }}
                    onClick={handleUpdatePass}
                >
                    Login
                </Button>
            </Stack>
        </Stack>
    );
}

import {
    AppBar,
    Box,
    Button,
    Container,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

type PageItem = {
    name: string;
    slug: string;
};
const pages: PageItem[] = [
    { name: "Home", slug: "" },
    { name: "WebGL", slug: "professions" },
];

export function Header() {
    const nav = useNavigate();
    return (
        <AppBar position="static" sx={{ bgcolor: "background.default" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <Stack direction="column" justifyContent="center">
                            <Typography variant="h5">Skyler Moosman</Typography>
                            <Typography>Software Engineer</Typography>
                        </Stack>
                        <Stack direction="row" marginLeft="auto">
                            {pages.map((p) => (
                                <Button
                                    key={p.name}
                                    sx={{ my: 2, display: "block" }}
                                    onClick={() => nav(`/${p.slug}`)}
                                >
                                    <Typography>{p.name}</Typography>
                                </Button>
                            ))}
                        </Stack>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

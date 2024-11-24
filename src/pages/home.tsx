import { Grid } from "@mui/system";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Stack,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

type ProjectItem = {
    name: string;
    slug?: string;
    url?: string;
};
const projects: ProjectItem[] = [
    {
        name: "Allen Brain Cell Atlas",
        url: "https://knowledge.brain-map.org/abcatlas",
    },
    { name: "Professions", slug: "professions" },
];

export function Home() {
    const nav = useNavigate();
    return (
        <Stack
            direction="column"
            width="100%"
            height="100%"
            alignItems="center"
        >
            <Typography variant="h3">Projects</Typography>
            <Grid container spacing={2}>
                {projects.map((p) => (
                    <Grid key={p.name}>
                        <Card sx={{ minWidth: 250 }}>
                            <CardContent>
                                <Typography variant="h5">{p.name}</Typography>
                            </CardContent>
                            <CardActions>
                                {p?.slug && (
                                    <Button onClick={() => nav(`/${p.slug}`)}>
                                        View
                                    </Button>
                                )}
                                {p?.url && (
                                    <Button href={p.url} target="_blank">
                                        View
                                    </Button>
                                )}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}

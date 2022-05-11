import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
    menuButton: { margin: theme.spacing(1) },
    title: { flexGrow: 1 },
    appBar: { backgroundColor: '#240202' },
    link: { color: 'white', textDecoration: 'none' }

}))


export const Header = () => {

    const classes = useStyles()
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon color="inherit"/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>

                        <Link to={'/'} className={classes.link}>
                            Home
                        </Link>
                        
                    </Typography>

                    <Box mr={2}>
                        <Button color="inherit" variant="outlined">Log In</Button>
                    </Box>
                    <Button color="secondary" variant="contained">Sign Up</Button>
                </Toolbar>
            </Container>
        </AppBar>
        // <header><h2>Header</h2></header>
    )
}
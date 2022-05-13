import { AppBar, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
    menuButton: { margin: theme.spacing(1) },
    title: { flexGrow: 1 },
    appBar: { backgroundColor: '#240202' },
    link: { color: '#fff', textDecoration: 'none' },
    modal: { color: '#fff', backgroundColor: '#000' },
    modalContent: { color: '#fff', backgroundColor: '#240202' },
    modalText: { color: '#fff' },
    modalField: { backgroundColor: '#fff' },
}))


export const Header = () => {

    const classes = useStyles()

    const [isLoginOpen, setLoginOpen] = useState(false);

    const handleLoginClick = () => setLoginOpen(true);
    const handleLoginCloseClick = () => setLoginOpen(false);



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
                        <Button color="inherit" variant="outlined" onClick={handleLoginClick}>Log In</Button>
                        <Dialog open={isLoginOpen} onClose={handleLoginCloseClick} aria-labelledby={'form-login-modal'} >
                            <DialogTitle id="form-login-modal"  className={classes.modal}> Log In </DialogTitle>
                            <DialogContent className={classes.modalContent}>
                                <DialogContentText className={classes.modalText}> Enter Email and Password </DialogContentText>
                                <TextField 
                                    autoFocus 
                                    margin="dense"
                                    id="email"
                                    type={'email'}
                                    fullWidth
                                    placeholder="Your Email"
                                    className={classes.modalField}
                                    
                                />
                                <TextField 
                                    margin="dense"
                                    id="password"
                                    type={'password'}
                                    fullWidth
                                    placeholder="Your Password"
                                    className={classes.modalField}

                                />
                            </DialogContent>
                            <DialogActions  className={classes.modal}>
                                <Button onClick={handleLoginCloseClick} color="secondary" variant="outlined">Cancel</Button>
                                <Button onClick={handleLoginCloseClick} color="primary" variant="outlined">Ok</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                    <Button color="secondary" variant="contained">Sign Up</Button>
                </Toolbar>
            </Container>
        </AppBar>
        // <header><h2>Header</h2></header>
    )
}
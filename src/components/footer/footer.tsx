import { AppBar, BottomNavigation, BottomNavigationAction, Container, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import { Folder, Restore, Favorite, LocationOn } from '@material-ui/icons';
import { ChangeEvent, useState } from "react";
// import { Folder } from '@material-ui/icons/Folder';

const useStyles = makeStyles((theme: Theme) => ({
    root: { flexGrow: 1 },
    main:  { paddingTop: '60px' },
  }))


export const Footer = () => {

    const [value, setValue] = useState('')

    const handleIconChange = (event: ChangeEvent<{}>, newValue: any) => {
        setValue(newValue)
    }

    const classes = useStyles();
    return (
        <footer style={{ marginTop: 'auto', color: '#fff' }}>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <BottomNavigation value={value} onChange={handleIconChange} className={classes.root}>
                <BottomNavigationAction label="Recents" value={'recents'} icon={<Restore/>}/>

                <BottomNavigationAction label="Favorites" value={'favorites'} icon={<Favorite/>}/>

                <BottomNavigationAction label="Nearby" value={'nearby'} icon={<LocationOn/>}/>

                <BottomNavigationAction label="Folder" value={'folder'} icon={<Folder/>}/>
            </BottomNavigation>
        </footer>
    )
}
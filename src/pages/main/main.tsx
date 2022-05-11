import { Card, CardContent, CardMedia, Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

import { Container, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { PersonType, VideoType } from "../../types/types";

const useStyles = makeStyles((theme: any) => ({
    title: {
        textAlign: 'center',
        fontWeight: theme.typography.fontWeightBold,
        color: '#fff',
    },
    paper: { 
        position: 'relative', 
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: 'url(https://source.unsplash.com/random)', 
        backgroundSize: 'cover', 
        height: '260px'
    },
    content: {
        position: 'relative',
        padding: theme.spacing(1)
    },
    overlay: {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(0,0,0,.6)'
    },

    cardMedia: {
        paddingTop: '100%',
        backgroundSize: 'cover',
    },

    gridContainer: {
        gap: '8px',
    }

}))


const PersonItem = ({ id, name, pic } : { id: number, name: string, pic: string }) => {

    const classes = useStyles()
    
    return(
    <Grid item xs={12} sm={6} md={4}>
        <Card>
            <CardMedia
                image={pic}
                title={name}
                className={classes.cardMedia}
            />
            <CardContent>
                <Typography variant="h6">
                    <Link to={`/persons/${id}`}>
                        {name}
                    </Link>

                </Typography>

            </CardContent>
        </Card>

    </Grid>
)}

const VideoItem = ({ id, title } : { id: number, title: string}) => (
    <li>
        <Link to={`/video/${id}`}> {title}</Link>
    </li>
)

export const Main = () => {

    const [persons, setPersons] = useState<PersonType[]>([]);
    const [video, setVideo] = useState<VideoType[]>([]);

    useEffect(() => {
        const fetchPersons = async () => {
            const res = await fetch('http://localhost:3001/persons');
            const data = await res.json(); 
            if (data && data.length) {
                setPersons(data);
            }
        }
        fetchPersons()
    }, [])

    useEffect(() => {
        const fetchVideo = async () => {
            const res = await fetch('http://localhost:3001/videos');
            const data = await res.json(); 
            if (data && data.length) {
                setVideo(data);
            }
        }
        fetchVideo()
    }, [])

    const classes = useStyles()

    const personItems = persons.map(({ id, name, pic }) => <PersonItem key={id} id={id} name={name} pic={pic}/>)
    const videoItems = video.map(({ id, title }) => <VideoItem key={id} id={id} title={title} />)

    return (
        <>
        
        <Paper className={classes.paper}>
            <Container >
                <div className={classes.overlay}></div>

                    <div className={classes.content}>
                        <Typography variant="h1" className={classes.title}>Stand Up and Down</Typography>
                    </div>

            </Container>

        </Paper>
        <Typography variant="h2" className={classes.title}>Persons</Typography>
            <Container>
                <Grid container spacing={2}>
                    {personItems}
                    {personItems}

                </Grid>
            </Container>
        <Typography variant="h2" className={classes.title}>Videos</Typography>
            <ul>
                {videoItems}
            </ul>
        </>
    )
}


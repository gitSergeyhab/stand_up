import { SvgIcon, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { VideoType } from "../../types/types";


const LightBulbIcon: React.FC = (props) => {
    return (
      <SvgIcon {...props}>
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
      </SvgIcon>
    );
  }

export const Video = () => {

    const [video, setVideo] = useState<VideoType | null>(null);

    const { id } = useParams()

    useEffect(() => {
        const fetchPerson = async () => {
            try {
                const res = await fetch(`http://localhost:3001/videos/${id}`);
                const data = await res.json();
                setVideo(data);
                console.log(data)
            } catch { console.error(`error in fetch : http://localhost:3000/videos/${id}`) }
        }
        fetchPerson();
    }, [id]);

    if (!video) {
        return <h1>Loading ...</h1>
    }

    return (
        <>
            <h1>Video Page {id} </h1>
            <Typography  component={'h1'} color="textSecondary">
            <LightBulbIcon />
            Pro tip: See more <Link to="https://mui.com/getting-started/templates/">templates</Link> on
            the MUI documentation.
            </Typography>
        </>
    )
}


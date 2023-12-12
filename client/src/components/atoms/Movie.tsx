import React, { useState } from 'react'
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Notation from "./Notation";
import * as entitiesMovie from "../entity/movie.entity";//"./../../entity/moovie.entity";


type Props = {
    movie: entitiesMovie.IMoovieElem
}

function Movie(props: Props) {
    const [notation, setNotation] = useState(0);

    return (
        <Card sx={{ minWidth: 275, maxWidth: 300 }}>
            <CardContent>
                <IconButton
                    onClick={() => { }}
                    aria-label="star">
                    <DeleteIcon />
                </IconButton>
                <Typography variant="h5" component="h2">
                    {props.movie.name}
                </Typography>

                <Notation
                    id={props.movie.name}
                    notation={notation}
                    updateNotation={(id, rating) => setNotation(rating)}
                />

                <Typography variant="body2" component="p">
                    {props.movie.desc}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                    created on : 2024
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Movie
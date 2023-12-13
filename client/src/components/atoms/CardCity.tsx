import React, { useState } from 'react'
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import Notation from "./Notation";
import * as entitiesCities from "../../network/cities/cities.entities";//"./../../entity/moovie.entity";


type Props = {
    city: entitiesCities.ICity,
    deleteOne : (id : string) => void
}

function CardCity(props: Props) {
    const [notation, setNotation] = useState(0);

    return (
        <Card sx={{ minWidth: 275, maxWidth: 300 }}>
            <CardContent>
                <IconButton
                    onClick={() => {props.deleteOne(props.city.recordid)}}
                    aria-label="star">
                    <DeleteIcon />
                </IconButton>
                <Typography variant="h5" component="h2">
                    {props.city.datasetid}
                </Typography>

                <Notation
                    id={"useless"}
                    notation={notation}
                    updateNotation={(id, rating) => setNotation(rating)}
                />

                <Typography variant="body2" component="p">
                    {props.city.fields.libelle_d_acheminement}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                    created on : {props.city.record_timestamp}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardCity;
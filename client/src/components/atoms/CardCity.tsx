import React, { useState } from 'react'
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
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
                <div style={{
                    display:"flex",
                    flexDirection:"column"
                    
                }}>
                
                <IconButton
                    onClick={() => {props.deleteOne(props.city.recordid)}}
                    aria-label="star">
                    <DeleteIcon />
                </IconButton>
                <Typography variant="h5" component="h2" align="center">
                    {props.city.fields.nom_de_la_commune}
                </Typography>

                <Notation
                    id={"useless"}
                    notation={notation}
                    updateNotation={(id, rating) => setNotation(rating)}
                />

                <Typography variant="body2" component="p" align="center">
                    Postal code : {props.city.fields.code_postal}
                </Typography>
                <Typography variant="caption" color="textSecondary" align="center">
                    created on : {props.city.record_timestamp}
                </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default CardCity;
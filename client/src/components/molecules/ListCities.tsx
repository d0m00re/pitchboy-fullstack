import React from 'react'
import CardCity from "../atoms/CardCity";
import * as entitiesCities from "../../network/cities/cities.entities";//"./../../entity/moovie.entity";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

type Props = {
  listCities: entitiesCities.ICities;
  deleteOne : (id : string) => void;
}

function ListCities(props: Props) {
  return (
    <Container>
      <Grid container spacing={2} alignItems={"center"}>
        {
          props.listCities.map(city =>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              alignItems={"center"}
              justifyContent={"center"}
              key={`city-card-${city.recordid}`}
            >
              <CardCity
                city={city}
                deleteOne={props.deleteOne}
              />
            </Grid>)
        }
      </Grid>
    </Container>
  )
}

export default ListCities;
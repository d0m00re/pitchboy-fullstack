import React from 'react'
import CardCity from "../atoms/CardCity";
import * as entitiesCities from "../../network/cities/cities.entities";//"./../../entity/moovie.entity";

type Props = {
    listCities : entitiesCities.ICities,
    currentSelect : number;
}

function ListCities(props: Props) {
  return (
    <div>
        {
            props.listCities.map(city => <CardCity
                key={`city-${city.datasetid}`}
                city={city}    
            />)
        }
    </div>
  )
}

export default ListCities;
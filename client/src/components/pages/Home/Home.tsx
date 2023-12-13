import React, {useEffect, useState} from 'react';
import * as entitiesCities from "../../../network/cities/cities.entities";
import ListCities from '../../molecules/ListCities';
import {citiesNetwork} from "./../../../network/cities";
import useCities from "./../../../stateManager/cities.state";
type Props = {}

function Home({}: Props) {
    const citiesStore = useCities();

    useEffect(() => {
     // setListMoovie(old => ({...old, moovies : fetchData(0)}));
      //citiesNetwork.hello();

      populate(0, 10)
    }, []);

    function populate(page : number, limit : number) {
        return citiesNetwork.paginate(page + "", limit + "")
        .then(resp => {
            if (resp)
                citiesStore.setData(resp);
        })
        .catch(() => {
            console.log("error")
        }) 
     }
    

  return (
    <section>
        <ListCities
            listCities={citiesStore.cities.rows}
        />
    </section>
  )
}

export default Home
import React, { useEffect, useState } from 'react';
import * as entitiesCities from "../../../network/cities/cities.entities";
import ListCities from '../../molecules/ListCities';
import { citiesNetwork } from "./../../../network/cities";
import useCities from "./../../../stateManager/cities.state";
import Pagination from "@mui/material/Pagination";

type Props = {}

function Home({ }: Props) {
    const citiesStore = useCities();

    useEffect(() => {
        populate(0, 6)
    }, []);

    function populate(page: number, limit: number) {
        return citiesNetwork.paginate(page + "", limit + "")
            .then(resp => {
                if (resp)
                    citiesStore.setData(resp);
            })
            .catch(() => {
                console.info("error populate cities")
            })
    }


    return (
        <section>
            <ListCities
                listCities={citiesStore.cities.rows}
            />
            <Pagination
                count={citiesStore.cities.info.totalPage}
                color="primary"
                onChange={(event: any, currentPage: number) => populate(
                    currentPage - 1,
                    citiesStore.cities.info.limit
                )}
            />
        </section>
    )
}

export default Home
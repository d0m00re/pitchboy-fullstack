import React, { useEffect, useState } from 'react';
import * as entitiesCities from "../../../network/cities/cities.entities";
import ListCities from '../../molecules/ListCities';
import { citiesNetwork } from "./../../../network/cities";
import useCities from "./../../../stateManager/cities.state";
import Pagination from "@mui/material/Pagination";
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import ModalCreateCity from "./../../templates/ModalCreation/ModalCreateCity";

function Home() {
    const citiesStore = useCities();
    const [openModalCreateCity, setOpenModalCreateCity] = useState<boolean>(false);
    const onOpen = () => setOpenModalCreateCity(true);
    const onClose = () => setOpenModalCreateCity(false);


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

    function deleteOne(id : string) {
        citiesNetwork.deleteOne(id)
        .then(resp => {
            console.log("success delete");
            if (resp)
                citiesStore.deleteOne(id);
        })
        .catch(err => {
            console.log("fail delete one", err)
        })
    }


    return (
        <Box sx={{ display: 'flex', alignContent : "center", flexDirection : "column", margin : "18px", gap : "10px" }}>
            <Button onClick={onOpen}>Create a project</Button>
            <ModalCreateCity
                open={openModalCreateCity}
                onClose={onClose}
                pushNewProject={citiesStore.pushOne}
            />
            
            <ListCities
                listCities={citiesStore.cities.rows}
                deleteOne={deleteOne}
            />
            <Pagination
                style={{margin : "auto"}}
                count={citiesStore.cities.info.totalPage + 1}
                color="primary"
                onChange={(event: any, currentPage: number) => populate(
                    currentPage - 1,
                    citiesStore.cities.info.limit
                )}
            />
        </Box>
    )
}

export default Home
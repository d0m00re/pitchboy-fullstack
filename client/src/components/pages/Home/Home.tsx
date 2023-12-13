import React, { useEffect, useState } from 'react';
import * as entitiesCities from "../../../network/cities/cities.entities";
import ListCities from '../../molecules/ListCities';
import { citiesNetwork } from "./../../../network/cities";
import useCities from "./../../../stateManager/cities.state";
import Pagination from "@mui/material/Pagination";
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import ModalCreateCity from "./../../templates/ModalCreation/ModalCreateCity";
import CircularProgress from '@mui/material/CircularProgress';

function Home() {
    const citiesStore = useCities();
    const [openModalCreateCity, setOpenModalCreateCity] = useState<boolean>(false);
    const [loadData, setLoadData] = useState(false);
    const onOpen = () => setOpenModalCreateCity(true);
    const onClose = () => setOpenModalCreateCity(false);
    //const onLoad = () =>


    useEffect(() => {
        populate(0, 6)
    }, []);

    function populate(page: number, limit: number) {
        setLoadData(true);
        return citiesNetwork.paginate(page + "", limit + "")
            .then(resp => {
                if (resp)
                    citiesStore.setData(resp);
            })
            .catch(() => {
                console.info("error populate cities")
            })
            .finally(() => {
                setLoadData(false);
            })
    }

    function deleteOne(id: string) {
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

    console.log(`count : ${citiesStore.cities.info.totalPage + 1}`)

    return (
        <Box sx={{ display: 'flex', alignContent: "center", flexDirection: "column", margin: "18px", gap: "10px" }}>

            {loadData ?
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress color="success" />
                </Box>
                :
                <>
                    <Button onClick={onOpen}>Creer une ville</Button>
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
                        style={{ margin: "auto" }}
                        count={citiesStore.cities.info.totalPage + 1}
                        page={citiesStore.cities.info.page + 1}
                        //defaultValue={citiesStore.cities.info.totalPage + 1}
                        color="primary"
                        onChange={(event: any, currentPage: number) => populate(
                            currentPage - 1,
                            citiesStore.cities.info.limit
                        )}
                    />
                </>
            }
        </Box>
    )
}

export default Home
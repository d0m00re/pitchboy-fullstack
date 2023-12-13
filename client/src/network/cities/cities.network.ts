import { citiesEntities } from ".";
import networkGen from "./../network.gen";
import * as entities from "./cities.entities"
//const url = import.meta.env.URL as string;
const url = "http://localhost:3001/v1/cities";

class CitiesNetworkAdapter {
    constructor() {
        console.log("url : ", url)
    }

    hello() {
        console.log("hola")
    }

    getAll() : Promise<entities.ICities[] | undefined> {
        return networkGen(url, "get");
    }

    paginate = (page: string, limit: string) : Promise<entities.IPaginateOutput | undefined> => {
        return networkGen(`${url}/paginate?limit=${limit}&page=${page}`, "get");
    }

    createOne = (props : entities.ICityEntity) : Promise<entities.ICity | undefined> => {
        return networkGen(`${url}`, "post", props);
    }

    deleteOne = (_id : string) : Promise<entities.ICity | undefined> => {
        return networkGen(url, "delete", {id : _id});
    }

    updateOne = (props : Partial<entities.ICity>) : Promise<entities.ICity | undefined> => {
        return networkGen(url, "patch", props);
    }
}

export default new CitiesNetworkAdapter();
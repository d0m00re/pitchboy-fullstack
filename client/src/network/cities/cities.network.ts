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

    // delete

    // create

    // notation update
}

export default new CitiesNetworkAdapter();
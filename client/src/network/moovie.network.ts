import networkGen from "./network.gen";

//const url = import.meta.env.URL as string;
const url = "http://localhost:3001/v1/cities";

class MoovieNetworkAdapter {
    constructor() {
        console.log("url : ", url)
    }

    hello() {
        console.log("hola")
    }

    getAll() {
        return networkGen(url, "get");
    }
}

export default new MoovieNetworkAdapter();
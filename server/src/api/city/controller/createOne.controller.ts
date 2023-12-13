import dbCities from "./../../../database/database";
import * as entityCities from "./../../../database/entity.type";

const createOne = (props : entityCities.ICityEntity) => {
    return dbCities.createOne(props);
}

export default createOne;
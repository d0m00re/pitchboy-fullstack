import dbCities from "./../../../database/database";
import * as entityCities from "./../../../database/entity.type";

const patchOne = (props : entityCities.ICityPatchInput) => {
    return dbCities.patchOne(props);
}

export default patchOne;
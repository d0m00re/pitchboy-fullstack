import dbCities from "./../../../database/database";
import * as entityCities from "./../../../database/entity.type";

const citiesPagination = (props : entityCities.IPaginate) => {
    return dbCities.paginate(props);
}

export default citiesPagination;
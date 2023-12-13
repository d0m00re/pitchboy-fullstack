import dbCities from "./../../../database/database";
import * as entityCities from "./../../../database/entity.type";
import calculDistance from "./../../../utils/calculDistance"


const findNearCity = (props : entityCities.INearCity) => {
    const p1 = {lat : props.p1[0], lng : props.p1[1]};
    const allCity = dbCities.cities.filter(city => calculDistance(
        p1,
        {
            lat : city.geometry.coordinates[0],
            lng : city.geometry.coordinates[1]
        }) < props.maxDistance);

    return allCity;
}

export default findNearCity;
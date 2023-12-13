import database from "./../../../database/database";
import * as entity from "./../../../database/entity.type";

const getWtPostalCode = (postalCode : string) => {
    return database.findCityWithPostalCode(postalCode);
}

export default getWtPostalCode;
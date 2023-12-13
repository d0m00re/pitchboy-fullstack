import database from "./../../../database/database";

const getAll = () => {
    return database.getAll();
}

export default getAll;
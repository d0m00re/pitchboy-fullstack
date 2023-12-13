import database from "./../../../database/database";

const deleteWhId = (id : string) => {
    return database.delete(id);
}

export default deleteWhId;
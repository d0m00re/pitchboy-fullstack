import database from "./../../../database/database";

const getWtDepartmentCode = (departmentCode : string) => {
    return database.findCitiesWithCommuneCode(departmentCode)
}

export default getWtDepartmentCode;
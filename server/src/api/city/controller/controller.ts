import database from "./../../../database/database";
import * as entity from "./../../../database/entity.type";

export const getAll = () => {
    return database.getAll();
}

//- __Une route pour accèder à un code postal précis__: Un utilisateur veut accéder à un code postal en particulier.</br>
export const getWtPostalCode = (postalCode : string) => {
    return database.findCityWithPostalCode(postalCode);
}

export const getWtDepartmentCode = (departmentCode : string) => {
    return database.findCitiesWithCommuneCode(departmentCode)
}

export const deleteWithId = (id : string) => {
    return database.delete(id);
}
/*
utilisateur veut accéder à la liste complète des villes.</br>
- __Une route pour modifier une entrée__: Un utilisateur veut modifier une information lié au code postal.</br>
- __Une route pour supprimer une entrée__: Un utilisateur veut supprimé une entrée via le code postal.</br>
- __Les mêmes exercices que le Junior__</br>
- __Une route pour lister les villes avec de la pagination__: Un utilisateur veut lister les villes mais page par page.</br> 
- __Une route pour lister les villes d'un département__: Un utilisateur veut lister les villes d'un département.</br> 
- __Une route pour lister les villes dans un rayon fourni__: Un utilisateur veut lister les villes dans un rayon défini.</br>
*/
/*
utilisateur veut accéder à la liste complète des villes.</br>
- __Une route pour accèder à un code postal précis__: Un utilisateur veut accéder à un code postal en particulier.</br>
- __Une route pour modifier une entrée__: Un utilisateur veut modifier une information lié au code postal.</br>
- __Une route pour supprimer une entrée__: Un utilisateur veut supprimé une entrée via le code postal.</br>
- __Les mêmes exercices que le Junior__</br>

- __Une route pour lister les villes avec de la pagination__: Un utilisateur veut lister les villes mais page par page.</br> 
- __Une route pour lister les villes d'un département__: Un utilisateur veut lister les villes d'un département.</br> 
- __Une route pour lister les villes dans un rayon fourni__: Un utilisateur veut lister les villes dans un rayon défini.</br>
*/

import express, {Request, Response} from "express";
import dbCities from "./../../../database/database";
import * as citiesController from "./../controller/controller";
import * as mdw from "./../../../middleware";
import * as entityCities from "./../../../database/entity.type";

const router = express.Router();

/**
 * page start with 0
 * rows : citiesList[], info : info pagination
 */
router.get("/paginate", mdw.hocExpressParamsQuery(entityCities.ZodPaginateString), (req : Request, res : Response) => {
    const query : entityCities.IPaginateString = entityCities.ZodPaginateString.parse(req.query);
    const queryNumber : entityCities.IPaginate = {
        page : parseInt(query.page),
        limit : parseInt(query.limit)
    }
    let result = dbCities.paginate(queryNumber);

    if (!result) res.status(404).send({msg : "not found"})

    res.status(200).send(result)
})

router.get("/postalCode/:postalCode", (req : Request, res : Response) => {
    let params : any = { ...req.query, ...req.params };
    let city = citiesController.getWtPostalCode(params.postalCode);
    if (!city) return res.status(404).send({msg : "not found"});
    res.status(200).send(city);
});

router.get("/commune/:communeCode", (req : Request, res : Response) => {
    let params : any = { ...req.query, ...req.params };
    let city = citiesController.getWtDepartmentCode(params.communeCode);
    if (!city) return res.status(404).send({msg : "not found"});
    res.status(200).send(city);
});

// get all
router.get("/", (req : Request, res : Response) => {
    res.status(200).send(citiesController.getAll());
});

router.delete("/",  (req : Request, res : Response) => {
    let projectId = req.body.id;
    let deleteProject = citiesController.deleteWithId(projectId);
    if (!deleteProject) {
        return res.status(404).send({msg : "not found"})
    }
    return res.status(200).send(deleteProject);
});

export default router;
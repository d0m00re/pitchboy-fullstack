import express, { Request, Response } from "express";
import * as citiesController from "./../controller";
import * as mdw from "./../../../middleware";
import * as entityCities from "./../../../database/entity.type";
import * as routesSchema from "./routes.schema";

const router = express.Router();

/*
** problem with this function
*/
router.get("/findNearCity", mdw.hocExpressBody(entityCities.ZodNearCity), (req: Request<{}, {}, entityCities.INearCity>, res: Response) => {
    try {
        const body = req.body;
        const result = citiesController.findNearCity(body);

        if (!result) return res.status(404).send({ msg: "not found" });
        return res.status(200).send(result);
    } catch (err) {
        return res.status(500).send({ msg: "internal error" });
    }
});


/**
 * page start with 0
 * rows : citiesList[], info : info pagination
 */
router.get("/paginate", mdw.hocExpressParamsQuery(entityCities.ZodPaginateString), (req: Request, res: Response) => {
    try {
        const query: entityCities.IPaginateString = entityCities.ZodPaginateString.parse(req.query);
        const queryNumber: entityCities.IPaginate = {
            page: parseInt(query.page),
            limit: parseInt(query.limit)
        }
        let result = citiesController.citiesPagination(queryNumber);

        if (!result) res.status(404).send({ msg: "not found" })

        res.status(200).send(result)
    }
    catch (err) {
        return res.status(500).send({ msg: "internal error" });
    }
})

router.get("/postalCode/:postalCode", mdw.hocExpressParamsQuery(routesSchema.getWtPostalCode), (req: Request, res: Response) => {
    try {
        const params = { ...req.query, ...req.params } as routesSchema.IGetWtPostalCodeInput;
        const city = citiesController.getWtPostalCode(params.postalCode);
        if (!city) return res.status(404).send({ msg: "not found" });
        res.status(200).send(city);
    }
    catch (err) {
        return res.status(500).send({ msg: "internal error" });
    }
});

router.get("/commune/:communeCode", mdw.hocExpressParamsQuery(routesSchema.getWtCommuneCode), (req: Request, res: Response) => {
    try {
        const params = { ...req.query, ...req.params } as routesSchema.IGetWtCommuneCodeInput;
        const city = citiesController.getWtDepartmentCode(params.communeCode);
        if (!city) return res.status(404).send({ msg: "not found" });
        res.status(200).send(city);
    }
    catch (err) {
        return res.status(500).send({ msg: "internal error" });
    }
});

router.patch("/",
    mdw.hocExpressBody(entityCities.ZodCityPatchInput),
    (req: Request<{}, {}, entityCities.ICityPatchInput>, res: Response) => {
        try {
            const body = req.body;
            const city = citiesController.patchOne(body);
            if (!city) return res.status(404).send({ msg: "not found" });
            res.status(200).send(city);
        }
        catch (err) {
            return res.status(500).send({ msg: "internal error" });
        }
});

router.post("/",
    mdw.hocExpressBody(entityCities.ZodCityEntity),
    (req : Request<{}, {}, entityCities.ICityEntity>, res : Response) => {
        try {
            const body = req.body;
            const newCity = citiesController.createOne(body);

            if (!newCity)  return res.status(404).send({ msg: "not found" });
            res.status(201).send(newCity);
        } catch(err) {
            return res.status(500).send({msg : "internal error"})
        }
    })


// get all cities - bad routes with lot of cities
router.get("/", (req: Request<{}, {}, {}>, res: Response) => {
    try {
        const allCities = citiesController.getAll();
        if (!allCities) return res.status(404).send({ msg: "not found" });
        res.status(200).send(allCities);
    }
    catch (err) {
        return res.status(500).send({ msg: "internal error" });
    }
});

// delete one with id
router.delete("/", mdw.hocExpressBody(routesSchema.deleteOneShema), (req: Request<{}, {}, routesSchema.IDeleteOneSchemaInput>, res: Response) => {
    try {
        const projectId = req.body.id;
        const deleteProject = citiesController.deleteWtId(projectId);
        if (!deleteProject) {
            return res.status(404).send({ msg: "not found" })
        }
        return res.status(200).send(deleteProject);
    }
    catch (err) {
        return res.status(500).send({ msg: "internal error" });
    }
});

export default router;
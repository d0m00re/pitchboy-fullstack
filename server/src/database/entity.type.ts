import z from "zod";

export const ZodCoordinate = z.array(z.number());

export const ZodCityField = z.object({
    nom_de_la_commune:  z.string(),
    libelle_d_acheminement:  z.string(),
    code_postal:  z.string(),
    coordonnees_gps: ZodCoordinate,
    code_commune_insee: z.string()
})

export const ZodGeometry = z.object({
    type : z.string(),
    coordinates : ZodCoordinate
})

export const ZodCity = z.object({
    datasetid : z.string(),
    recordid : z.string(),
    fields : ZodCityField,
    geometry : ZodGeometry,
    record_timestamp : z.string()
});

export const ZodCities = z.array(ZodCity);

export type ICoordinate = z.infer<typeof ZodCoordinate>;
export type ICityField = z.infer<typeof ZodCityField>;
export type IGeometry = z.infer<typeof ZodGeometry>;
export type ICity = z.infer<typeof ZodCity>;
export type ICities = z.infer<typeof ZodCities>;

export const ZodPaginateString = z.object({
    page : z.string(),
    limit : z.string()
})
export const ZodPaginate = z.object({
    page : z.number(),
    limit : z.number()
})

export type IPaginateString = z.infer<typeof ZodPaginateString>;
export type IPaginate = z.infer<typeof ZodPaginate>;

export const ZodPaginateInfoOutput = z.object({
    "page" : z.number(),
    "limit" : z.number(),
    "count" : z.number(),
    "totalPage" : z.number()
})

export const ZodPaginateOutput = z.object({
    info : ZodPaginateInfoOutput,
    rows : ZodCities
})

export const ZodNearCity = z.object({
    p1 : ZodCoordinate,
    p2 : ZodCoordinate,
    maxDistance : z.number()
})

export type INearCity = z.infer<typeof ZodNearCity>;

export type IPaginateOutput = z.infer<typeof ZodPaginateOutput>;

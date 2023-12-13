import z from "zod";
import * as entity from "./../../../database/entity.type";

export const deleteOneShema = z.object({
    id : z.string()
})

export const getWtPostalCode = z.object({
    postalCode : z.string()
})

export const getWtCommuneCode = z.object({
    communeCode : z.string()
})

export type IDeleteOneSchemaInput = z.infer<typeof deleteOneShema>;
export type IGetWtPostalCodeInput = z.infer<typeof getWtPostalCode>;
export type IGetWtCommuneCodeInput = z.infer<typeof getWtCommuneCode>;
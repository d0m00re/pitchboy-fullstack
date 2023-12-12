import dataJSON from "./data.json";
import * as entityCities from "./entity.type";
import { v4 as uuidv4 } from 'uuid';
import calculDistance from "./../utils/calculDistance"

class DbCities {
    cities : entityCities.ICity[];
    constructor() {
        this.cities = entityCities.ZodCities.parse(dataJSON);
    }

    getAll() {
        const cities = this.cities;
        return cities;
    }

    getOneWtPk(recordid : string) {
        const city : entityCities.ICity | undefined = this.cities.find(e => e.recordid === recordid);
        return city;
    }

    findCityWithPostalCode(postalCode : string) {
        let i = this.cities.findIndex(city => city.fields.code_postal === postalCode);
        return (i === -1) ? undefined : this.cities[i];
    }

    findCitiesWithCommuneCode(communeCode : string) {
        let listCities = this.cities.filter(city => city.fields.code_commune_insee === communeCode);
        return (listCities === undefined) ? undefined : listCities;
    }

    
    findNearCity(props : entityCities.INearCity) {
        let p1 = {lat : props.p1[0], lng : props.p1[1]};
        let allCity = this.cities.filter(city => calculDistance(
            p1,
            {
                lat : city.geometry.coordinates[0],
                lng : city.geometry.coordinates[1]
            }) < props.maxDistance);

        return allCity;
    }

    patchOne(city : Partial<entityCities.ICity>) {
        let index = this.cities.findIndex(_city => _city.recordid === city.recordid);

        if (index === -1) return undefined;

        // update
        this.cities[index] = {...this.cities[index], ...city};
        this.cities[index].record_timestamp = (new Date()).getUTCMilliseconds() + ""
        return this.cities[index];
    }

    paginate(props : entityCities.IPaginate) {
        const page = props.page || 0;
        const limit = props.limit || 10;

        const lenTotal = this.count();
        const totalPage = Math.floor(lenTotal / limit);
        const startIndex = (page) * limit;
        const endIndex = Math.min((page + 1) * limit, lenTotal);

        if (startIndex > lenTotal) return undefined;
        
        return {
            rows : this.cities.slice(startIndex, endIndex),
            info : {
                page : page,
                limit : limit,
                count : lenTotal,
                totalPage : totalPage
            }
        }      
    }

    delete(_id : string) {
        const idCitiesToDelete = this.cities.findIndex(e => e.recordid === _id);    
        if (idCitiesToDelete === -1) return undefined;
        const tmpProjectReturn = this.cities[idCitiesToDelete];
        this.cities = this.cities.filter((e, i) => i !== idCitiesToDelete);
        return tmpProjectReturn;
    }

    count() {
        return this.cities.length;
    }
}

export default new DbCities()

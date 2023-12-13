import { create } from 'zustand'
import * as entitiesCities from "./../network/cities/cities.entities";

interface ICitiesStore {
    cities: entitiesCities.IPaginateOutput,
    setData: (citiesPaginate: entitiesCities.IPaginateOutput) => void;
    pushOne: (city: entitiesCities.ICity) => void;
    deleteOne: (cityId: string) => void;
}

const makeEmpty = (): entitiesCities.IPaginateOutput => ({
    rows: [],
    info: {
        page: 0,
        limit: 10,
        count: 0,
        totalPage: 1
    }
})

const useStoreCities = create<ICitiesStore>((set) => ({
    cities: makeEmpty(),
    setData: (citiesPaginate: entitiesCities.IPaginateOutput) => {
        set((state) => ({ cities: citiesPaginate }))
    },
    pushOne: (city: entitiesCities.ICity) => {
        set((state) => {
            state.cities = {
                rows: [
                    city, ...state.cities.rows],
                info: state.cities.info
            }
            return state;
        })
    },

    deleteOne: (cityId: string) => {
        set((state) => ({
            cities: {
                rows: state.cities.rows.filter(city => city.recordid !== cityId),
                info: state.cities.info
            }
        }))
    }

    /*
    updateOne: (city: entitiesCities.ICity) => {

    }
    */
}))

export default useStoreCities;
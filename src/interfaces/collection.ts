import { IFilm, IVehicle, IStarship } from './index'

export type CollectionType = 'films' | 'vehicles' | 'starships'

export interface CollectionInfo {
    collection: IFilm[] | IVehicle[] | IStarship[]
    type: CollectionType
    title?: string
}
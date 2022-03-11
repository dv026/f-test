import { AxiosResponse } from "axios";

import { IStarship } from "../interfaces";
import { swapi } from '../api/swapi';

export class StarshipService {
    static getStarship = (id: string): Promise<AxiosResponse<IStarship>> => {
        return swapi.get<IStarship>(`/starships/${id}`)
    }
}
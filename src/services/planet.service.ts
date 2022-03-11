import { AxiosResponse } from 'axios';

import { IPlanet } from '../interfaces/planet';
import { swapi } from './../api/swapi';

export class PlanetService {
    static getPlanet = (id: string): Promise<AxiosResponse<IPlanet>> => {
        return swapi.get<IPlanet>(`/planets/${id}`)
    }
}
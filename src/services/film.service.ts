import { swapi } from './../api/swapi';
import { AxiosResponse } from "axios";

import { IFilm } from "../interfaces/film";

export class FilmService {
    static getFilm = (id: string): Promise<AxiosResponse<IFilm>> => {
        return swapi.get(`/films/${id}`)
    }
}
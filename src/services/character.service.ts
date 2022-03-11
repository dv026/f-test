import { AxiosResponse } from 'axios'

import { GetAllCharactersResponse, ICharacter } from '../interfaces'
import { swapi } from '../api'

export class CharacterService {
    static getAllCharacters = (): Promise<AxiosResponse<GetAllCharactersResponse>> => {
        return swapi.get<GetAllCharactersResponse>('/people')
    }

    static getCharacter = (id: string): Promise<AxiosResponse<ICharacter>> => {
        return swapi.get<ICharacter>(`/people/${id}`)
    }

    static searchCharacters = (searchQuery: string): Promise<AxiosResponse<GetAllCharactersResponse>> => {
        return swapi.get<GetAllCharactersResponse>(`/people?search=${searchQuery}`)
    }
}
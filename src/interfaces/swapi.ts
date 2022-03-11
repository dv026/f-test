import { ICharacter } from './character';

export interface GetAllCharactersResponse {
    count: number
    results: ICharacter[]
    prev?: string
    next?: string
}
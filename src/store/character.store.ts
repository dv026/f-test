import { makeAutoObservable, reaction } from 'mobx'
import debounce from 'debounce'

import { ICharacter } from '../interfaces/character';
import { CharacterService } from '../services/character.service';

class CharacterStore {
    characters: ICharacter[] = []
    filter = ''
    page = 1
    totalCharacters = 0

    constructor() {
        makeAutoObservable(this)
        reaction(() => this.filter, () => {
            this.fetchCharactersDebounced()
        })
        reaction(() => this.page, () => {
            this.fetchCharactersDebounced()
        })
    }

    fetchCharacters() {
        CharacterService.searchCharacters(this.filter, this.page)
            .then((response) => {
                this.setTotalCharacters(response.data.count)
                this.setCharacters(response.data.results)
            })
    }

    fetchCharactersDebounced = debounce(this.fetchCharacters, 200)

    setFilter(searchQuery: string) {
        this.filter = searchQuery
    }

    setCharacters(characters: ICharacter[]) {
        this.characters = characters
    }

    setPage(page: number) {
        this.page = page
    }

    setTotalCharacters(totalCharacters: number) {
        this.totalCharacters = totalCharacters
    }
}

export default new CharacterStore()
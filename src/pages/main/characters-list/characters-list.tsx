import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { ICharacter } from "../../../interfaces/character"
import { CharacterService } from "../../../services/character.service"
import { getIdFromUrl } from "../../../utils"
import { CharacterItem } from './../character-item'

import './characters-list.scss'

export const CharactersList = () => {
    const [charactersList, setCharactersList] = useState<ICharacter[]>([])

    useEffect(() => {
        CharacterService.getAllCharacters()
            .then((response) => setCharactersList(response.data.results))
    }, [])

    return (
        <div className="characters-list">
            {charactersList.map((character, index) => {
                const characterId = getIdFromUrl(character.url)
                return (
                    <Link to={`/character/${characterId}`}>
                        <CharacterItem {...character} />
                    </Link>
                )
            })}
        </div>
    )
}
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { observer } from 'mobx-react-lite'

import { getIdFromUrl } from "../../../utils"
import { CharacterItem } from './../character-item'
import characterStore from './../../../store'

import './characters-list.scss'

export const CharactersList = observer(() => {

    useEffect(() => {
        characterStore.fetchCharacters()
    }, [])

    return (
        <div className="characters-list">
            {characterStore.characters.map((character, index) => {
                const characterId = getIdFromUrl(character.url)
                return (
                    <Link to={`/character/${characterId}`} key={index} >
                        <CharacterItem {...character} />
                    </Link>
                )
            })}
        </div>
    )
})
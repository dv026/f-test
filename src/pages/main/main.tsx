import { CharactersList } from './characters-list'
import { SearchBar } from './search-bar'

import './main.scss'

export const Main = () => {
    return (
        <div className="main-page">
            <div className="main-page__search-bar">
                <SearchBar />
            </div>
            <CharactersList />
        </div>
    )
}
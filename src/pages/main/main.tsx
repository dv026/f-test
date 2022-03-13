import { observer } from 'mobx-react-lite'
import { Pagination } from 'antd'

import { CharactersList } from './characters-list'
import { SearchBar } from './search-bar'
import characterStore from '../../store'

import './main.scss'

const pageSize = 10

export const Main = observer(() => {

    const handlePageClick = (pageNumber: number) => {
        characterStore.setPage(pageNumber)
    }

    return (
        <div className="main-page">
            <div className="main-page__search-bar">
                <SearchBar />
            </div>
            <CharactersList />
            <div className="main-page__pagination">
                <Pagination 
                    current={characterStore.page}
                    pageSize={pageSize}
                    total={characterStore.totalCharacters}
                    onChange={handlePageClick}
                    showSizeChanger={false}
                />
            </div>
        </div>
    )
})
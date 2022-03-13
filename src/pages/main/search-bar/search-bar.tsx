import { Input } from 'antd'
import { observer } from 'mobx-react-lite'

import characterStore from './../../../store'

export const SearchBar = observer(() => {
    return (
        <Input
            placeholder='search ...'
            value={characterStore.filter}
            onChange={(e) => {
                characterStore.setFilter(e.target.value)
                characterStore.setPage(1)
            }}
        />
    )
})
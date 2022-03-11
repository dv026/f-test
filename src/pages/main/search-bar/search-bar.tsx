import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
// import { debounce } from 'debounce'
import { useDebouncedCallback } from 'use-debounce';

import './search-bar.scss'
import { CharacterService } from '../../../services';

export const SearchBar = () => {
    const [value, setValue] = useState('')

    const searchDebounced = useDebouncedCallback(() => {
        CharacterService.searchCharacters(value)
            .then((response) => console.log(response))
    }, 200)

    useEffect(() => {
        searchDebounced()
    }, [value])

    return (
        <Input placeholder='search ...' value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value) } className="search-bar"/>
    )
}
import { IVehicle, IStarship, IFilm } from "../../../interfaces"

import './character-inclussions.scss'

export const CharacterInclussions: React.FC<CharacterInclussionsProps> = ({ collection, title, type }) => {
    return (
        <div className="character-inclussions">
            {collection.length > 0 &&
                <>
                    <div><b>{title}</b></div>
                    <div className="character-inclussions__value">
                        {collection.map((elem) => {
                            switch (type) {
                                case 'films':
                                    return <div>&bull;&nbsp;{(elem as IFilm).title}</div>
                                case 'vehicles':
                                    return <div>&bull;&nbsp;{(elem as IVehicle).name}</div>
                                case 'starships':
                                    return <div>&bull;&nbsp;{(elem as IStarship).name}</div>
                                default: 
                                    return null
                            }
                        })}
                    </div>
                </>
            }
        </div>
    )
}

export type CollectionType = 'films' | 'vehicles' | 'starships'

interface CharacterInclussionsProps {
    collection: IFilm[] | IVehicle[] | IStarship[]
    title: string
    type: CollectionType
}
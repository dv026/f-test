import { IVehicle, IStarship, IFilm, CollectionInfo } from "../../../interfaces"

import './character-inclussions.scss'

export const CharacterInclussions: React.FC<CollectionInfo> = ({ collection, title, type }) => {
    return (
        <div className="character-inclussions">
            {collection.length > 0 &&
                <>
                    <div><b>{title}</b></div>
                    <div className="character-inclussions__value">
                        {collection.map((elem, index) => {
                            switch (type) {
                                case 'films':
                                    return <div key={Date.now() + index}>&bull;&nbsp;{(elem as IFilm).title}</div>
                                case 'vehicles':
                                    return <div key={Date.now() + index}>&bull;&nbsp;{(elem as IVehicle).name}</div>
                                case 'starships':
                                    return <div key={Date.now() + index}>&bull;&nbsp;{(elem as IStarship).name}</div>
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
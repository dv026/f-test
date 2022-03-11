import { useEffect, useState } from 'react'

import { Divider } from './../../../components'
import { PlanetService } from './../../../services'
import { getIdFromUrl } from './../../../utils'

import './character-item.scss'


export const CharacterItem: React.FC<CharacterItemProps> = ({
    height,
    mass,
    gender,
    name,
    homeworld,
    films,
    vehicles,
    starships,
}) => {
    const [planet, setPlanet] = useState('')

    useEffect(() => {
        const planetId = getIdFromUrl(homeworld)
        PlanetService.getPlanet(planetId)
            .then((response) => setPlanet(response.data.name))
    }, [])

    return (
        <div className="character-item">
            <div className="character-item__header">
                <div className="character-item__photo">
                    <img src="https://toptos.com.ua/content/images/20/1162x1179l80nn0/chernyy-popsoket-popholder-dlya-telefona-star-wars-51403022908057.jpg" width={50} height={50} alt="character..." />
                </div>
                <div className="character-item__basic-info">
                    <div><b>{name}</b></div>
                    <div className="character-item__planet">{planet}</div>
                </div>
            </div>
            <Divider type="horizontal" />
            <div className="character-item__body">
                <div className="character-item__left-block">
                    <div>
                        {films.length > 0 &&
                            <>
                                &bull;
                                &nbsp;
                                <b>{films.length}</b>
                                &nbsp;
                                {films.length === 1
                                    ? 'film'
                                    : 'films'
                                }
                            </>
                        }
                    </div>
                    <div>
                        {vehicles.length > 0 &&
                            <>
                                &bull;
                                &nbsp;
                                <b>{vehicles.length}</b>
                                &nbsp;
                                {vehicles.length === 1
                                        ? 'vehicle'
                                        : 'vehicles'
                                }
                            </>
                        }
                    </div>
                    <div>
                        {starships.length > 0 &&
                            <>
                                &bull;
                                &nbsp;
                                <b>{starships.length}</b>
                                &nbsp;
                                {starships.length === 1
                                    ? 'starship'
                                    : 'starships'
                                }
                            </>
                        }
                    </div>
                </div>
                <div className="character-item__right-block">
                    <div className="character-item__info">
                        <div><b>Height:</b>&nbsp;{height}</div>
                        <div><b>Mass:</b>&nbsp;{mass}</div>
                        <div><b>Gender:</b>&nbsp;{gender}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface CharacterItemProps {
    height: string
    mass: string
    gender: string
    name: string
    homeworld: string
    films: string[]
    vehicles: string[]
    starships: string[]
}

// name: string
//     height: string
//     mass: string
//     hair_color: string
//     skin_color: string
//     eye_color: string
//     birth_year: string
    
//     homeworld: string
//     created: string
//     edited: string
//     url: string
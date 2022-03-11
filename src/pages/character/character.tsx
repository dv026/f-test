import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Divider } from '../../components'

import { IFilm, IVehicle, IPlanet, IStarship, ICharacter } from '../../interfaces'
import { CharacterService, PlanetService, FilmService, VehicleService, StarshipService } from '../../services'
import { getIdFromUrl } from '../../utils'
import { CharacterInclussions } from './character-incusions'

import './character.scss'

export const Character = () => {
    const [character, setCharacter] = useState<ICharacter>()
    const [planet, setPlanet] = useState<IPlanet>()
    const [films, setFilms] = useState<IFilm[]>([])
    const [vehicles, setVehicles] = useState<IVehicle[]>([])
    const [starships, setStarships] = useState<IStarship[]>([])
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            CharacterService.getCharacter(id).then((response) => {
                setCharacter(response.data)

                const filmPromises = response.data.films.reduce((acc: Promise<AxiosResponse<IFilm>>[], filmUrl) => {
                    acc.push(FilmService.getFilm(getIdFromUrl(filmUrl)))
                    return acc
                }, [])

                const vehiclePromises = response.data.vehicles.reduce((acc: Promise<AxiosResponse<IVehicle>>[], vehicleUrl) => {
                    acc.push(VehicleService.getVehicle(getIdFromUrl(vehicleUrl)))
                    return acc
                }, [])

                const starshipPromises = response.data.starships.reduce((acc: Promise<AxiosResponse<IStarship>>[], vehicleUrl) => {
                    acc.push(StarshipService.getStarship(getIdFromUrl(vehicleUrl)))
                    return acc
                }, [])

                console.log(PlanetService.getPlanet(getIdFromUrl(response.data.homeworld)))
                console.log(filmPromises)

                Promise.all([
                    PlanetService.getPlanet(getIdFromUrl(response.data.homeworld)),
                    Promise.all(filmPromises),
                    Promise.all(vehiclePromises),
                    Promise.all(starshipPromises),
                ])
                .then((response) => {
                    console.log(response)
                    setPlanet(response[0].data)
                    setFilms(response[1].map((elem) => elem.data))
                    setVehicles(response[2].map((elem) => elem.data))
                    setStarships(response[3].map((elem) => elem.data))
                })
            })
        }
    }, [])

    return (
        <div className="character">
            <div className="character__info character__info--basic">
                <img width={180} height={180} src="https://toptos.com.ua/content/images/20/1162x1179l80nn0/chernyy-popsoket-popholder-dlya-telefona-star-wars-51403022908057.jpg" alt="character ..." />
                <div className="character__name">{character?.name}</div>
                <div className="character__planet">{planet?.name}</div>
            </div>
            <div className="character__info character__info--main">
                <CharacterInclussions collection={films} title="Appeared in:" type="films" />
                <CharacterInclussions collection={vehicles} title="Drove:" type="vehicles" />
                <CharacterInclussions collection={starships} title="Flew:" type="starships" />
            </div>
            <div className="character__info character__info--sizes">
                <div><b>Height:</b>&nbsp;{character?.height}</div>
                <div><b>Mass:</b>&nbsp;{character?.mass}</div>
                <div><b>Gender:</b>&nbsp;{character?.gender}</div>
            </div>
            <div className="character__info character__info--extra">
                <div><b>Hair color:</b>&nbsp;{character?.hair_color}</div>
                <Divider type='vertical' />
                <div><b>Skin color:</b>&nbsp;{character?.skin_color}</div>
                <Divider type='vertical' />
                <div><b>Eye color:</b>&nbsp;{character?.eye_color}</div>
                <Divider type='vertical' />
                <div><b>Birth year:</b>&nbsp;{character?.birth_year}</div>
                <Divider type='vertical' />
                <div><b>Created:</b>&nbsp;{new Date(character?.created || '').toLocaleDateString()}</div>
                <Divider type='vertical' />
                <div><b>Edited:</b>&nbsp;{new Date(character?.edited || '').toLocaleDateString()}</div>
            </div>
        </div>
    )
}
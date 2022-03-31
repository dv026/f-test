import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { IFilm, IVehicle, IPlanet, IStarship, ICharacter } from '../../interfaces'
import { CharacterService, PlanetService, FilmService, VehicleService, StarshipService } from '../../services'
import { getIdFromUrl } from '../../utils'
import { CharacterInclussions } from './character-incusions'
import { ExtraInfo } from './extra-info'

import './character.scss'


export const Character = () => {
    const [character, setCharacter] = useState<ICharacter>({} as ICharacter)
    const [planet, setPlanet] = useState<IPlanet>()
    const [films, setFilms] = useState<IFilm[]>([])
    const [vehicles, setVehicles] = useState<IVehicle[]>([])
    const [starships, setStarships] = useState<IStarship[]>([])
    const { id } = useParams();

    useEffect(() => {
        let mounted = true
        if (id) {
            CharacterService.getCharacter(id)
                .then((response) => {
                    if (mounted) {
                        setCharacter(response.data)
                    }

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

                    Promise.all([
                        PlanetService.getPlanet(getIdFromUrl(response.data.homeworld)),
                        Promise.all(filmPromises),
                        Promise.all(vehiclePromises),
                        Promise.all(starshipPromises),
                    ])
                    .then((response) => {
                        if (mounted) {
                            setPlanet(response[0].data)
                            setFilms(response[1].map((elem) => elem.data))
                            setVehicles(response[2].map((elem) => elem.data))
                            setStarships(response[3].map((elem) => elem.data))
                        }
                    })
                })
            .catch(_ => alert('smth went wrong'))
        }
        return () => { mounted = false}
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
                <ExtraInfo {...character} />
            </div>
            <Link to="/" className="character__back">Back</Link>
        </div>
    )
}
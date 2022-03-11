import { ReactElement } from 'react'
import { Main, Character } from '../pages'

export const publicRoutes: IRoute[] = [
    {
        element: Main,
        path:'/'
    },
    {
        element: Character,
        path: '/character/:id'
    }
]

interface IRoute {
    element: () => ReactElement
    path: string
}
import './extra-info.scss'

export const ExtraInfo: React.FC<ExtraInfoProps> = ({ hair_color, skin_color, eye_color, birth_year, created, edited }) => {
    return (
        <div className="extra-info">
            <div><b>Hair&nbsp;color:</b>&nbsp;{hair_color}</div>
            <div><b>Skin&nbsp;color:</b>&nbsp;{skin_color}</div>
            <div><b>Eye&nbsp;color:</b>&nbsp;{eye_color}</div>
            <div><b>Birth&nbsp;year:</b>&nbsp;{birth_year}</div>
            <div><b>Created:</b>&nbsp;{new Date(created || '').toLocaleDateString()}</div>
            <div><b>Edited:</b>&nbsp;{new Date(edited || '').toLocaleDateString()}</div>
        </div>
    )
}

interface ExtraInfoProps {
    hair_color: string
    skin_color: string
    eye_color: string
    birth_year: string
    created: string
    edited: string
}
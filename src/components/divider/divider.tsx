import './divider.scss'

export const Divider: React.FC<DividerProps> = ({
    type
}) => {
    return (
        <>
        {
            type === 'horizontal'
                ? <div className="divider divider--horizontal"></div>
                : <div className="divider divider--vertical"></div>
        }
        </>
    )
}

export type DividerType = 'horizontal' | 'vertical'

interface DividerProps {
    type: DividerType
}
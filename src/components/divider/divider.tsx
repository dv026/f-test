import './divider.scss'

export const Divider: React.FC<DividerProps> = ({
    type,
    className
}) => {
    return (
        <>
        {
            type === 'horizontal'
                ? <div className={`divider divider--horizontal ${className}`}></div>
                : <div className={`divider divider--vertical ${className}`}></div>
        }
        </>
    )
}

export type DividerType = 'horizontal' | 'vertical'

interface DividerProps {
    type: DividerType
    className?: string
}
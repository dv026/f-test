import { CollectionType } from './../../../../interfaces'

export  const ShallowInfo: React.FC<ShallowInfoProps> = ({ collectionLength, type }) => {
    let collectionName = ''
    switch (type) {
        case 'films':
            collectionName = collectionLength === 1
                ? 'film'
                : 'films'
            break
        case 'vehicles':
            collectionName = collectionLength === 1
                ? 'vehicle'
                : 'vehicles'
            break
        case 'starships':
            collectionName = collectionLength === 1
                ? 'starship'
                : 'starships'
            break
    }
    return (
        <>
            {collectionLength > 0
                ? (
                    <div className="shallow-info">
                        &bull;
                        &nbsp;
                        <b>{collectionLength}</b>
                        &nbsp;
                        {collectionName}
                    </div>
                )
                : null
            }
        </>
    )
}

interface ShallowInfoProps {
    collectionLength: number
    type: CollectionType
}
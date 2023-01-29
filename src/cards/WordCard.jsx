import { useState } from 'react'
import './WordCard.css'

const WordCard = ({data}) => {
    const [toUa, setToUa] = useState(false)

    return (
        <button className={'word-card' + ( toUa ? ' word-card--to-ua' : '' )}
        onClick={() => setToUa( !toUa )}>
            <span className="word-card__inner">
                <span className="word-card__word">{data.en}</span>
                <span className="word-card__word">{data.ua}</span>
            </span>
        </button>
    )
}

export default WordCard
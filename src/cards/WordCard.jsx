import './WordCard.css';
import {randomNumber} from '../utils/utils';
import colorsList from '../data/colorsList';

const WordCard = ({data, handleStartDrag}) => {
    const color = colorsList[randomNumber( colorsList.length )]

    const onDragStart = (ev) => {
       ev.currentTarget.classList.add('is-dragging');
       handleStartDrag(ev.currentTarget);
    }

    const onDragEnd = (ev) => {
        ev.currentTarget.classList.remove('is-dragging');
    }

    return (
        <button className="word-card"
            style={{'--bg-color': color}}
            onClick={(ev) => ev.currentTarget.classList.toggle('word-card--to-ua')}
            draggable
            onDragStart={(ev) => onDragStart(ev)}
            onDragEnd={(ev) => onDragEnd(ev)}
            >
            <span className="word-card__inner">
                <span className="word-card__word">{data.en}</span>
                <span className="word-card__word">{data.ua}</span>
            </span>
        </button>
    )
}

export default WordCard
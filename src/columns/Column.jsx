import WordCard from '../cards/WordCard';
import './Column.css';

const Column = ({column, cards, handleDrop, handleStartDrag}) => {
    const onDragOver = (ev) => {
        ev.preventDefault();
        handleDrop(ev.target.closest('.column__cards'), ev.target.closest('.word-card'))
    }

    return (
        <div 
            className="column" 
            style={{
                '--color-bg': column.color
            }}
        >
            <h3>{column.name}</h3>

            <div className="column__cards"
                id={column.id}
                onDragOver={(ev) => onDragOver(ev, column.id)}
            >{cards.length && cards?.map((card, index) => {
                return <WordCard key={index} data={card} handleStartDrag={handleStartDrag} />
            }) || ''}</div>
        </div>
    )
}

export default Column;
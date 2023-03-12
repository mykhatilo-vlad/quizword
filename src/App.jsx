import {useRef, useState}  from 'react';
import './App.css'
import columns from './data/columns';
import words from './data/words';
import Column from './columns/Column';

function App() {
  const cardRef = useRef(null);

  const handleDrop = (column, card) => {
   column.insertBefore(cardRef.current, card)
  }

  const handleStartDrag = (card) => {
    cardRef.current = card;
  }

  return (
    <div className="App">
      <div className="columns" style={{'--cols': columns.length}}>
        {columns && columns.map((column) => {
          return <Column 
            key={column.id} 
            column={column} 
            handleDrop={handleDrop}
            cards={words.filter(word => word.column === column.id) || []} 
            handleStartDrag={handleStartDrag}
          />
        })}
      </div>
    </div>
  )
}

export default App

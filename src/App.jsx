import {useRef}  from 'react';
import './App.css'
import columns from './data/columns';
import words from './data/words';
import Column from './columns/Column';

function App() {
  const cardRef = useRef(null);
  const columnsRef = useRef(null);
  let grabbing = false;
  let appOffset = root.offsetLeft;
  let scrolled = 0;
  let clientX = 0;


  const handleDrop = (column, card) => {
      column.insertBefore(cardRef.current, card)
  }

  const handleStartDrag = (card) => {
    cardRef.current = card;
  }

  const handleMouseDown = (ev) => {
    if(!ev.target.closest('.word-card') && !ev.target.closest('h3')) {
      ev.preventDefault();
      columnsRef.current = ev.target.closest('.columns');
      columnsRef.current.classList.add('grabbing');
      grabbing = true;
      appOffset = root.offsetLeft;
      scrolled = columnsRef.current.scrollLeft;
      clientX = ev.clientX;
    }
  }

  const handleMouseUp = () => {
    grabbing = false;
    if(columnsRef.current) {
      columnsRef.current.classList.remove('grabbing');
    }
  }

  document.addEventListener('mouseup', handleMouseUp);

  const handleMouseMove = (ev) => {
    if(grabbing) {
      const x = clientX - ev.clientX;
      columnsRef.current.scrollLeft = ( x - appOffset ) + scrolled;
    }
  }


  return (
    <div className="App">
      <div 
        className="columns" 
        onMouseDown={handleMouseDown} 
        onMouseMove={handleMouseMove}
        style={{'--cols': columns.length}}
      >
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

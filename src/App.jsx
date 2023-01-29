import { useState, useEffect } from 'react'
import './App.css'
import words from './data/words'
import WordCard from './cards/WordCard' 

function App() {
  const [list, setList] = useState(words)

  return (
    <div className="App">
      <div className="cards-grid">
        {list.map((word, index) => {
          return <WordCard key={index} data={word} />
        })}
      </div>
    </div>
  )
}

export default App

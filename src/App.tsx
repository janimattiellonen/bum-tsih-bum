import { useState, useCallback } from 'react'
import './App.css'

const SONGS = [
  'Har du sett min apa',
  'Minns du en sjöman för länge',
  'Och nu så vill jag sjunga',
  'är minsann en sjusärdeles karl',
]

function shuffle<T>(array: T[]): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

type GameState =
  | { screen: 'intro' }
  | {
      screen: 'playing'
      songOrder: string[]
      songIndex: number
      revealedBoxes: Set<number>
    }

function App() {
  const [state, setState] = useState<GameState>({ screen: 'intro' })

  const startGame = useCallback(() => {
    const songOrder = shuffle(SONGS)
    setState({
      screen: 'playing',
      songOrder,
      songIndex: 0,
      revealedBoxes: new Set(),
    })
  }, [])

  const newGame = useCallback(() => {
    setState((prev) => {
      if (prev.screen !== 'playing') return prev

      const nextIndex = prev.songIndex + 1
      if (nextIndex < prev.songOrder.length) {
        return {
          ...prev,
          songIndex: nextIndex,
          revealedBoxes: new Set(),
        }
      }

      const songOrder = shuffle(SONGS)
      return {
        screen: 'playing',
        songOrder,
        songIndex: 0,
        revealedBoxes: new Set(),
      }
    })
  }, [])

  const revealBox = useCallback((index: number) => {
    setState((prev) => {
      if (prev.screen !== 'playing') return prev
      const revealedBoxes = new Set(prev.revealedBoxes)
      revealedBoxes.add(index)
      return { ...prev, revealedBoxes }
    })
  }, [])

  if (state.screen === 'intro') {
    return (
      <div className="game">
        <div className="intro">
          <h1>Bum tsih bum!</h1>
          <button className="btn" onClick={startGame}>
            Börja
          </button>
        </div>
      </div>
    )
  }

  const currentSong = state.songOrder[state.songIndex]
  const words = currentSong.split(' ')

  return (
    <div className="game">
      <h1>Bum tsih bum!</h1>
      <div className="boxes">
        {words.map((word, i) => {
          const isRevealed = state.revealedBoxes.has(i)
          return (
            <button
              key={i}
              className={`box ${isRevealed ? 'box--revealed' : ''}`}
              onClick={() => revealBox(i)}
              disabled={isRevealed}
            >
              {isRevealed ? word : i + 1}
            </button>
          )
        })}
      </div>
      <button className="btn" onClick={newGame}>
        Nytt spel
      </button>
    </div>
  )
}

export default App

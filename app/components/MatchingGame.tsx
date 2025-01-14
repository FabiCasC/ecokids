import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

const cards = [
  { id: 1, content: '🚗', matched: false },
  { id: 2, content: '🚲', matched: false },
  { id: 3, content: '💡', matched: false },
  { id: 4, content: '🌳', matched: false },
  { id: 5, content: '♻️', matched: false },
  { id: 6, content: '🍎', matched: false },
  { id: 7, content: '🚗', matched: false },
  { id: 8, content: '🚲', matched: false },
  { id: 9, content: '💡', matched: false },
  { id: 10, content: '🌳', matched: false },
  { id: 11, content: '♻️', matched: false },
  { id: 12, content: '🍎', matched: false },
]

export default function MatchingGame({ onWin }: { onWin: () => void }) {
  const [shuffledCards, setShuffledCards] = useState(() => [...cards].sort(() => Math.random() - 0.5))
  const [selectedCards, setSelectedCards] = useState<number[]>([])
  const [disabled, setDisabled] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)

  useEffect(() => {
    if (selectedCards.length === 2) {
      setDisabled(true) // Bloquear interacciones mientras se procesa la selección

      const [first, second] = selectedCards
      const isMatch = shuffledCards[first].content === shuffledCards[second].content

      setTimeout(() => {
        setShuffledCards(prev =>
          prev.map((card, index) =>
            index === first || index === second ? { ...card, matched: isMatch } : card
          )
        )
        setSelectedCards([]) // Reiniciar selección
        setDisabled(false) // Habilitar interacciones nuevamente
      }, 1000)
    }
  }, [selectedCards, shuffledCards])

  useEffect(() => {
    if (shuffledCards.every(card => card.matched)) {
      setGameCompleted(true)
      onWin()
    }
  }, [shuffledCards, onWin])

  const handleCardClick = (index: number) => {
    if (!disabled && selectedCards.length < 2 && !shuffledCards[index].matched) {
      setSelectedCards(prev => [...prev, index])
    }
  }

  const resetGame = () => {
    setShuffledCards([...cards].sort(() => Math.random() - 0.5))
    setSelectedCards([])
    setGameCompleted(false)
    setDisabled(false)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-6">
        {shuffledCards.map((card, index) => (
          <Button
            key={card.id}
            onClick={() => handleCardClick(index)}
            disabled={card.matched || selectedCards.includes(index) || disabled}
            className={`h-24 md:h-32 text-4xl md:text-5xl transition-all duration-300 ${
              card.matched ? 'bg-green-300' : 
              selectedCards.includes(index) ? 'bg-yellow-300' : 
              'bg-blue-300 hover:bg-blue-400'
            }`}
          >
            {selectedCards.includes(index) || card.matched ? card.content : '?'}
          </Button>
        ))}
      </div>
      {gameCompleted && (
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">¡Felicidades! Has completado el juego</h3>
          <p className="text-lg mb-4">
            🌟 Has ganado una estrella de premio por tu memoria excepcional. 
            Recuerda que cada símbolo representa una acción que puede afectar nuestra huella de carbono.
            ¡Sigamos aprendiendo cómo cuidar nuestro planeta!
          </p>
          <Button onClick={resetGame} className="eco-button">Jugar de nuevo</Button>
        </div>
      )}
    </div>
  )
}

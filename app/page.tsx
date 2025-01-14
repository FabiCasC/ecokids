'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import ExplanationSection from './components/ExplanationSection'
import MatchingGame from './components/MatchingGame'
import ScoreTable from './components/ScoreTable'
import Instructions from './components/Instructions'
import CarbonFootprintForm from './components/CarbonFootprintForm'
import { Navbar } from './components/Navbar'

export default function Home() {
  const [showStar, setShowStar] = useState(false)

  const handleGameWin = () => {
    setShowStar(true)
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-green-100 to-blue-100 min-h-screen">
      <Navbar />
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-24 mt-12 text-primary">
        Matemática: ¡Salvemos el Planeta!
      </h1>

      <section className="my-32 text-center" id="que-es">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-secondary">¿Qué es la Huella de Carbono?</h2>
        <p className="text-lg mb-8">
          La huella de carbono es la cantidad total de gases de efecto invernadero que producimos en nuestra vida diaria. 
          ¡Descubre cómo tus acciones afectan al planeta y aprende a reducir tu impacto!
        </p>
        <div className="flex justify-center items-center space-x-4">
          <Button variant="outline" className="eco-button text-lg px-6 py-3" onClick={() => window.location.href = '#calculadora'}>
            Calcula tu Huella
          </Button>
          <Button variant="outline" className="eco-button text-lg px-6 py-3" onClick={() => window.location.href = '#juego'}>
            Juega y Aprende
          </Button>
        </div>
      </section>
      
      <ExplanationSection />
      
      <section className="my-32 text-center" id="juego">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-secondary">¡Juguemos y aprendamos sobre la huella de carbono!</h2>
        <p className="text-lg mb-8">
          ¿Estás listo para poner a prueba tus conocimientos sobre el medio ambiente? 
          Juega nuestro divertido juego de memoria y descubre cómo pequeñas acciones pueden tener un gran impacto en nuestro planeta.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="eco-button text-lg px-6 py-3">¡Comencemos a jugar!</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[90vw] md:max-w-[600px] w-full eco-card">
            <MatchingGame onWin={handleGameWin} />
          </DialogContent>
        </Dialog>
        {showStar && <span className="ml-4 text-4xl">🌟</span>}
      </section>

      <div id="tabla" className="my-32">
        <ScoreTable />
      </div>
      <div id="instrucciones" className="my-32">
        <Instructions />
      </div>
      <div id="calculadora" className="my-32">
        <CarbonFootprintForm />
      </div>
    </div>
  )
}

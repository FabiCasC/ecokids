'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function CarbonFootprintForm() {
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    let totalScore = 0

    totalScore += parseInt(formData.get('lightUsage') as string) * 2
    totalScore += parseInt(formData.get('tvUsage') as string) * 3
    totalScore += formData.get('transport') === 'car' ? 5 : 0
    totalScore += formData.get('meatConsumption') === 'yes' ? 5 : 0
    totalScore += formData.get('recycling') === 'yes' ? -2 : 0

    setScore(totalScore)
    setShowResults(true)

    if (totalScore <= 10) {
      console.log('¡Excelente! 🌟 Tu huella de carbono es baja. ¡Eres un superhéroe del planeta! Sigue así y enseña a otros.')
    }
  }

  const chartData = {
    labels: ['Tu huella', 'Huella ideal'],
    datasets: [
      {
        data: [score, Math.max(0, 30 - score)],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  }

  return (
    <Card className="w-full max-w-4xl mx-auto eco-card my-16">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Calcula tu Huella de Carbono</CardTitle>
        <CardDescription>Completa el formulario para descubrir tu impacto ambiental</CardDescription>
      </CardHeader>
      <CardContent>
        {!showResults ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="lightUsage" className="text-lg">¿Cuántas horas usaste la luz hoy? 💡</Label>
                <Select name="lightUsage">
                  <SelectTrigger id="lightUsage" className="eco-input">
                    <SelectValue placeholder="Selecciona las horas" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="1">1 hora</SelectItem>
                    <SelectItem value="2">2-3 horas</SelectItem>
                    <SelectItem value="3">Más de 3 horas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="tvUsage" className="text-lg">¿Cuántas horas viste TV hoy? 📺</Label>
                <Select name="tvUsage">
                  <SelectTrigger id="tvUsage" className="eco-input">
                    <SelectValue placeholder="Selecciona las horas" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="1">Menos de 1 hora</SelectItem>
                    <SelectItem value="2">1-3 horas</SelectItem>
                    <SelectItem value="3">Más de 3 horas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-lg">¿Cómo te transportaste hoy? 🚗🚲🚶‍♂️</Label>
                <RadioGroup defaultValue="walk" name="transport" className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="walk" id="walk" />
                    <Label htmlFor="walk">Caminé</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bike" id="bike" />
                    <Label htmlFor="bike">Usé bicicleta</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="car" id="car" />
                    <Label htmlFor="car">Usé auto</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label className="text-lg">¿Comiste carne roja hoy? 🥩</Label>
                <RadioGroup defaultValue="no" name="meatConsumption" className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="meat-yes" />
                    <Label htmlFor="meat-yes">Sí</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="meat-no" />
                    <Label htmlFor="meat-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label className="text-lg">¿Reciclaste hoy? ♻️</Label>
                <RadioGroup defaultValue="no" name="recycling" className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="recycle-yes" />
                    <Label htmlFor="recycle-yes">Sí</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="recycle-no" />
                    <Label htmlFor="recycle-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <Button type="submit" className="eco-button w-full">Calcular mi huella de carbono</Button>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold mb-4">Tu huella de carbono: {score} puntos</h3>
            <div className="w-64 h-64 mx-auto mb-8">
              <Doughnut data={chartData} />
            </div>
            <p className="text-xl mb-6">
              {score <= 10
                ? "¡Excelente! 🌟 Tu huella de carbono es baja. ¡Eres un superhéroe del planeta! Sigue así y enseña a otros."
                : score <= 20
                ? "¡Buen trabajo! 🌱 Tu huella de carbono es moderada. Con pequeños cambios, puedes mejorar aún más."
                : "¡Ánimo! 🌍 Tu huella de carbono es alta, pero no te preocupes. Aquí tienes algunas ideas para reducirla:"}
            </p>
            {score > 20 && (
              <ul className="list-disc list-inside text-left space-y-2 mb-6">
                <li>Apaga las luces cuando no las uses</li>
                <li>Usa más la bicicleta o camina</li>
                <li>Come más frutas y verduras</li>
                <li>Recicla todo lo que puedas</li>
              </ul>
            )}
            <Button onClick={() => setShowResults(false)} className="eco-button">Calcular de nuevo</Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}


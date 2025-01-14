import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Instructions() {
  return (
    <Card className="my-16 eco-card">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Instrucciones</CardTitle>
        <CardDescription>Cómo calcular tu huella de carbono</CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="list-decimal list-inside space-y-2">
          <li>Lee cuidadosamente cada pregunta en el formulario. 📖</li>
          <li>Selecciona la opción que mejor describa tus actividades del día. 🤔</li>
          <li>Si no estás seguro, elige la opción más cercana a tu situación. 🤷‍♂️</li>
          <li>Una vez que hayas respondido todas las preguntas, haz clic en "Calcular". 🖱️</li>
          <li>Revisa tus resultados y las recomendaciones para reducir tu huella de carbono. 🌿</li>
        </ol>
      </CardContent>
    </Card>
  )
}


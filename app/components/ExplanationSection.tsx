import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function ExplanationSection() {
  return (
    <section className="my-16" id="acerca">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">Acerca de la Huella de Carbono</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="eco-card">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">¿Qué es?</h3>
            <p className="text-lg mb-4">
              La huella de carbono es como las huellas que dejamos en la arena, ¡pero invisibles! 
              Son los gases que producimos con nuestras actividades diarias y que afectan al planeta.
            </p>
            <p className="text-lg">
              Cada vez que usamos electricidad, viajamos en carro o comemos, estamos dejando nuestra huella. 
              ¡Aprender sobre esto nos ayuda a cuidar mejor nuestro hogar: la Tierra!
            </p>
          </CardContent>
        </Card>
        <Card className="eco-card">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">¿Por qué es importante?</h3>
            <p className="text-lg mb-4">
              Reducir nuestra huella de carbono es como ser un superhéroe del planeta. 
              Pequeñas acciones como apagar las luces cuando no las usamos, caminar en lugar de usar el carro para distancias cortas, 
              o comer más frutas y verduras pueden hacer una gran diferencia.
            </p>
            <p className="text-lg">
              Al entender y reducir nuestra huella de carbono, ayudamos a combatir el cambio climático y protegemos nuestro planeta para las futuras generaciones.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 flex justify-center">
        <Image 
          src="/imagen.jpg" 
          alt="Huella de carbono" 
          width={300} 
          height={300} 
          className="rounded-full shadow-lg" 
        />
      </div>
      </section>
  )
}


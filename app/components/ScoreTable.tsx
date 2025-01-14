import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function ScoreTable() {
  return (
    <div className="eco-card my-16 overflow-x-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Tabla de Actividades y Puntos</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg">Categoría</TableHead>
              <TableHead className="text-lg">Actividad</TableHead>
              <TableHead className="text-lg">Puntos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Energía en Casa</TableCell>
              <TableCell>Usar lámpara (1 hora)</TableCell>
              <TableCell>2 puntos</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Energía en Casa</TableCell>
              <TableCell>Ver TV (1 hora)</TableCell>
              <TableCell>3 puntos</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Transporte</TableCell>
              <TableCell>Caminar</TableCell>
              <TableCell>0 puntos</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Transporte</TableCell>
              <TableCell>Usar auto (1 viaje)</TableCell>
              <TableCell>5 puntos</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Alimentación</TableCell>
              <TableCell>Comer carne roja (por comida)</TableCell>
              <TableCell>5 puntos</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hábitos Ecológicos</TableCell>
              <TableCell>Reciclar (botellas, papel, etc.)</TableCell>
              <TableCell>-2 puntos</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}


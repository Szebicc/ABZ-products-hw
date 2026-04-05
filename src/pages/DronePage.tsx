import { useParams, Link } from "react-router"
import { drones, getDroneWithDetails } from "@/lib/data"
import { formatKey, formatValue, getImportantKeys } from "@/lib/format"
import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"

export default function DronePage() {
  const { id } = useParams()

  const drone = drones.find((d) => d.id === id)

  if (!drone) {
    return <div className="p-6">Drone not found</div>
  }

  const detailed = getDroneWithDetails(drone)
  const importantKeys = getImportantKeys(drone.series)

  return (
    <div>
      <Header />
      <div className="mx-auto max-w-4xl space-y-6 p-6">
        <Link to="/">
          <Button variant="outline" size="sm" className="bg-orange-500">
            &larr; 
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">{drone.name}</h1>
          <p className="text-muted-foreground">{drone.subtitle}</p>
          <img
            src={`/src/assets/${drone.id}.webp`}
            alt={drone.name}
            className="h40 w-full rounded-md object-cover"
          />
        </div>

        {/* Ideal for */}
        <div>
          <h2 className="font-semibold">Best for</h2>
          <p>{drone.ideal_for}</p>
        </div>

        {/* Key Specs */}
        <div>
          <h2 className="mb-2 font-semibold">Key Performance</h2>

          <div className="space-y-2">
            {importantKeys.map((key) => {
              const value = drone.specs[key as keyof typeof drone.specs]
              if (!value) return null

              return (
                <div key={key} className="flex justify-between">
                  <span>{formatKey(key)}</span>
                  <span className="font-medium">{formatValue(key, value)}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* All specs */}
        <div>
          <h2 className="mb-2 font-semibold">All Specifications</h2>

          <div className="space-y-2 text-sm">
            {Object.entries(drone.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="text-muted-foreground">{formatKey(key)}</span>
                <span>{formatValue(key, value)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accessories */}
        <div>
          <h2 className="font-semibold">Accessories</h2>
          {detailed.accessories.map((a) => (
            <p key={a.id}>{a.name}</p>
          ))}
        </div>

        {/* Use cases */}
        <div>
          <h2 className="font-semibold">Use Cases</h2>
          {detailed.useCases.map((u) => (
            <p key={u.id}>{u.name}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

import { drones } from "@/lib/data"
import { DroneCard } from "@/components/drones/DroneCard"
import type { Drone } from "@/types"

export default function Home() {

  const grouped = drones.reduce((acc, drone) => {
    if (!acc[drone.series]) acc[drone.series] = []
    acc[drone.series].push(drone)
    return acc
  }, {} as Record<string, Drone[]>)

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
      {Object.entries(grouped).map(([series, list]) => (
        <div key={series}>
          <h2 className="text-2xl font-bold mb-4">
            {series}-Series
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {list.map(drone => (
              <DroneCard
                key={drone.id}
                drone={drone}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
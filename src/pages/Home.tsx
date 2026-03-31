import { useState } from "react"
import { drones } from "@/lib/data"
import { DroneCard } from "@/components/drones/DroneCard"
import type { Drone } from "@/types"

export default function Home() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const grouped = drones.reduce(
    (acc, drone) => {
      if (!acc[drone.series]) acc[drone.series] = []
      acc[drone.series].push(drone)
      return acc
    },
    {} as Record<string, Drone[]>
  )

  return (
    <div className="mx-auto max-w-6xl space-y-10 p-6">
      {Object.entries(grouped).map(([series, list]) => (
        <div key={series}>
          <h2 className="mb-4 text-2xl font-bold">{series}-Series</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 items-start">
            {list.map((drone) => (
              <DroneCard
                key={drone.id}
                drone={drone}
                expanded={expandedId === drone.id}
                onToggle={() => {
                  setExpandedId((prev) => (prev === drone.id ? null : drone.id))
                  setTimeout(() => {
                    document.getElementById(drone.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }, 0)
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

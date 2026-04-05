import { DroneCard } from "@/components/drones/DroneCard"
import MultipleSelection from "@/components/filters/multipleSelection"
import { drones, seriesSimple } from "@/lib/data"
import type { Drone, SeriesId } from "@/types"
import { useState } from "react"

export default function Home() {
  const seriesCategories = seriesSimple.map((s) => s.category)

  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [selectedSeries, setSelectedSeries] = useState<SeriesId[]>([])

  const filteredDrones =
    selectedSeries.length > 0
      ? drones.filter((d) => selectedSeries.includes(d.series))
      : drones

  const grouped = filteredDrones.reduce(
    (acc, drone) => {
      if (!acc[drone.series]) acc[drone.series] = []
      acc[drone.series].push(drone)
      return acc
    },
    {} as Record<string, Drone[]>
  )

  return (
    <div className="mx-auto max-w-6xl space-y-10 p-6">
      <div>
        <MultipleSelection
          items={seriesCategories}
          onChange={(value: string[]) => {
            const tempFilteredSeries = seriesSimple
              .filter((s) => value.includes(s.category))
              .map((s) => s.id)
            setSelectedSeries(tempFilteredSeries)
          }}
          inputPlaceholder={
            selectedSeries.length === 0 ? "Filter by series..." : ""
          }
        />
      </div>

      {Object.entries(grouped).map(([series, list]) => (
        <div key={series}>
          <h2 className="mb-4 text-2xl font-bold">{series}-Series</h2>

          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3">
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

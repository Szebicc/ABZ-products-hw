import { useParams, useNavigate } from "react-router"
import { drones, getDroneWithDetails } from "@/lib/data"
import { formatKey, formatValue } from "@/lib/format"
import { Header } from "@/components/layout/Header"
import { Button } from "@/components/ui/button"

export default function DronePage() {
  const { id } = useParams()
  const drone = drones.find((d) => d.id === id)
  const navigate = useNavigate()

  if (!drone) {
    return <div className="p-6">Drone not found</div>
  }

  const detailed = getDroneWithDetails(drone)

  return (
    <div>
      <Header />

      <div className="mx-auto max-w-5xl space-y-10 px-6 py-10">
        <Button
          variant="outline"
          size="sm"
          className="mb-4 inline-block text-orange-500"
          onClick={() => navigate(-1)}
        >
          ← Back
        </Button>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border">
            <img
              src={`/src/assets/${drone.id}.webp`}
              alt={drone.name}
              className="h-[300px] w-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              {drone.name}
            </h1>

            <p className="text-muted-foreground">{drone.subtitle}</p>

            <div>
              <h2 className="text-sm font-semibold text-muted-foreground">
                BEST FOR
              </h2>
              <p className="text-base">{drone.ideal_for}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold">Specifications</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
            {Object.entries(drone.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b pb-1">
                <span className="text-muted-foreground">{formatKey(key)}</span>
                <span className="text-right font-medium">
                  {formatValue(key, value)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 🧩 ACCESSORIES + USE CASES */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Accessories */}
          <div className="rounded-xl border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">
              Compatible Accessories
            </h2>

            <div className="space-y-3">
              {detailed.accessories.map((a) => (
                <div
                  key={a.id}
                  className="rounded-lg border p-3 transition hover:bg-muted/50"
                >
                  <p className="font-medium">{a.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="rounded-xl border bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">Use Cases</h2>

            <ul className="space-y-2 text-sm">
              {detailed.useCases.map((u) => (
                <li key={u.id} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {u.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

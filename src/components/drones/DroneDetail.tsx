import type { Drone } from "@/types"
import { getDroneWithDetails } from "@/lib/data"

export function DroneDetail({ drone }: { drone: Drone }) {
  const detailed = getDroneWithDetails(drone)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">{drone.name}</h2>
        <p className="text-muted-foreground">{drone.subtitle}</p>
      </div>

      {/* Ideal for */}
      <div>
        <h3 className="font-semibold">Best for</h3>
        <p>{drone.ideal_for}</p>
      </div>

      {/* Key Specs */}
      <div>
        <h3 className="font-semibold">Key Specs</h3>
        <pre className="text-sm">
          {JSON.stringify(drone.specs, null, 2)}
        </pre>
      </div>

      {/* Accessories */}
      <div>
        <h3 className="font-semibold">Accessories</h3>
        {detailed.accessories.map(a => (
          <p key={a.id}>{a.name}</p>
        ))}
      </div>

      {/* Use cases */}
      <div>
        <h3 className="font-semibold">Use Cases</h3>
        {detailed.useCases.map(u => (
          <p key={u.id}>{u.name}</p>
        ))}
      </div>
    </div>
  )
}
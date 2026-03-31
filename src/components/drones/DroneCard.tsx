import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { KeySpecs } from "./KeySpecs"
import type { Drone } from "@/types"
import { getDroneWithDetails } from "@/lib/data"

export function DroneCard({ drone }: { drone: Drone }) {
  const [expanded, setExpanded] = useState(false)

  const detailed = getDroneWithDetails(drone)

  const formatKey = (key: string) =>
  key.replaceAll("_", " ")

  return (
    <Card className="transition hover:shadow-lg">
      <CardContent className="space-y-3 p-4">
     <div className="space-y-1">
        <h3 className="text-lg font-semibold">{drone.name}</h3>
        <p className="text-muted-foreground text-sm">
          {drone.subtitle}
        </p>  
     </div>
     <Badge>{drone.series}-Series</Badge>
     <KeySpecs drone={drone} />
     <p className="text-xs text-muted-foreground">
       {drone.ideal_for}
      </p>
      <Button
      variant= "outline"
      size="sm"
      onClick={() => setExpanded(prev => !prev)}
      >
        {expanded ? "Hide Details" : "View Details"}
      </Button>
        {expanded && (
          <div className="pt-4 space-y-4 border-t animate-in fade-in">
            <div>
              <h4 className="front-semibold">Specifications</h4>
              <div className="text-sm space-y-1">
                {Object.entries(drone.specs).map(([key, value]) => (
                  <div key={key}>
                    <span className="font-medium">{formatKey(key)}:</span>{" "}
                    {
                    typeof value == "object"
                    ? JSON.stringify(value)
                    : String(value)
                    }
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Accessories</h4>
              {detailed.accessories.map(u => (
                <p key={u.id} className="text-sm">
                  {u.name}
                </p>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

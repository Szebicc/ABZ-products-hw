import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { KeySpecs } from "./KeySpecs"
import type { Drone } from "@/types"
import { getDroneWithDetails } from "@/lib/data"
import { formatKey, formatValue } from "@/lib/format"
import { Link } from "react-router"

export function DroneCard({ 
  drone,
  expanded,
  onToggle,
 }: { 
  drone: Drone
  expanded: boolean
  onToggle: () => void 
}) {

  const detailed = getDroneWithDetails(drone)


  return (
    <Card className="transition hover:shadow-lg border-2 border-transparent hover:border-primary" id={drone.id}>
      <CardContent className="space-y-3 p-4">
     <div className="space-y-1">
        <h3 className="text-lg font-semibold">{drone.name}</h3>
        <Link to={`/drones/${drone.id}`} className="text-primary hover:underline">
          Read more
        </Link>
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
      className="hover:bg-primary hover:text-white hover:border-primary transition-colors" 
      size="sm"
      onClick={onToggle}
      >
        {expanded ? "Hide Details" : "View Details"}
      </Button>
        {expanded && (
          <div className="pt-4 space-y-4 border-t animate-in fade-in">
            <div>
              <h4 className="front-semibold">Specifications</h4>
              <div className="text-sm space-y-1">
                {Object.entries(drone.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between gap-4">
                    <span className="text-muted-foreground">
                      {formatKey(key)}:
                      </span>{" "}
                    <span className="font-medium text-right">
                      {formatValue(key, value)}
                      </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Accessories</h4>
              <ul>
                {detailed.accessories.map(u => (
                  <li key={u.id} className="list-disc list-inside text-sm">
                    {u.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

import type { Drone } from "@/types"

export function KeySpecs({ drone }: { drone: Drone }) {
  switch (drone.series) {
    case "L":
      return (
        <p className="text-sm">
          {drone.specs.coverage_per_hour_hectares} ha/h •{" "}
          {drone.specs.tank_capacity_liters}L tank
        </p>
      )

    case "S":
      return (
        <p className="text-sm">
          {drone.specs.distribution_rate_kg_per_hour} kg/h •{" "}
          {drone.specs.hopper_capacity_liters}L hopper
        </p>
      )

    case "M":
      return (
        <p className="text-sm">
          {drone.specs.payload_capacity_kg}kg payload •{" "}
          {drone.specs.flight_time_minutes.min}-
          {drone.specs.flight_time_minutes.max} min
        </p>
      )

    case "C":
      return (
        <p className="text-sm">
          {drone.specs.max_height_meters}m •{" "}
          {drone.specs.pressure_bar} bar
        </p>
      )

    default:
      return null
  }
}
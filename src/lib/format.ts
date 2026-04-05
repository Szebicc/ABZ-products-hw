// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatValue(key: string, value: any): string {
  if (value === null || value === undefined) return ""

  switch (key) {
    case "coverage_per_hour_hectares":
    case "coverage_per_takeoff_hectares":
      return `${value} ha/hour`

    case "tank_capacity_liters":
    case "hopper_capacity_liters":
      return `${value} L`

    case "payload_capacity_kg":
      return `${value} kg`

    case "pressure_bar":
      return `${value} bar`

    case "max_height_meters":
      return `${value} m`

    case "flow_rate_liters_per_hour":
      return `${value} L/hour`

    case "distribution_rate_kg_per_hour":
      return `${value} kg/hour`

    case "working_width_meters":
    case "spreading_width_meters":
      return `${value.min}–${value.max} m`

    case "flight_time_minutes":
      return `${value.min}–${value.max} min`

    case "granule_size_mm":
      return `${value.min}–${value.max} Mm`

    default:
      if (Array.isArray(value)) return value.join(", ")
      if (typeof value === "object") return JSON.stringify(value)

      return String(value)
  }
}

export function formatKey(key: string) {
  const cleaned = key
    .replace(/_(kg|liters|meters|hectares|bar|minutes|per_hour|capacity|width|height|rate|flow|pressure|time|Mm)$/, "")
    .replaceAll("_", " ")
    .replace(/\b\w/g, l => l.toUpperCase())

  return cleaned
}

export function getImportantKeys(series: string): string[] {
  switch (series) {
    case "L":
      return [
        "coverage_per_hour_hectares",
        "tank_capacity_liters",
        "working_width_meters",
      ]

    case "S":
      return [
        "distribution_rate_kg_per_hour",
        "hopper_capacity_liters",
      ]

    case "M":
      return [
        "payload_capacity_kg",
        "flight_time_minutes",
      ]

    case "C":
      return [
        "max_height_meters",
        "pressure_bar",
      ]

    default:
      return []
  }
}
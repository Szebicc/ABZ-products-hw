import rawData from "../data/drones.json"
import type { Drone, ProductSeries, Accessory, UseCase } from "@/types"

export const drones = rawData.drones as Drone[]
export const series = rawData.product_series as ProductSeries[]
export const accessories: Accessory[] = rawData.accessories
export const useCases: UseCase[] = rawData.use_cases

export function getSeries(seriesId: string) {
  return series.find(s => s.id === seriesId)
}

export function getDronesBySeries(seriesId: string) {
  return drones.filter(d => d.series === seriesId)
}

export function getAccessoriesForDrone(droneId: string) {
  return accessories.filter(a =>
    a.compatible_with.includes(droneId)
  )
}

export function getUseCasesForDrone(droneId: string) {
  return useCases.filter(u =>
    u.recommended_drones.includes(droneId)
  )
}

export function getDroneWithDetails(drone: Drone) {
  return {
    ...drone,
    seriesInfo: getSeries(drone.series),
    accessories: getAccessoriesForDrone(drone.id),
    useCases: getUseCasesForDrone(drone.id),
  }
}
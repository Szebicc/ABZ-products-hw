export interface MinMax {
  min: number;
  max: number;
}

export interface MinMaxNote extends MinMax {
  note: string;
}

export type SeriesId = 'L' | 'S' | 'M' | 'C';


export interface SprayingSpecs {
  tank_capacity_liters: number;
  coverage_per_hour_hectares: number;
  working_width_meters: MinMax;
  obstacle_detection: string;
  low_drift_settings: boolean;
  flight_planning: string;
  certifications: string[];
  coverage_per_takeoff_hectares?: number;
  positioning?: string;
  camera?: string;
  max_liquid_flow_liters_per_min?: number;
  operating_cost_eur_per_hectare?: number;
  transport?: string;
  terrain_follow?: string;
  tank_swap?: string;
}

export interface SpreadingSpecs {
  hopper_capacity_liters: number;
  distribution_rate_kg_per_hour: number;
  spreading_width_meters: MinMax;
  granule_size_mm: MinMax;
  flight_paths: string;
  flow_control: string;
  certifications: string[];
  obstacle_detection?: string;
}

export interface MultifunctionalSpecs {
  payload_capacity_kg: number;
  flight_time_minutes: MinMaxNote;
  communication_ports: string[];
  power_outputs: string[];
  frame: string;
  mounting: string;
  software: string;
  certifications: string[];
  maintenance?: string;
}

export interface CleaningSpecs {
  max_height_meters: number;
  flow_rate_liters_per_hour: number;
  pressure_bar: number;
  distance_control: string;
  certifications: string[];
}

interface BaseDrone {
  id: string;
  name: string;
  subtitle: string;
  ideal_for: string;
  compatible_accessories: string[];
}

export interface SprayingDrone extends BaseDrone {
  series: 'L'; 
  specs: SprayingSpecs;
  special_capabilities?: string[];
}

export interface SpreadingDrone extends BaseDrone {
  series: 'S'; 
  specs: SpreadingSpecs;
  material_types?: string[];
}

export interface MultifunctionalDrone extends BaseDrone {
  series: 'M'; 
  specs: MultifunctionalSpecs;
}

export interface CleaningDrone extends BaseDrone {
  series: 'C'; 
  specs: CleaningSpecs;
}

export type Drone = SprayingDrone | SpreadingDrone | MultifunctionalDrone | CleaningDrone;


export interface ProductSeries {
  id: SeriesId;
  name: string;
  category: string;
  tagline: string;
  description: string;
  primary_use_cases: string[];
  target_customers: string[];
}

export interface Accessory {
  id: string;
  name: string;
  description: string;
  compatible_with: string[]; // Drone ID-k
}

export interface UseCase {
  id: string;
  name: string;
  description: string;
  recommended_drones: string[]; // Drone ID-k
  considerations: string;
}

export interface Company {
  name: string;
  tagline: string;
  description: string;
  certifications: string[];
  headquarters: string;
  website: string;
  brand_colors: {
    primary: string;
    dark: string;
    text: string;
  };
}
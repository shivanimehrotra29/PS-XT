export interface IMissionData {
  mission_name: string;
  mission_id: string[];
  flight_number: number;
  launch_year: number;
  launch_success: boolean;
  land_success: boolean;
  links: {
    mission_patch_small: string;
  };
}

export interface IFilterData {
  year: number;
  launch_success: boolean;
  land_success: boolean;
}

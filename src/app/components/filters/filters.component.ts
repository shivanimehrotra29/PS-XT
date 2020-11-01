import { Component, OnInit } from "@angular/core";
import { IFilterData } from "src/app/models/dashboard.interface";
import { DashboardService } from "src/app/services/dashboard.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"],
})
export class FiltersComponent implements OnInit {
  filterList: number[] = [];
  filterData = {} as IFilterData;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    for (let i = 2006; i <= 2020; i++) {
      this.filterList.push(i);
    }
  }

  filterMissionsByYear(year: number) {
    if (this.filterData.year === year) {
      this.filterData.year = undefined;
    } else {
      this.filterData.year = year;
    }

    this.dashboardService.executeFilter$.next(this.filterData);
  }

  filterMissionsByLaunch(launch_success: boolean) {
    if (this.filterData.launch_success === launch_success) {
      this.filterData.launch_success = undefined;
    } else {
      this.filterData.launch_success = launch_success;
    }

    this.dashboardService.executeFilter$.next(this.filterData);
  }

  filterMissionsByLanding(land_success: boolean) {
    if (this.filterData.land_success === land_success) {
      this.filterData.land_success = undefined;
    } else {
      this.filterData.land_success = land_success;
    }
    this.dashboardService.executeFilter$.next(this.filterData);
  }
}

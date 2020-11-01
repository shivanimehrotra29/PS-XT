import { Component, OnInit } from "@angular/core";
import { IFilterData, IMissionData } from "src/app/models/dashboard.interface";
import { DashboardService } from "src/app/services/dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  data: IMissionData[];
  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getAllMissions().subscribe((res: IMissionData[]) => {
      this.data = res;
    });

    this.dashboardService.executeFilter$.subscribe((filters: IFilterData) => {
      this.dashboardService
        .getLaunchesByFilters(filters)
        .subscribe((res: IMissionData[]) => {
          this.data = res;
        });
    });
  }
}

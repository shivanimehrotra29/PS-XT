import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { IFilterData } from "../models/dashboard.interface";

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  public baseUrl = "https://api.spaceXdata.com/v3/launches?limit=100";

  public executeFilter$ = new Subject();

  constructor(private http: HttpClient) {}

  public getLaunchesByFilters(filters: IFilterData): Observable<any> {
    let url = this.baseUrl;
    if (
      filters.launch_success !== undefined &&
      filters.launch_success !== null
    ) {
      url = url + `&launch_success=${filters.launch_success}`;
    }
    if (filters.land_success !== undefined && filters.land_success !== null) {
      url = url + `&land_success=${filters.land_success}`;
    }
    if (filters.year) {
      url = url + `&launch_year=${filters.year}`;
    }
    return this.http.get(url);
  }

  public getAllMissions(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}

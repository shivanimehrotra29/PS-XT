import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { IFilterData } from "../models/dashboard.interface";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { DashboardService } from "./dashboard.service";

describe("DashboardService", () => {
  let httpMock: HttpTestingController;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  it("should be created", () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service).toBeTruthy();
  });

  it("should call getAllMissions()", () => {
    const service: DashboardService = TestBed.get(DashboardService);
    httpMock = TestBed.get(HttpTestingController);
    service.baseUrl = "https://api.spaceXdata.com/v3/launches?limit=100";
    service.getAllMissions().subscribe(() => {});

    const request = httpMock.expectOne(service.baseUrl);
    expect(request.request.method).toBe("GET");
  });

  it("should execute filtered call when getLaunchesByFilters() is called", () => {
    const service: DashboardService = TestBed.get(DashboardService);
    httpMock = TestBed.get(HttpTestingController);
    const filters: IFilterData = {
      year: 2006,
      land_success: true,
      launch_success: true,
    };
    service.baseUrl = "https://api.spaceXdata.com/v3/launches?limit=100";
    service.getLaunchesByFilters(filters).subscribe(() => {});

    const request = httpMock.expectOne(
      `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2006`
    );
    expect(request.request.method).toBe("GET");
  });
});

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IFilterData } from "src/app/models/dashboard.interface";

import { FiltersComponent } from "./filters.component";

describe("FiltersComponent", () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [FiltersComponent],
      providers: [HttpClient],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should set year in filterData when filterMissionsByYear() is called", () => {
    component.filterData = {} as IFilterData;
    component.filterMissionsByYear(2006);
    expect(component.filterData.year).toBe(2006);
  });

  it("should set launch_success in filterData when filterMissionsByLaunch() is called", () => {
    component.filterData = {} as IFilterData;
    component.filterMissionsByLaunch(true);
    expect(component.filterData.launch_success).toBe(true);
  });

  it("should set land_success in filterData when filterMissionsByLanding() is called", () => {
    component.filterData = {} as IFilterData;
    component.filterMissionsByLanding(true);
    expect(component.filterData.land_success).toBe(true);
  });

  it("should unset year in filterData when filterMissionsByYear() is called on same value", () => {
    component.filterData = { year: 2006 } as IFilterData;
    component.filterMissionsByYear(2006);
    expect(component.filterData.year).toBe(undefined);
  });

  it("should unset launch_success in filterData when filterMissionsByLaunch() is called with same value", () => {
    component.filterData = { launch_success: true } as IFilterData;
    component.filterMissionsByLaunch(true);
    expect(component.filterData.launch_success).toBe(undefined);
  });

  it("should unset land_success in filterData when filterMissionsByLanding() is called with same value", () => {
    component.filterData = { land_success: true } as IFilterData;
    component.filterMissionsByLanding(true);
    expect(component.filterData.land_success).toBe(undefined);
  });
});

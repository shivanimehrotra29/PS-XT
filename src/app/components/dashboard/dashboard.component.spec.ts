import { HttpClient, HttpClientModule } from "@angular/common/http";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Observable, of, Subject } from "rxjs";
import { DashboardService } from "src/app/services/dashboard.service";
import { DashboardComponent } from "./dashboard.component";

class DashboardServiceMock {
  executeFilter$ = new Subject();

  getAllMissions(): Observable<any> {
    return of([]);
  }
  getLaunchesByFilters(): Observable<any> {
    return of([]);
  }
}

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service = new DashboardServiceMock();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [DashboardComponent],
      providers: [
        HttpClient,
        {
          provide: DashboardService,
          useValue: service,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call getLaunchesByFilters() when new filter value is recieved", () => {
    service.executeFilter$.subscribe((res) => {
      expect(service.getLaunchesByFilters).toHaveBeenCalledWith(res);
    });

    service.executeFilter$.next({});
  });
});

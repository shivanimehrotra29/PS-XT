import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FiltersComponent } from "./components/filters/filters.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, FiltersComponent, DashboardComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    NoopAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

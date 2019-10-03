import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherCurrentComponent } from './weather-current/weather-current.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'weather', component: WeatherCurrentComponent },
  { path: 'weather/:id', component: WeatherForecastComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

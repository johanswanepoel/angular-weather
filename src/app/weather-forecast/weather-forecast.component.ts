import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable, } from 'rxjs';
import { Locations, ForecastWeatherObject } from '../models/location';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent implements OnInit {
  forecast$: Observable<ForecastWeatherObject>;
  locations = Locations;
  loading: boolean;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.loadWeatherData();
  }

  loadWeatherData(): void {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');

    // subscribed with async pipe in template to avoid manual subscription
    this.forecast$ = this.weatherService
      .getForecast(id)
      .pipe(tap(_ => (this.loading = false)));
  }

  refreshData(): void {
    this.weatherService.refreshData();
    this.loadWeatherData();
  }
}

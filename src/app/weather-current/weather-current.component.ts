import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CurrentWeather } from '../models/location';

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.scss'],
})
export class WeatherCurrentComponent implements OnInit {
  current$: Observable<CurrentWeather[]>;
  loading: boolean;
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.loadWeatherData();
  }

  loadWeatherData() {
    this.loading = true;
    // subscribed with async pipe in template to avoid manual subscription
    this.current$ = this.weatherService
      .getWeather()
      .pipe(tap(_ => (this.loading = false)));
  }

  refreshData(): void {
    this.weatherService.refreshData();
    this.loadWeatherData();
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  @Input() weather: any;
  @Input() title: string;

  getAverage({ temp_min, temp_max }): number {
    // could have done this in template, but prefer computed logic here in case specs change
    return (temp_min + temp_max) / 2;
  }

  toKmPerHour(metersPerSecond: number): number {
    // converts m/s to km/h
    let kilometersPerHour = metersPerSecond / 1000; // to get km/second
    kilometersPerHour = kilometersPerHour * 60 * 60; // to get km/hour
    return Math.floor(kilometersPerHour);
  }

}

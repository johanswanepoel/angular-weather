import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  Locations,
  ForecastWeatherObject,
  CurrentWeatherRequest,
  CurrentWeather,
} from './models/location';
import { map, tap, catchError, retry } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  url = environment.openWeatherApiUrl;
  ids: string;
  /**
   * To avoid limitations on API calls made on free Open Weather account.
   * This is a simple HTTP call caching mechanism using a Map.
   * For data that changes frequently this will not be a viable option
   * without adding an automatic timeout or refresh of some sort.
   */
  cachedCurrentWeather: Map<string, string> = new Map([]);
  cachedForecastWeather: Map<string, string> = new Map([]);

  constructor(private http: HttpClient, private router: Router) {
    this.ids = Array.from(Locations.keys()).join();
    /**
     * Sets ids property to string of comma seperated ids as required by Open Weather API call
     * An advantage of storing the city ids as keys in the map is that
     * we can have access to the keys, convert to Array and join by `,` (default separator);
     */
  }

  getWeather(): Observable<CurrentWeather[]> {
    /**
     * Checks if exact query has been made before
     * if value exists in Map entry - returns previous results instead of HTTP
     */

    if (this.cachedCurrentWeather.has(this.ids)) {
      /**
       * Returns an observable of cached data if call has been made already
       */
      return of(JSON.parse(this.cachedCurrentWeather.get(this.ids)));
    }

    return this.http
      .get<CurrentWeatherRequest>(`${this.url}/group?id=${this.ids}&units=metric&appid=${environment.openWeatherApiKey}`)
      .pipe(
        catchError((err) => {
          this.handleError(err);
          return of({}) ;
        }),
        retry(3), // add retry incase network fails - can be improved by exponential debounce
        tap((res: CurrentWeatherRequest) =>
          this.cachedCurrentWeather.set(this.ids, JSON.stringify(res.list))
        ),
        map((res: CurrentWeatherRequest) => res.list)
        // ads entry to Map iterable used for caching, if it already exists it gets updated
        // returns mapped data, only insterested in list
      );
  }

  getForecast(id: string): Observable<ForecastWeatherObject> {
    if (this.cachedForecastWeather.has(id)) {
      return of(JSON.parse(this.cachedForecastWeather.get(id)));
    }

    return this.http
      .get<ForecastWeatherObject>(`${this.url}/forecast?id=${id}&units=metric&appid=${environment.openWeatherApiKey}`)
      .pipe(
        catchError((err) => {
          this.handleError(err);
          return of(null);
        }),
        retry(3), // add retry incase network fails
        tap((res: ForecastWeatherObject) =>
          this.cachedForecastWeather.set(id, JSON.stringify(res))
        )
        // ads an entry to the Map iterable used for caching, if it already exists it gets updated
      );
  }

  refreshData(): void {
    /**
     *   This method can be called from other components
     *   to clear the cache based on Map iterable entries.
     */

    this.cachedCurrentWeather.clear();
    this.cachedForecastWeather.clear();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Logging client-side or network errors
      console.error('An error occurred:', error.error.message);
    } else {
      // Logging unsuccessful backend request
      console.error(
        `Backend returned code ${error.status}`);
    }
  };
}

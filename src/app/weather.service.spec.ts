import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WeatherService } from './weather.service';
import { Locations, CurrentWeatherRequest } from './models/location';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MockCurrentWeatherData } from 'src/assets/mock-data/weatherCurrent';

describe('WeatherService', () => {
  // Declare the variables used for Weather Service
  let httpTestingController: HttpTestingController;
  let weatherService: WeatherService;
  let router: Router;
  let currentWeatherURL = "/assets/mock-data/weatherCurrent.json"
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    weatherService = new WeatherService(httpClient, router);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    
  });

  afterEach(() => {
    // Verify that no outstanding requests.
    httpTestingController.verify();
  });

  describe('Return ids used in REST API URL params', () => {
    it('should return ids for 5 cities', () => {
      expect(Locations.size).toBe(5);
    });

    it('should return ids for cities as a string', () => {
      weatherService.ids = Array.from(Locations.keys()).join();
      expect(weatherService.ids).not.toBeFalsy();
      expect(typeof weatherService.ids).toBe('string');
    });

    it('should return ids for cities seperated by commas', () => {
      weatherService.ids = Array.from(Locations.keys()).join();
      expect(weatherService.ids).toContain(',');
    });
  });

  describe('HTTP Cache', () => {
    it('should not have entries when created', () => {
      const currentCache = weatherService.cachedCurrentWeather;
      const forecastCache = weatherService.cachedForecastWeather;
      expect(currentCache.size).toBe(0);
      expect(forecastCache.size).toBe(0);
    });

    it('should clear cache when #refreshData is called', () => {
      const currentCache = weatherService.cachedCurrentWeather;
      const forecastCache = weatherService.cachedForecastWeather;
      currentCache.set('123,456,789', 'fake_entry');
      forecastCache.set('123', 'fake_entry');
      expect(currentCache.size).not.toBe(0);
      expect(forecastCache.size).not.toBe(0);
      weatherService.refreshData();
      expect(currentCache.size).toBe(0);
      expect(forecastCache.size).toBe(0);
    });
  });

  describe('HttpClient calls', () => {

    it('should return correct data using GET method', () => {
    
      // Make an HTTP GET request
      httpClient.get<CurrentWeatherRequest>(currentWeatherURL)
        .subscribe(res => {
          // When observable resolves, result should match test data
          expect(res).toEqual(MockCurrentWeatherData);
        });
    
        const req = httpTestingController.expectOne(currentWeatherURL);
      // If no requests or multiple requests matched that URL `expectOne()` would throw.

      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');
    
      // Subscribe callback asserts that correct data was returned.
      req.flush(MockCurrentWeatherData);
    
    });
   
  })

});


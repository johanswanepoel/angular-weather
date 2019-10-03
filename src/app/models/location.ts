export const Locations: Map<number, Location> = new Map([
  [
    2759794,
    {
      id: 2759794,
      name: 'Amsterdam',
      country: 'NL',
      coord: {
        lon: 4.88969,
        lat: 52.374031,
      },
    },
  ],
  [
    2964574,
    {
      id: 2964574,
      name: 'Dublin',
      country: 'IE',
      coord: {
        lon: -6.26719,
        lat: 53.34399,
      },
    },
  ],
  [
    2911298,
    {
      id: 2911298,
      name: 'Hamburg',
      country: 'DE',
      coord: {
        lon: 10,
        lat: 53.549999,
      },
    },
  ],
  [
    3117735,
    {
      id: 3117735,
      name: 'Madrid',
      country: 'ES',
      coord: {
        lon: -3.70256,
        lat: 40.4165,
      },
    },
  ],
  [
    6455259,
    {
      id: 6455259,
      name: 'Paris',
      country: 'FR',
      coord: {
        lon: 2.35236,
        lat: 48.856461,
      },
    },
  ],
]);

interface Location {
  id: number;
  name: string;
  country: string;
  coord: Coords;
}

interface Coords {
  lon: number;
  lat: number;
}

export interface CurrentWeatherRequest {
  cnt: number;
  list: CurrentWeather[];
}

export interface CurrentWeather {
  coord: Coord;
  sys: Sys;
  weather: Weather[];
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  id: number;
  name: string;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Sys {
  country?: string;
  timezone?: number;
  sunrise?: number;
  sunset?: number;
  pod?: string;
}

interface Coord {
  lon: number;
  lat: number;
}

// FORCAST WEATHER
export interface ForecastWeatherObject {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  timezone: number;
}

interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  sys: Sys;
  dt_txt: string;
  rain?: Rain;
}

interface Rain {
  '3h'?: number;
}

interface Clouds {
  all: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
  temp_kf?: number;
}

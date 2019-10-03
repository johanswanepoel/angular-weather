import { CurrentWeatherRequest } from 'src/app/models/location';

export const MockCurrentWeatherData: CurrentWeatherRequest = {
  cnt: 5,
  list: [
    {
      coord: {
        lon: 4.89,
        lat: 52.37,
      },
      sys: {
        country: 'NL',
        timezone: 7200,
        sunrise: 1562988809,
        sunset: 1563047901,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      main: {
        temp: 16.61,
        pressure: 1019,
        humidity: 82,
        temp_min: 15.56,
        temp_max: 17.78,
      },
      visibility: 10000,
      wind: {
        speed: 5.7,
        deg: 330,
      },
      clouds: {
        all: 75,
      },
      dt: 1563041710,
      id: 2759794,
      name: 'Amsterdam',
    },
    {
      coord: {
        lon: -6.27,
        lat: 53.34,
      },
      sys: {
        country: 'IE',
        timezone: 3600,
        sunrise: 1562991172,
        sunset: 1563050896,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      main: {
        temp: 18.31,
        pressure: 1026,
        humidity: 59,
        temp_min: 17.22,
        temp_max: 19,
      },
      visibility: 10000,
      wind: {
        speed: 4.6,
        deg: 340,
      },
      clouds: {
        all: 75,
      },
      dt: 1563041714,
      id: 2964574,
      name: 'Dublin',
    },
    {
      coord: {
        lon: 10,
        lat: 53.55,
      },
      sys: {
        country: 'DE',
        timezone: 7200,
        sunrise: 1562987193,
        sunset: 1563047065,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      main: {
        temp: 17.05,
        pressure: 1015,
        humidity: 72,
        temp_min: 15.56,
        temp_max: 18.89,
      },
      visibility: 10000,
      wind: {
        speed: 5.7,
        deg: 290,
      },
      clouds: {
        all: 75,
      },
      dt: 1563041553,
      id: 2911298,
      name: 'Hamburg',
    },
    {
      coord: {
        lon: -3.7,
        lat: 40.42,
      },
      sys: {
        country: 'ES',
        timezone: 7200,
        sunrise: 1562993719,
        sunset: 1563047115,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      main: {
        temp: 32.94,
        pressure: 1012,
        humidity: 20,
        temp_min: 30,
        temp_max: 36,
      },
      visibility: 10000,
      wind: {
        speed: 6.7,
        deg: 220,
      },
      clouds: {
        all: 0,
      },
      dt: 1563041896,
      id: 3117735,
      name: 'Madrid',
    },
    {
      coord: {
        lon: 2.35,
        lat: 48.86,
      },
      sys: {
        country: 'FR',
        timezone: 7200,
        sunrise: 1562990431,
        sunset: 1563047500,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      main: {
        temp: 23.65,
        pressure: 1019,
        humidity: 47,
        temp_min: 22.78,
        temp_max: 24.44,
      },
      visibility: 10000,
      wind: {
        speed: 5.7,
        deg: 20,
      },
      clouds: {
        all: 0,
      },
      dt: 1563041938,
      id: 6455259,
      name: 'Paris',
    },
  ],
};

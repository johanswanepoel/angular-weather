import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { MaterialModule } from '../material.module';
import { MockCurrentWeatherData } from 'src/assets/mock-data/weatherCurrent';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  const weatherInput = MockCurrentWeatherData.list[0];
  const titleInput = weatherInput.name;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherComponent],
      imports: [MaterialModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    component.weather = weatherInput;
    component.title = titleInput;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#getAverage', () => {
    it('should return average of min and max temperatures', () => {
      const temps = { temp_min: 15, temp_max: 15 };
      expect(component.getAverage(temps)).toEqual(15);
    });
  });

  describe('#toKmPerHour', () => {
    it('should convert meters per second to kilometers per hour', () => {
      const metersPerSecond = 10;
      expect(component.toKmPerHour(metersPerSecond)).toEqual(36);
    });
  });
});

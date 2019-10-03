import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastComponent } from './weather-forecast.component';
import { MaterialModule } from '../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherComponent } from '../weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from '../error/error.component';

describe('WeatherForecastComponent', () => {
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherForecastComponent, WeatherComponent, ErrorComponent],
      imports: [
        MaterialModule,
        RouterTestingModule,
        HttpClientModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

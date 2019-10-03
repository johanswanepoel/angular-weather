import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCurrentComponent } from './weather-current.component';
import { MaterialModule } from '../material.module';
import { WeatherComponent } from '../weather/weather.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from '../error/error.component';

describe('WeatherCurrentComponent', () => {
  let component: WeatherCurrentComponent;
  let fixture: ComponentFixture<WeatherCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCurrentComponent, WeatherComponent, ErrorComponent],
      imports: [
        MaterialModule,
        RouterTestingModule,
        HttpClientModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

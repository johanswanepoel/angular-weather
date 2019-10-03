import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WeatherCurrentComponent } from './weather-current/weather-current.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherComponent } from './weather/weather.component';
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    WeatherCurrentComponent,
    WeatherForecastComponent,
    WeatherComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

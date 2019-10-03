import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  exports: [
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
})
export class MaterialModule {}

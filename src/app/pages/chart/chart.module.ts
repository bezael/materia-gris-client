import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { ChartComponent } from './chart.component';


@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule, NgxChartsModule],
  exports: [ChartComponent],
})
export class ChartModule {}

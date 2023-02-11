import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

import { ChartType } from 'chart.js';
import { tap } from 'rxjs';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {

  public lineChartType: ChartType = 'line';

  multi: any[];
  // options
  legend = false;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = false;
  showXAxisLabel = false;
  xAxisLabel = 'Year';
  yAxisLabel = 'Population';
  timeline = true;


  private dataSocket = inject(DataService);

  constructor() {
    this.multi = [
      {
        name: 'BTC',
        series: [],
      },
      {
        name: 'ETH',
        series: [],
      },
    ];

  }
  ngOnInit(): void {
    this.dataSocket.getPrices$()
      .pipe(
        tap((data) => {
          const [BTC, ETH] = data;
          const pricesBTC = this.parseDate(BTC.prices);

          const pricesETH = this.parseDate(ETH.prices);

          const [currentBTC, currentETH] = this.multi;

          this.multi[0].series = currentBTC.series.concat(pricesBTC);

          this.multi[1].series = currentETH.series.concat(pricesETH);

          this.multi = [...this.multi];
      }))
      .subscribe();


  }


  parseDate(dataRaw: Array<any>): Array<any> {
    return dataRaw.map(([name, value]) => {
      return {
        name: new Date(name),
        value,
      };
    });
  }
}

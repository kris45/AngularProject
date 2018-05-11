import { Input, Component, OnChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartData } from '../../brands-info/models/chartData';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges {

  @Input() chartConfig: ChartData[];
  @Input() titleText;
  chart: Chart;

  ngOnChanges(): void {
    this.chart = new Chart({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        width: 300,
        height: 300,
        backgroundColor: 'transparent'
      },
      legend: {
        align: 'right',
        verticalAlign: 'top',
        layout: 'vertical',
        x: 0,
        y: 100
      },
      title: {
        text: this.titleText
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true,
          size: 150
        }
      },
      series: this.chartConfig
    });
  }

}

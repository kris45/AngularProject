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
        text: 'Customer Satisfaction in January, 2018'
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

  // ngOnChanges(): void {
  //   this.chart = new Chart({
  //     chart: {
  //       plotBackgroundColor: null,
  //       plotBorderWidth: null,
  //       plotShadow: false,
  //       type: 'pie',
  //       width: 300,
  //       height: 300,
  //       backgroundColor: 'transparent'
  //     },
  //     legend: {
  //       align: 'right',
  //       verticalAlign: 'top',
  //       layout: 'vertical',
  //       x: 0,
  //       y: 100
  //     },
  //     title: {
  //       text: 'Customer Satisfaction in January, 2018'
  //     },
  //     credits: {
  //       enabled: false
  //     },
  //     tooltip: {
  //       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  //     },
  //     plotOptions: {
  //       pie: {
  //         allowPointSelect: true,
  //         cursor: 'pointer',
  //         dataLabels: {
  //           enabled: false
  //         },
  //         showInLegend: true,
  //         size: 150
  //       }
  //     },
  //     series: [{
  //       name: 'Brands',
  //       data: [{
  //         name: 'Chrome',
  //         y: 61.41,
  //         sliced: true,
  //         selected: true
  //       }, {
  //         name: 'Internet Explorer',
  //         y: 11.84
  //       }, {
  //         name: 'Firefox',
  //         y: 10.85
  //       }, {
  //         name: 'Edge',
  //         y: 4.67
  //       }, {
  //         name: 'Safari',
  //         y: 4.18
  //       }, {
  //         name: 'Other',
  //         y: 7.05
  //       }]
  //     }]
  //   });
  // }
}

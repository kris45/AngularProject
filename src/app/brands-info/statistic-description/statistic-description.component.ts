import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Brand } from '../models';
import { BrandsService } from '../services/brands.service';
import { ChartService } from '../../chart/services/chart.service';

@Component({
  selector: 'app-statistic-description',
  templateUrl: './statistic-description.component.html',
  styleUrls: ['./statistic-description.component.scss']
})
export class StatisticDescriptionComponent implements OnInit {
  @Input() brandSearch = '';

  brandsForm: FormGroup = new FormGroup({
    'searchBrand': new FormControl()
  });

  filteredBrandsList: Brand[] = [];
  initialBrandsList: Brand[] = [];
  statisticDetails;
  chartTitle;
  chartDataList;
  sortValue = false;

  constructor(private brandsService: BrandsService, private chartService: ChartService) {
  }

  ngOnInit() {
    this.brandsService.getData()
      .subscribe(brandsInfo => {
        this.filteredBrandsList = brandsInfo.brandsList;
        this.initialBrandsList = brandsInfo.brandsList;
        this.statisticDetails = brandsInfo.details;
        this.formChart();
      });
  }

  search() {
    const searchValue = this.brandsForm.get('searchBrand').value;
    this.filteredBrandsList = this.brandsService.getSearchResult(searchValue, this.filteredBrandsList);
  }

  reset() {
    this.filteredBrandsList = this.brandsService.getInitialBrandsList(this.initialBrandsList);
  }

  sort() {
    ({list: this.filteredBrandsList, sortValue: this.sortValue} =
      this.brandsService.getSortedList(this.filteredBrandsList, this.sortValue));
  }

  formChart() {
    ({title: this.chartTitle, chartConfig: this.chartDataList} =
      this.chartService.getChartConfig(this.initialBrandsList, this.statisticDetails));
  }

}

import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Brand, ChartData} from '../models';
import {BrandsService} from '../services/brands.service';

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
  statisticBrands = {};
  chartDataList = [{
    name: 'Brands',
    data: [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Other',
      y: 7.05
    }]
  }];
  sortValue = false;

  constructor(private brandsService: BrandsService) {
  }

  ngOnInit() {
    this.brandsService.getData()
      .subscribe(brandsInfo => {
        console.log(brandsInfo);
        this.filteredBrandsList = brandsInfo.brandsList;
        this.initialBrandsList = brandsInfo.brandsList;
        //this.statisticBrands = brandsInfo.details;
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

}

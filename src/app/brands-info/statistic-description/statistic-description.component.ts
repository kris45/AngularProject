import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Brand} from '../models/brand';
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
  sortValue = false;

  constructor(private brandsService: BrandsService) {
  }

  ngOnInit() {
    this.brandsService.getData()
      .subscribe(brandsList => {
        console.log(brandsList);
        // this.filteredBrandsList = brandsList;
        // this.initialBrandsList = brandsList;
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

import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Brand } from '../shared/models/brand';
import { chartData } from '../shared/models/chartData';
import { HttpService } from '../shared/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() brandSearch = '';
  brands: Brand[] = [];
  filteredBrands: Brand[] = [];
  chartDataList: chartData[] = [];
  sortValue = false;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getData()
      .subscribe((data: Brand[]) => {
        console.log(data)
      this.brands = data;
      this.filteredBrands = data;
      this.chartDataList = [];
      data.forEach((elem) => {
        const obj: chartData = {name: '', y: null};
        obj.name = elem.name;
        obj.y = elem.amount;
        this.chartDataList.push(obj);
      });
    });
  }

  search(inputValue) {
    const inputValueFormatted =  inputValue.toLowerCase().trim();
    this.filteredBrands = this.brands.filter((elem) => {
      return elem.name.toLowerCase().indexOf(inputValueFormatted) >= 0;
    });
  }

  reset(domElem) {
    domElem.value = '';
    this.filteredBrands = this.brands;
  }

  sort() {
    this.sortValue = !this.sortValue;
    if (this.sortValue) {
      this.filteredBrands.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
    } else {
      this.filteredBrands.sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0);
    }
  }


}

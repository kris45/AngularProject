import { Input, Component, OnInit } from '@angular/core';
import { Brand } from '../../models/brand';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  @Input() brands: Brand[];
  constructor() { }

  ngOnInit() {
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Brand} from '../models/brand';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BrandsService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('/assets/products.json')
      .map((res: { brandsList: Brand[], details}) => {
        return res;
      });
  }

  getSearchResult(searchValue, initialList) {
    return initialList.filter((elem) => {
      return elem.name.toLowerCase().indexOf(searchValue) >= 0;
    });
  }

  getInitialBrandsList(initialList) {
    return initialList;
  }

  getSortedList(currentList, sortValue) {
    sortValue = !sortValue;
    if (sortValue) {
      const list = currentList.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
      return {list, sortValue};
    } else {
      const list = currentList.sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0);
      return {list, sortValue};
    }
  }
}

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class ChartService {

  constructor() {
  }

  getChartConfig(brandList, details) {
    const brandsArray = brandList.map((elem) => {
      return ({name: elem.name, y: elem.amount});
    });

    return {chartConfig: [{name: details.name, data: brandsArray}], title: details.title};

  }
}

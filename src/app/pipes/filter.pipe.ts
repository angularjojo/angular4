import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, filterData?: any): any {
    if (!items || !items.length) return [];
    if (!filterData) return items;
      
    filterData = filterData.toLowerCase();   
    if (filterData && Array.isArray(items)) {
      const keys = Object.keys(items[0]);
      return items.filter(v => v && keys.some(k =>  String(v[k]).toLowerCase().indexOf(filterData) >= 0));
    }
  }

}

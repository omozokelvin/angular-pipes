import { Pipe, PipeTransform } from '@angular/core';

//pure can lead to performance issue if not properly managed
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): unknown {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    return value
      .filter((item) => item[propName] === filterString)
  }

}

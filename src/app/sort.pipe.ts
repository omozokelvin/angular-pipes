import { Pipe, PipeTransform } from '@angular/core';

enum OrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: [], propName: string, order?: OrderEnum): unknown {
    if (value.length === 0) {
      return value;
    }

    if (order && !Object.values(OrderEnum).includes(order)) {
      throw new Error("Invalid order type");
    }

    return value.sort((a, b) => {
      let textA = (a[propName] as string).toUpperCase();
      let textB = (b[propName] as string).toUpperCase();

      if (order === 'DESC') {
        [textA, textB] = [textB, textA];
      }

      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }

}

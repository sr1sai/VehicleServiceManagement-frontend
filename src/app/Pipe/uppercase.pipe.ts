import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
  standalone: false
})
export class UppercasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value == 'string') {
      return value.toUpperCase();
    }
    return value;
  }
}

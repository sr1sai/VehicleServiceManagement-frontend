import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes',
  standalone: false
})
export class PipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

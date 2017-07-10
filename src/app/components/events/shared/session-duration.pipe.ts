import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(val: number): string {
    switch(val) {
      case 1: return 'half hour';
      case 2: return 'hour';
      case 3: return 'half day';
      case 4: return 'day';
      default: val.toString();
    }
  }
}
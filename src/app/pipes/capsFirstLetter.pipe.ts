import { Pipe, PipeTransform } from '@angular/core';
/*
 * Capitalize the first letter of the string
 * Takes a string as a value.
 * Usage:
 *  value | capsFirstLetter
 * Example:
 *  // value.name = daniel
 *  {{ value.name | capsFirstLetter  }}
 *  fromats to: Daniel
*/
@Pipe({
  name: 'capsFirstLetter'
})
export class CapsFirstLetter implements PipeTransform {
  transform(value: string, args: any[]): string {
    if (value === null) return 'Not assigned';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
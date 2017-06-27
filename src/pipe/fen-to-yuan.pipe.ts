import {PipeTransform, Pipe} from "@angular/core";
/**
 * 将分转换成元
 */
@Pipe({name: "f2y"})
export class FenToYuanPipe implements PipeTransform{

  transform(value: any, ...args: any[]): any {
    return value != null?(value / 100).toFixed(2):"";
  }

}

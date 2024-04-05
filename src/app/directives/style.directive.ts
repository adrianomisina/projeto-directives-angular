import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  // @HostBinding('attr.style') attrStyle = 'background-color:orange; color: white';
  // @HostBinding('style') propstyle = 'background-color:orange; color: white';
  // @HostBinding('style') propStyleObj = {
  //   backgroundColor: 'orange',
  //   color: 'white'
  // }
  // @HostBinding('style.backgroundColor') bgColor = 'orange';
  // @HostBinding('style.color') bgStyle = 'white';
  @HostBinding('style.fontSize') size = '40px';
}
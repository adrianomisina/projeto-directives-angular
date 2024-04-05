import {Directive,HostBinding} from '@angular/core';

@Directive({
  selector: '[appClass]'
})

export class ClassDirecttive {
  // @HostBinding('attr.class') attrClass = 'meu-texto meu-size';
  // @HostBinding('className') className = 'meu-texto meu-size';
  // @HostBinding('class') classObj = {
  //   'meu-texto': true,
  //   'meu-size': true
  // }
  @HostBinding('class') classObj ={
    'meu-texto': true,
    'meu-size': true
  }
}
/* tslint:disable use-output-property-decorator directive-class-suffix */
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({selector: '[myClick]'})
export class ClickDirective {
  // 用法1：把别名传进@Input/@Output 装饰器，就可以为属性指定别名
  @Output('myClick') clicks = new EventEmitter<string>(); //  @Output(alias) propertyName = ...

  toggle = false;

  constructor(el: ElementRef) {
    el.nativeElement
      .addEventListener('click', (event: Event) => {
        this.toggle = !this.toggle;
        this.clicks.emit(this.toggle ? 'Click!' : '');
      });
  }
}

@Directive({
  selector: '[myClick2]',
  // tslint:disable: no-outputs-metadata-property
  // 用法2：在 inputs 和 outputs 数组中为属性指定别名
  outputs: ['clicks:myClick2']  // propertyName:alias
})
// tslint:enable: no-outputs-metadata-property
export class ClickDirective2 {
  clicks = new EventEmitter<string>();
  toggle = false;

  constructor(el: ElementRef) {
    el.nativeElement
      .addEventListener('click', (event: Event) => {
        this.toggle = !this.toggle;
        this.clicks.emit(this.toggle ? 'Click2!' : '');
      });
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-keyup1',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values1}}</p>
    <p>{{values2}}</p>
  `,
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent_v1 {
  values1= '';
  values2= '';

  onKey(event: any) {
    this.values1 += event.target.value + ' | ';
    this.values2 += event.key + ' | ';
  }

}

@Component({
  selector: 'app-keyup2',
  template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyupComponent_v2 {
  values = '';
  onKey(value:string) {
    this.values += value + ' | ';
  }
}

@Component({
  selector: 'app-key-up3',
  template: `
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})
export class KeyupComponent_v3 {
  value = '';
  onEnter(value: string) {this.value = value;}
}

@Component({
  selector: 'app-key-up4',
  template: `
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">
    <p>{{value}}</p>
  `
})
export class KeyupComponent_v4 {
  value = '';
  update(value: string) {this.value = value;}
}

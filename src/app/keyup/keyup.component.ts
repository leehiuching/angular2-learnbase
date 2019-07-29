import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyup',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values1}}</p>
    <p>{{values2}}</p>
  `,
  styleUrls: ['./keyup.component.css']
})
export class KeyupComponent {
  values1= '';
  values2= '';

  onKey(event: any) {
    this.values1 += event.target.value + ' | ';
    this.values2 += event.key + ' | ';
  }

}

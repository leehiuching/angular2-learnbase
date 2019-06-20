import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {

  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(2, 'Bombasto'),
    new Hero(3, 'Mageneta'),
    new Hero(4, 'Tornado')
  ];
  currentHero = this.heroes[0];
  title = 'Template Syntax';
  heroImageUrl = 'https://angular.staticblitz.com/a2d8b336.png';
  isUnchanged = true;

  constructor() { }

  ngOnInit() {
  }

  getVal(): number { return 2; }

  alert(msg?: string)      { window.alert(msg); }

  deleteHero(hero?: Hero) {
    this.alert(`Delete ${hero ? hero.name : 'the hero'}.`);
  }

  onSave(event?: KeyboardEvent) {
    let evtMsg = event ? ' Event target is ' + (<HTMLElement>event.target).textContent : '';
    this.alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }

  onSubmit(data: any) {/* referenced but not used */}
}

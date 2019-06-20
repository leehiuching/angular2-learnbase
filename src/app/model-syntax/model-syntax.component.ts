import { Component, OnInit, AfterViewInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-model-syntax',
  templateUrl: './model-syntax.component.html',
  styleUrls: ['./model-syntax.component.css']
})
export class ModelSyntaxComponent implements OnInit {

  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(2, 'Bombasto'),
    new Hero(3, 'Mageneta'),
    new Hero(4, 'Tornado')
  ];
  currentCustomer = this.heroes[0];
  title = 'Template Syntax';
  itemImageUrl = 'https://angular.staticblitz.com/a2d8b336.png';
  heroImageUrl: string = 'https://angular.staticblitz.com/a2d8b336.png';
  actionName = 'Go for it';
  badCurly = 'bad curly';
  isSpecial = true;
  clickMessage = 'Event Binding';
  currentItem = { name: 'teapot'} ;
  fontSizePx = 16;
  isActive = false;
  currentHero: Hero;
  hero: Hero; // defined to demonstrate template context precedence
  heroesWithTrackByCountReset = 0;
  heroIdIncrement = 1;
  heroesNoTrackByCount   = 0;
  @ViewChildren('noTrackBy')   heroesNoTrackBy:   QueryList<ElementRef>;
  @ViewChildren('withTrackBy') heroesWithTrackBy: QueryList<ElementRef>;
  heroesWithTrackByCount = 0;


  get nullHero(): Hero { return null; }
  
  constructor() { }

  ngOnInit() {
    this.resetHeroes();
  }

  ngAfterViewInit() {
    // Detect effects of NgForTrackBy
    trackChanges(this.heroesNoTrackBy,   () => this.heroesNoTrackByCount++);
    trackChanges(this.heroesWithTrackBy, () => this.heroesWithTrackByCount++);
  }

  getVal() {
    return 2;
  }

  onSave(event) {
    console.log('事件绑定', event);
  }

  setUppercaseName(name: string) {
    this.currentCustomer.name = name.toUpperCase();
  }

  // updates with fresh set of cloned heroes
  resetHeroes() {
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.currentHero = this.heroes[0];
    this.hero = this.currentHero;
    this.heroesWithTrackByCountReset = 0;
  }

  changeIds() {
    this.resetHeroes();
    this.heroes.forEach(h => h.id += 10 * this.heroIdIncrement++);
    this.heroesWithTrackByCountReset = -1;
  }

  clearTrackByCounts() {
    const trackByCountReset = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroesNoTrackByCount = -1;
    this.heroesWithTrackByCount = trackByCountReset;
    this.heroIdIncrement = 1;
  }
}
// helper to track changes to viewChildren
function trackChanges(views: QueryList<ElementRef>, changed: () => void) {
  let oldRefs = views.toArray();
  views.changes.subscribe((changes: QueryList<ElementRef>) => {
      const changedRefs = changes.toArray();
      // Check if every changed Element is the same as old and in the same position
      const isSame = oldRefs.every((v, i) => v.nativeElement === changedRefs[i].nativeElement);
      if (!isSame) {
        oldRefs = changedRefs;
        // wait a tick because called after views are constructed
        setTimeout(changed, 0);
      }
  });
}
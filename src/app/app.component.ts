import { Component } from '@angular/core';
import { Hero } from './hero'

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is {{myHero.name}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{hero.name}}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>
    <app-model-syntax></app-model-syntax>
  `
})
export class AppComponent {
  /** 声明和初始化属性的两种方法
  // 方法一：直接在类中变量赋值
  // title = 'Tour of Heroes';
  // hero = 'Windstorm'

  // 方法二：利用构造函数声明和初始化变量
  title: string;
  hero: string;

  constructor() {
    // 方法二：利用构造函数声明和初始化变量 
    this.title = 'Tour of Heroes',
    this.hero = 'Windstorm'
  }
  */

  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(2, 'Bombasto'),
    new Hero(3, 'Mageneta'),
    new Hero(4, 'Tornado')
  ];
  myHero = this.heroes[0];
}

import { Component, OnInit, AfterViewInit, QueryList, ViewChildren, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../hero'

@Component({
  selector: 'app-model-syntax',
  templateUrl: './model-syntax.component.html',
  styleUrls: ['./model-syntax.component.css']
})
export class ModelSyntaxComponent implements OnInit {

  heroes: Hero[];
  currentCustomer: Hero;
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
  clickMessage2 = '';
  private _submitMessage = '';
  @ViewChild('heroForm') form: NgForm;


  get nullHero(): Hero { return null; }

  get submitMessage() {
    if (!this.form.valid) {
      this._submitMessage = '';
    }
    return this._submitMessage;
  }
  
  constructor() { }

  ngOnInit() {
    this.resetHeroes();
  }

  ngAfterViewInit() {
  }

  resetHeroes() {
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.currentCustomer = this.heroes[0];
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

  getItems() {
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(2, 'Bombasto'),
      new Hero(3, 'Mageneta'),
      new Hero(4, 'Tornado'),
      new Hero(5, 'xuezhiqian'),
    ];
  }

  trackyByIndex(index, item ){
    return index; //会根据index是否有变化-》再对比每一项的内容
  }

  callPhone(value: string) {
    this.alert(`Calling ${value} ...`); 
  }

  alert(msg?: string) { 
    window.alert(msg); 
  }

  onSubmit(form: NgForm) {
    this._submitMessage =  'Submitted. form value is ' + JSON.stringify(form.value);
  }
  
  callFax(value: string)   { this.alert(`Faxing ${value} ...`); }

  deleteHero(hero?: Hero) {
    this.alert(`Delete ${hero ? hero.name : 'the hero'}.`);
  }
}
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeroDetailComponent } from './app-hero-detail.component';

describe('AppHeroDetailComponent', () => {
  let component: AppHeroDetailComponent;
  let fixture: ComponentFixture<AppHeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

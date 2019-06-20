import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSyntaxComponent } from './model-syntax.component';

describe('ModelSyntaxComponent', () => {
  let component: ModelSyntaxComponent;
  let fixture: ComponentFixture<ModelSyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelSyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

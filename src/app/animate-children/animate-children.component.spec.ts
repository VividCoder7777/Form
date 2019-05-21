import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateChildrenComponent } from './animate-children.component';

describe('AnimateChildrenComponent', () => {
  let component: AnimateChildrenComponent;
  let fixture: ComponentFixture<AnimateChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimateChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimateChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimquizComponent } from './simquiz.component';

describe('SimquizComponent', () => {
  let component: SimquizComponent;
  let fixture: ComponentFixture<SimquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

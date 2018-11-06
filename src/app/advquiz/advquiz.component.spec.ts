import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvquizComponent } from './advquiz.component';

describe('AdvquizComponent', () => {
  let component: AdvquizComponent;
  let fixture: ComponentFixture<AdvquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsprojectsComponent } from './jsprojects.component';

describe('JsprojectsComponent', () => {
  let component: JsprojectsComponent;
  let fixture: ComponentFixture<JsprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

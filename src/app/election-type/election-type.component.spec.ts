import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionTypeComponent } from './election-type.component';

describe('ElectionTypeComponent', () => {
  let component: ElectionTypeComponent;
  let fixture: ComponentFixture<ElectionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionsessionComponent } from './electionsession.component';

describe('ElectionsessionComponent', () => {
  let component: ElectionsessionComponent;
  let fixture: ComponentFixture<ElectionsessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionsessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

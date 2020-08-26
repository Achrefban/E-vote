import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListElectionsessionComponent } from './list-electionsession.component';

describe('ListElectionsessionComponent', () => {
  let component: ListElectionsessionComponent;
  let fixture: ComponentFixture<ListElectionsessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListElectionsessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListElectionsessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

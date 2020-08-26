import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurAuthComponent } from './electeur-auth.component';

describe('ElecteurAuthComponent', () => {
  let component: ElecteurAuthComponent;
  let fixture: ComponentFixture<ElecteurAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecteurAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecteurAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

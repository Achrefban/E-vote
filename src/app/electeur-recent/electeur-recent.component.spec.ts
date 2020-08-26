import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurRecentComponent } from './electeur-recent.component';

describe('ElecteurRecentComponent', () => {
  let component: ElecteurRecentComponent;
  let fixture: ComponentFixture<ElecteurRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecteurRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecteurRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

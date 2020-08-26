import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurUpdateRecentComponent } from './electeur-update-recent.component';

describe('ElecteurUpdateRecentComponent', () => {
  let component: ElecteurUpdateRecentComponent;
  let fixture: ComponentFixture<ElecteurUpdateRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElecteurUpdateRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElecteurUpdateRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
